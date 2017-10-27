import { Template } from "./template.js";
import { easingTypes } from "./easing_types.js";

/**
 * These store information outside of the class for reasons
 */
const _origin_position = new WeakMap();
const _origin_size = new WeakMap();

/**
* This is the amazing region class.  Unlike it's CM counterpart there are more scrpipts to this one!
* Of course it has the traditional region scripts, but with the addition of animations!
*
* Example:
* ```
* var flashCard = new fwi.Region('FlashCard', 'Main', [710, 390], [500, 300]);
*
* function sleep(ms) {
*     return new Promise(function(resolve) {
*         setTimeout(resolve, ms);
*     });
* }
*
* //resize events return a promise so you can chain them!
* flashCard.resize([0, 300], 2000, 'easeOutBounce')
*     .then(function(){ return Player.SetVariable('foo', 'bar1') })
*     .then(function(){ return sleep(1000) })
*     .then(function(){ return flashCard.resize([500, 300], 2000, 'easeOutBounce') })
*     .then(function(){ return sleep(1000) })
*     .then(function(){ return flashCard.resize([0, 300], 2000, 'easeOutBounce') })
*     .then(function(){ return Player.SetVariable('foo', 'bar2') })
*     .then(function(){ return sleep(1000) })
*     .then(function(){ return flashCard.resize([500, 300], 2000, 'easeOutBounce') });
* ```
*/
export class Region {

    /**
     * The init function creates a new region object to keep track of region specific information
     * like location, template name, region name, etc.
     * @param {String} region_name Name of the region you want to control
     * @param {String} template_name Name of the containing template
     * @param {Array} origin_xy Array of the regions' starting top left coordinates, [x,y]
     * @param {Array} origin_size Array of the regions' size [x,y]
     * @return {Object} New region object
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
    * @param {Boolean} wrap Controls what happens when reach the end of the list
    * @param {String} regionName Name of the region you want to seek
    * @return {Void}
    */
    static Seek(region_name, direction, wrap = true) {
        FWI.RunScript('Region['+ region_name +'].Seek("' + direction + '", "' + wrap + '");');
    }

    /**
     * Gets the original position of the top left corner of the region.
     * @return {Array} Array of original [x,y] position
     */
    get originPosition() {
        return _origin_position.get(this);
    }

    /**
     * Gets the original size of the region.
     * @return {Array} Array of original [x,y] size
     */
    get originSize() {
        return _origin_size.get(this)
    }

    /**
     * Returns the center position of a region relative to the top left of the image
     * @return {Array}
     */
    regionCenter() {
        var x1 = this.current_position[0];
        var y1 = this.current_position[1];
        var x2 = x1 + this.current_size[0];
        var y2 = y1 + this.current_size[1];

        xPrime = (x1 + x2) / 2;
        yPrime = (y1 + y2) / 2;

        return [xPrime, yPrime];
    }

    /**
     * Resets the position of the region to the original
     * @return {Void}
     */
    resetPosition() {
        Template.ClearLeft(this.region_name);
        Template.ClearTop(this.region_name);
        this.current_position = _origin_position.get(this);
    }

    /**
     * Resets the size of the region to the original
     * @return {Void}
     */
    resetSize() {
        Template.ClearHeight(this.region_name);
        Template.ClearWidth(this.region_name);
        this.current_size = _origin_size.get(this);

    }

    /**
     * bound seek method with region name automatially given
     * see Region.Seek for more
     */
    seek(direction, wrap = true) {
        Region.Seek(this.region_name, direction, wrap);
    }

    /**
     * Sets the new horizontal position of the region
     * @param {Int} value Horizontal position in pixels from left of the screen
     * @return {Void}
     */
    _moveX(value) {
        Template.SetLeft(this.region_name, value);
    }

    /**
     * Sets the new vertical position of the region
     * @param {Int} value Vertical position in pixels from top of the screen
     * @return {Void}
     */
    _moveY(value) {
        Template.SetTop(this.region_name, value);
    }

    /**
     * Sets the new width of the region
     * @param {Int} value Width in pixels
     * @return {Void}
     */
    _resizeX(value) {
        Template.SetWidth(this.region_name, value);
    }

    /**
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
        return this._animateRegionInit(end_pos, duration, type, 'position');
    }

    /**
     * The resize function resises a region to a new set of xy coordinantes using predefined easing types.
     * @param {Array} end_size A list of [x,y] cordinates for the end size
     * @param {Int} duration How long the animation lasts in milliseconds
     * @param {String} type What kind of easing to apply to the tween animation
     * @return {Void}
     */
    resize(end_size, duration = 1000, type = 'linear') {
        return this._animateRegionInit(end_size, duration, type, 'size');
    }

    resizeFromCenter(end_size, duration = 1000, type = 'linear') {
        return;
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

        const promise = new Promise((resolve) => {
            this._animateRegion(end_coords, delta_x, delta_y, start_time, end_time, duration, type, animation_type, resolve);
        });
        return promise;
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
    _animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve) {
        let next_pos_x;
        let next_pos_y;
        let next_size_x;
        let next_size_y;

        const now = new Date().getTime();
        const t = now - start_time;

        if (now < end_time) {

            //log.info('inside if loop');
            if (animation_type == 'position') {
                next_pos_x = easingTypes[type](t, this.current_position[0], cX, d);
                next_pos_y = easingTypes[type](t, this.current_position[1], cY, d);

                this._moveX(next_pos_x);
                this._moveY(next_pos_y);
            }

            else if (animation_type == 'size') {
                next_size_x = easingTypes[type](t, this.current_size[0], cX, d);
                next_size_y = easingTypes[type](t, this.current_size[1], cY, d);

                this._resizeX(next_size_x);
                this._resizeY(next_size_y);
            };

            const self = this;

            const callback = () => {
                self._animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve);
            }

            window.requestAnimationFrame(callback);
        }

        else {

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
            resolve()
        };
    }
}