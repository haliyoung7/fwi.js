import { FWI } from "./fwi_core.js";

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
      FWI.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
      resolve()
    })
  }

  /**
   * Pops a command from the FIFO command stack
   * @return {Void}
   */
  static PopContent() {
    FWI.RunScript('Template.PopContent();');
  }

  /**
   * Pushes a command to the FIFO command stack
   * @return {Void}
   */
  static PushContent(content, region, params = undefined) {
    FWI.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
  }

  /**
   * Restarts the template, be careful!  If you don't have a span region
   * set this will spawn a new process.
   * @return {Void}
   */
  static Restart() {
    FWI.RunScript('Template.Restart();');
  }

  /**
   * Sets a region property telling it if it can resize or not.
   * @param {String} region_name Name of the region
   * @param {Bool} value True/False if the region can be resized
   * @return {Void}
   */
  static SetCanSize(region_name, value) {
    FWI.RunScript('Template.SetCanSize(' + region_name + ', ' + value +');');
  }

  /**
   * Sets a region property telling it if it can be draged around
   * @param {String} region_name Name of the region
   * @param {Bool} region True/False if the region can be dragged
   * @return {Void}
   */
  static SetCanDrag(region_name, value) {
    FWI.RunScript('Template.SetCanDrag(' + region_name + ', ' + value +');');
  }

  static SetCanRotate(region_name, value) {
    FWI.RunScript('Template.SetCanRotate(' + region_name + ', ' + value +');');
  }

  static SetLeft(region_name, value) {
    FWI.RunScript('Template.SetLeft('+ region_name + ',' + value + ');');
  }

  static SetTop(region_name, value) {
    FWI.RunScript('Template.SetTop('+ region_name + ',' + value + ');');
  }

  static SetWidth(region_name, value) {
    FWI.RunScript('Template.SetWidth('+ region_name + ',' + value + ');');
  }

  static SetHeight(region_name, value) {
    FWI.RunScript('Template.SetHeight('+ region_name + ',' + value + ');');
  }

  static SetAngle(region_name, value) {
    FWI.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
  }

  static ClearLeft(region_name) {
    FWI.RunScript('Template.ClearLeft('+ region_name + ');');
  }

  static ClearTop(region_name) {
    FWI.RunScript('Template.ClearTop('+ region_name + ');');
  }

  static ClearWidth(region_name) {
    FWI.RunScript('Template.ClearWidth('+ region_name + ');');
  }

  static ClearHeight(region_name) {
    FWI.RunScript('Template.ClearHeight('+ region_name + ');');
  }

  static ClearAngle(region_name) {
    FWI.RunScript('Template.ClearAngle(' + region_name + ');');
  }

  static SetZIndex(region_name, value) {
    FWI.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
  }

  static ClearZIndex(region_name) {
    FWI.RunScript('Template.ClearZIndex(' + region_name + ');');
  }

  static SetLinearVelocity(region_name, Vx = '*', Vy = '*') {
    FWI.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
  }

  static SetAngularVelocity(region_name, omega) {
    FWI.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
  }
}