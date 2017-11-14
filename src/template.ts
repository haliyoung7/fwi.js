import { fwi } from "./fwi_core.js";

/**
 * This is the template class.  It contains all of the template functions you'd find in CM.
 * All methods in this class are static so you do not need to use the `new` keyword.
 *
 * Example:
 * ```
 * Template.PlayContent('Foo', 'Bar');
 * ```
 */
export class Template {
  constructor() {

  }

  /**
   * Plays a piece of content in a region
   * @param {String} name The name of the variable to set
   * @param {String} region The region of the content to play
   * @return {Void}
   */
  static async PlayContent(name, region) {
    return new Promise((resolve) => {
      fwi.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
      resolve()
    })
  }

  /**
   * Pops a command from the FIFO command stack
   * @return {Void}
   */
  static PopContent() {
    fwi.RunScript('Template.PopContent();');
  }

  /**
   * Pushes a command to the FIFO command stack
   * @return {Void}
   */
  static PushContent(content, region, params = undefined) {
    fwi.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
  }

  /**
   * Restarts the template, be careful!  If you don't have a span region
   * set this will spawn a new process.
   * @return {Void}
   */
  static Restart() {
    fwi.RunScript('Template.Restart();');
  }

  /**
   * Sets a region property telling it if it can resize or not.
   * @param {String} region_name Name of the region
   * @param {Bool} value True/False if the region can be resized
   * @return {Void}
   */
  static SetCanSize(region_name, value) {
    fwi.RunScript('Template.SetCanSize(' + region_name + ', ' + value +');');
  }

  /**
   * Sets a region property telling it if it can be draged around
   * @param {String} region_name Name of the region
   * @param {Boolean} value True/False if the region can be dragged
   * @return {Void}
   */
  static SetCanDrag(region_name, value) {
    fwi.RunScript('Template.SetCanDrag(' + region_name + ', ' + value +');');
  }

  /**
   * Sets a region property telling it if it can be rotated by touch
   * @param {String} region_name Name of the region
   * @param {Boolean} value True/False if the region can be rotated
   * @return {Void}
   */
  static SetCanRotate(region_name, value) {
    fwi.RunScript('Template.SetCanRotate(' + region_name + ', ' + value +');');
  }

  /**
   * Sets the top left point of the region in x axis
   * @param {String} region_name Name of the region
   * @param {Number} value Value of the top left corner of the region in pixels in the x axis
   * @return {Void}
   */
  static SetLeft(region_name, value) {
    fwi.RunScript('Template.SetLeft('+ region_name + ',' + value + ');');
  }

  /**
   * Set the top left point of the region in the Y axis
   * @param {String} region_name Name of the region
   * @param {Number} value Value of the top left corner of the region in pixels in the y axis
   * @return {Void}
   */
  static SetTop(region_name, value) {
    fwi.RunScript('Template.SetTop('+ region_name + ',' + value + ');');
  }

  /**
   * Sets the regions width in pixels
   * @param {String} region_name Name of the region
   * @param {Number} value Value of the width of the region in pixels
   * @return {Void}
   */
  static SetWidth(region_name, value) {
    fwi.RunScript('Template.SetWidth('+ region_name + ',' + value + ');');
  }

  /**
   * Sets the regions height in pixels
   * @param {String} region_name Name of the region
   * @param {Number} value Value of the height of the region in pixels
   * @return {Void}
   */
  static SetHeight(region_name, value) {
    fwi.RunScript('Template.SetHeight('+ region_name + ',' + value + ');');
  }
  /**
   * Sets a regions angle in degrees
   * @param {String} region_name Name of the region
   * @param {Number} value Angle of the region in degrees
   * @return {Void}
   */
  static SetAngle(region_name, value) {
    fwi.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
  }

  /**
   * Sets a regions X coordinante
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearLeft(region_name) {
    fwi.RunScript('Template.ClearLeft('+ region_name + ');');
  }

  /**
   * Resets a regions Y coordinante
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearTop(region_name) {
    fwi.RunScript('Template.ClearTop('+ region_name + ');');
  }

  /**
   * Resets the width of the region back to the stored original
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearWidth(region_name) {
    fwi.RunScript('Template.ClearWidth('+ region_name + ');');
  }

  /**
   * Resets the regions height
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearHeight(region_name) {
    fwi.RunScript('Template.ClearHeight('+ region_name + ');');
  }

  /**
   * Resets a regions angle
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearAngle(region_name) {
    fwi.RunScript('Template.ClearAngle(' + region_name + ');');
  }

  /**
   * Sets a regions Z-Index
   * @param {String} region_name Name of the region
   * @param {Number} value Number of the regions z-index
   * @return {Void}
   */
  static SetZIndex(region_name, value) {
    fwi.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
  }

  /**
   * Resets the Z-Index
   * @param {String} region_name Name of the region
   * @return {Void}
   */
  static ClearZIndex(region_name) {
    fwi.RunScript('Template.ClearZIndex(' + region_name + ');');
  }

  /**
   * Sets a regions linear velocity
   * @param {String} region_name Name of the region
   * @param {Number} Vx Velocity of the region in the x axis
   * @param {Number} Vy Velocity of the region in the y axis
   * @return {Void}
   */
  static SetLinearVelocity(region_name, Vx = '*', Vy = '*') {
    fwi.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
  }

  /**
   * Sets a region's angular velocity or rotation
   * @param {String} region_name Name of the region
   * @param {Number} omega Number of degrees per a second
   * @return {Void}
   */
  static SetAngularVelocity(region_name, omega) {
    fwi.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
  }
}