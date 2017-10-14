import { Template } from "./template";
import { easingTypes } from "./easing_types";

const _origin_position = new WeakMap();
const _origin_size = new WeakMap();

export class Region {

    /**
     * The init function creates a new region object to keep track of region specific information
     * like location, template name, region name, etc.
     * @param {String} region_name Name of the region you want to control
     * @param {String} template_name Name of the containing template
     * @param {Array} origin_xy Array of the regions' starting top left coordinates, [x,y]
     * @param {Array} origin_size Array of the regions' size [x,y]
     * @return {Obj} New region object
     */
    constructor(region_name, template_name, origin_position, origin_size) {
        this.region_name = region_name;
        this.template_name = template_name;
        _origin_position.set(this, origin_position);
        _origin_size.set(this, origin_size);
        this.current_position = _origin_position.get(this);
        this.current_size = _origin_size.get(this);
    }

    /**
    * Seeks to the next content item in that region
    * @param {String} direction Direction of pagination prev|next|first
    * @param {Bool|String} wrap Controls what happens when reach the end of the list
    * @parm {String} regionName Name of the region you want to seek
    * @return {Void}
    */
    static Seek(region_name, direction, wrap = true) {
        FWI.RunScript('Region['+ region_name +'].Seek("' + direction + '", "' + wrap + '");');
    }

    /*
     * getter for the original position
     * @return {Array} Array of original [x,y] position
     */
    get originPosition() {
        return _origin_position.get(this);
    }

    /*
     * getter for the original size
     * @return {Array} Array of original [x,y] size
     */
    get originSize() {
        return _origin_size.get(this)
    }

    /*
     * Resets the position of the region to the original
     * @return {Void}
     */
    resetPosition() {
        Template.ClearLeft(this.region_name);
        Template.ClearTop(this.region_name);
        this.current_xy = this.originXY;
    }

    /*
     * Resets the size of the region to the original
     * @return {Void}
     */
    resetSize() {
        Template.ClearHeight(this.region_name);
        Template.ClearWidth(this.region_name);
        this.current_size = this.originSize;
    }

    /*
     * bound seek method with region name automatially given
     * see Region.Seek for more
     */
    seek(direction, wrap = true) {
        Region.Seek(this.region_name, direction, wrap);
    }

    /*
     * Sets the new horizontal position of the region
     * @param {Int} value Horizontal position in pixels from left of the screen
     * @return {Void}
     */
    _moveX(value) {
        Template.SetLeft(this.region_name, value);
    }

    /*
     * Sets the new vertical position of the region
     * @param {Int} value Vertical position in pixels from top of the screen
     * @return {Void}
     */
    _moveY(value) {
        Template.SetTop(this.region_name, value);
    }

    /*
     * Sets the new width of the region
     * @param {Int} value Width in pixels
     * @return {Void}
     */
    _resizeX(value) {
        Template.SetWidth(this.region_name, value);
    }

    /*
     * Sets the new height of the region
     * @param {Int} value Height in pixels
     * @return {Void}
     */
    _resizeY(value) {
        Template.SetHeight(this.region_name, value);
    }

    /**
     * The move function moves a region to a new set of xy coordinantes using predefined easing types.
     * @param {Array} end_pos A list of [x,y] cordinates for the end position of the top left of the region
     * @param {Int} duration How long the animation lasts in milliseconds
     * @param {String} type What kind of easing to apply to the tween animation
     * @return {Void}
     */
    moveTo(end_pos, duration = 1000, type = 'linear') {
        //log.info('pathTo called, calling _animateRegionInit');
        this._animateRegionInit(end_pos, duration, type, 'position');
    }

    /**
     * The resize function resises a region to a new set of xy coordinantes using predefined easing types.
     * @param {Array} end_size A list of [x,y] cordinates for the end size
     * @param {Int} duration How long the animation lasts in milliseconds
     * @param {String} type What kind of easing to apply to the tween animation
     * @return {Void}
     */
    resize(end_size, duration = 1000, type = 'linear') {
        this._animateRegionInit(end_size, duration, type, 'size');
    }

    /**
     * Intializes some variables for use in the animation and calls the main animation method
     * @param {Array} end_coords [x,y] list of the end coordinates you want the region to move to
     * @param {Int} duration How long the animation plays in milliseconds
     * @param {String} type The easting type used for the tweening animation
     * @return {Void}
     */
    _animateRegionInit(end_coords, duration, type, animation_type) {
        //log.info('_animateRegionInit called, setting vars and calling _animateRegion');

        let delta_x;
        let delta_y;

        const start_time = new Date().getTime();
        const end_time = start_time + duration;

        if (animation_type == 'position') {
            delta_x = end_coords[0] - this.current_position[0];
            delta_y = end_coords[1] - this.current_position[1];
        }

        else if (animation_type == 'size') {
            //log.info('in the size animation tyype chooser init');
            delta_x = end_coords[0] - this.current_size[0];
            delta_y = end_coords[1] - this.current_size[1];
        };

        //log.debug({startTime: start_time, endTime:end_time, deltaX:delta_x, deltaY: delta_y, duration: duration, type: type, animation_type: animation_type});

        this._animateRegion(end_coords,delta_x,delta_y,start_time,end_time,duration,type, animation_type);
    }

    /**
     * Main animation loop, computes the next [x,y] values of the animation
     * @param {Array} end_coords [x,y] list of the end coordinates you want the region to move to
     * @param {Int} cX The total delta of the X coordinate from beginning position to end position
     * @param {Int} cY The total delta of theY coordinate from beginning position to end position
     * @param {DateTime} start_time A datetime time object
     * @param {Int|DateTime} end_time A int or daytime object that represents the end of the animation
     * @param {Int} d The duration of the animation in milliseconds
     * @param {String} type The easting type used for the tweening animation
     * @return {Void}
     */
    _animateRegion(end_coords,cX,cY,start_time,end_time,d,type, animation_type) {
        //log.info('Inside main animation loop');

        let next_pos_x;
        let next_pos_y;
        let next_size_x;
        let next_size_y;

        const now = new Date().getTime();
        const t = now - start_time;

        //log.debug('Now: ',now, ' T: ',t);

        //log.debug({cx: cX, cy: cY, startTime: start_time, endTime: end_time, duration: d, type:type})

        if (now < end_time) {

            //log.info('inside if loop');
            if (animation_type == 'position') {
                next_pos_x = easing_types[type](t,this.current_position[0],cX,d);
                next_pos_y = easing_types[type](t,this.current_position[1],cY,d);

                this._moveX(next_pos_x);
                this._moveY(next_pos_y);
            }

            else if (animation_type == 'size') {
                next_size_x = easing_types[type](t,this.current_size[0],cX,d);
                next_size_y = easing_types[type](t,this.current_size[1],cY,d);

                this._resizeX(next_size_x);
                this._resizeY(next_size_y);
            };

            const self = this;

            function callback() {
                self._animateRegion(end_coords,cX,cY,start_time,end_time,d,type, animation_type);
            }

            window.requestAnimationFrame(callback);
        }

        else {
            //log.debug('inside else, almost over');

            if (animation_type == 'position') {
                this._moveX(end_coords[0]);
                this._moveY(end_coords[1]);
                this.current_position[0] = end_coords[0];
                this.current_position[1] = end_coords[1];
            }

            else if (animation_type == 'size') {
                this._resizeX(end_coords[0]);
                this._resizeY(end_coords[1]);
                this.current_size[0] = end_coords[0];
                this.current_size[1] = end_coords[1];
            }

            return;
        };
    }
}