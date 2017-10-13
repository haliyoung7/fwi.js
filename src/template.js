import { FWI } from './fwi_core';

export class Template {
  constructor() {

  }

  static PlayContent(name, region) {
      FWI.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
  }

  static PopContent() {
    FWI.RunScript('Template.PopContent();');
  }

  static PushContent(content, region, params = undefined) {
    FWI.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
  }

  static Restart() {
    FWI.RunScript('Template.Restart();');
  }

  static SetCanSize(region_name, value) {
    FWI.RunScript('Template.SetCanSize(' + region_name + ', ' + value +');');
  }

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
