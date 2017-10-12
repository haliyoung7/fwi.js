(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('./index.js');

window.alert('test');

_index.Player.SetVariable('foo', 'bar');
},{"./index.js":2}],2:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Load the FWI Javascript base:
var FWI = window.frameElement ? window.frameElement.parentNode.FWI : window.external;

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);
    }

    /**
     * Retrieves the value for a single CM variable.
     * @param {String} name A variable name to collect
     * @return {Number|String} An appropriately casted value from the variable
     */


    _createClass(Player, null, [{
        key: 'GetVariable',
        value: function GetVariable(name) {
            return FWI.MarkupValue('{&var:' + name + '}');
        }

        /**
         * Retrieves values for multiple CM variables.
         * @param {Array} nameArray An array of variable names to collect
         * @return {Array} An array of values that correspond to the requested variables
         */

    }, {
        key: 'GetManyVariables',
        value: function GetManyVariables(nameArray) {
            var values = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = nameArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var k = _ref2[0];
                    var v = _ref2[1];

                    values.push(FWI.MarkupValue('{&var:' + v + '}'));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return values;
        }

        /**
         * Sets a single variable back in CM.
         * @param {String} name The name of the variable to set
         * @param {String} value The value of the variable to set
         * @return {Void}
         */

    }, {
        key: 'SetVariable',
        value: function SetVariable(name, value) {
            FWI.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
        }

        /**
         * Sets multiple variables back in CM.
         * @param {Object} keyValueDict An object that defines key/value pairs to use
         * @return {Void}
         */

    }, {
        key: 'SetManyVariables',
        value: function SetManyVariables(keyValueDict) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = keyValueDict[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _ref3 = _step2.value;

                    var _ref4 = _slicedToArray(_ref3, 2);

                    var k = _ref4[0];
                    var v = _ref4[1];

                    FWI.RunScript('Player.SetVariable(' + k + ',' + v + ');');
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            ;
        }

        /**
         * Sets the language of the build.
         * @param {String} languageCode The language code to use
         * @return {Void}
         */

    }, {
        key: 'SetLanguage',
        value: function SetLanguage(languageCode) {
            FWI.RunScript('Player.SetLanguage(' + languageCode + ');');
        }

        /**
         * Sets the language of the build.
         * @param {String} languageCode The language code to use
         * @return {Void}
         */

    }, {
        key: 'ToggleVariable',
        value: function ToggleVariable(name) {
            FWI.RunScript('Player.ToggleVariable(' + name + ');');
        }

        /**
         * Plays a template
         * @param {String} name The name of the template to play
         * @param {String|Int} templateIndex The position of the desired template instance in the network overview
         * @return {Void}
         */

    }, {
        key: 'PlayTemplate',
        value: function PlayTemplate(name, templateIndex) {
            FWI.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
        }

        /**
         * Runs a shell command
         * @param {String} command_name The main command, sometimes includes folder path
         * @param {Array} arg_array Array of args to be submitted to the command
         * @return {Void}
         */

    }, {
        key: 'Command',
        value: function Command(command_name, arg_array) {
            var command = 'Player.Command(' + command_name;

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = arg_array.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _ref5 = _step3.value;

                    var _ref6 = _slicedToArray(_ref5, 2);

                    var k = _ref6[0];
                    var v = _ref6[1];

                    command = command + ', ' + v;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            command += ');';

            FWI.RunScript(command);
        }

        /*
         * Resets the idle timer
         * @return {Void}
         */

    }, {
        key: 'ResetIdleTimer',
        value: function ResetIdleTimer() {
            FWI.RunScript('Player.ResetIdleTimer();');
        }

        /*
         * Restarts the player
         * @return {Void}
         */

    }, {
        key: 'Restart',
        value: function Restart() {
            FWI.RunScript('Player.Restart();');
        }

        /**
         * Sends mail
         * @param {Obj} o Object that contains all paramters from wiki
         * {
         *   to: string dest_address
         *   cc: string cc_address,
         *   bcc: string bcc_address,
         *   subject: string subject,
         *   from: string sender_address,
         *   body: string main_message,
         *   host: string smpt_host,
         *   username: string smpt_username,
         *   password: strign smpt_password
         * }
         * @return {Void}
         */

    }, {
        key: 'SendMail',
        value: function SendMail(o) {
            var command = 'Player.SendMail(';

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = o[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _ref7 = _step4.value;

                    var _ref8 = _slicedToArray(_ref7, 2);

                    var k = _ref8[0];
                    var v = _ref8[1];

                    command = command + ',' + k + '=' + v;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            ;

            command += ');';

            FWI.RunScript(command);
        }

        /**
         * Text-to-speech
         * @param {Obj} o Object that contains parameters from the wiki
         * {
         *   msg: string text_to_speak,
         *   Volume: int volume,
         *   Rate: int rate,
         *   Voice: string voice
           }
         * @return {Void}
         */

    }, {
        key: 'Speak',
        value: function Speak(o) {
            var command = 'Player.Speak(';

            try {
                command += o[msg];
            } catch (e) {
                log.error(e);
            };

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = o[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _ref9 = _step5.value;

                    var _ref10 = _slicedToArray(_ref9, 2);

                    var k = _ref10[0];
                    var v = _ref10[1];

                    command = k != 'msg' ? command + ',' + k + '=' + v : '';
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            ;

            command += ');';

            FWI.RunScript(command);
        }

        /**
         * Unsets a variable
         * @param {String} name Variable name you wish to clear
         * @return {Void}
         */

    }, {
        key: 'UnsetVariable',
        value: function UnsetVariable(name) {
            FWI.RunScript('Player.UnsetVariable(' + name + ');');
        }
    }]);

    return Player;
}();

;

var Template = function () {
    function Template() {
        _classCallCheck(this, Template);
    }

    _createClass(Template, null, [{
        key: 'PlayContent',
        value: function PlayContent(name, region) {
            FWI.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
        }
    }, {
        key: 'PopContent',
        value: function PopContent() {
            FWI.RunScript('Template.PopContent();');
        }
    }, {
        key: 'PushContent',
        value: function PushContent(content, region) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            FWI.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
        }
    }, {
        key: 'Restart',
        value: function Restart() {
            FWI.RunScript('Template.Restart();');
        }
    }, {
        key: 'SetCanSize',
        value: function SetCanSize(region_name, value) {
            FWI.RunScript('Template.SetCanSize(' + region_name + ', ' + value + ');');
        }
    }, {
        key: 'SetCanDrag',
        value: function SetCanDrag(region_name, value) {
            FWI.RunScript('Template.SetCanDrag(' + region_name + ', ' + value + ');');
        }
    }, {
        key: 'SetCanRotate',
        value: function SetCanRotate(region_name, value) {
            FWI.RunScript('Template.SetCanRotate(' + region_name + ', ' + value + ');');
        }
    }, {
        key: 'SetLeft',
        value: function SetLeft(region_name, value) {
            FWI.RunScript('Template.SetLeft(' + region_name + ',' + value + ');');
        }
    }, {
        key: 'SetTop',
        value: function SetTop(region_name, value) {
            FWI.RunScript('Template.SetTop(' + region_name + ',' + value + ');');
        }
    }, {
        key: 'SetWidth',
        value: function SetWidth(region_name, value) {
            FWI.RunScript('Template.SetWidth(' + region_name + ',' + value + ');');
        }
    }, {
        key: 'SetHeight',
        value: function SetHeight(region_name, value) {
            FWI.RunScript('Template.SetHeight(' + region_name + ',' + value + ');');
        }
    }, {
        key: 'SetAngle',
        value: function SetAngle(region_name, value) {
            FWI.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
        }
    }, {
        key: 'ClearLeft',
        value: function ClearLeft(region_name) {
            FWI.RunScript('Template.ClearLeft(' + region_name + ');');
        }
    }, {
        key: 'ClearTop',
        value: function ClearTop(region_name) {
            FWI.RunScript('Template.ClearTop(' + region_name + ');');
        }
    }, {
        key: 'ClearWidth',
        value: function ClearWidth(region_name) {
            FWI.RunScript('Template.ClearWidth(' + region_name + ');');
        }
    }, {
        key: 'ClearHeight',
        value: function ClearHeight(region_name) {
            FWI.RunScript('Template.ClearHeight(' + region_name + ');');
        }
    }, {
        key: 'ClearAngle',
        value: function ClearAngle(region_name) {
            FWI.RunScript('Template.ClearAngle(' + region_name + ');');
        }
    }, {
        key: 'SetZIndex',
        value: function SetZIndex(region_name, value) {
            FWI.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
        }
    }, {
        key: 'ClearZIndex',
        value: function ClearZIndex(region_name) {
            FWI.RunScript('Template.ClearZIndex(' + region_name + ');');
        }
    }, {
        key: 'SetLinearVelocity',
        value: function SetLinearVelocity(region_name) {
            var Vx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
            var Vy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

            FWI.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
        }
    }, {
        key: 'SetAngularVelocity',
        value: function SetAngularVelocity(region_name, omega) {
            FWI.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
        }
    }]);

    return Template;
}();

var _content_name = new WeakMap();
var _region_name = new WeakMap();

var Content = function () {
    function Content(name, region_name) {
        _classCallCheck(this, Content);

        _content_name.set(this, name);
        _region_name.set(this, region_name);
    }

    _createClass(Content, [{
        key: 'getDetails',
        value: function getDetails() {
            return Content.GetDetails(this.name);
        }
    }, {
        key: 'print',
        value: function print(parameters) {
            Content.Print(this.region_name, parameters);
        }
    }, {
        key: 'seek',
        value: function seek(direction) {
            var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            Content.Seek(this.region_name, direction, wrap);
        }
    }, {
        key: 'setArgument',
        value: function setArgument(o) {
            Content.SetArgument(this.region_name, o);
        }
    }, {
        key: 'showRoute',
        value: function showRoute(o) {
            Content.ShowRoute(this.region_name, o);
        }
    }, {
        key: 'pause',
        value: function pause() {
            Content.Pause(this.region_name);
        }
    }, {
        key: 'play',
        value: function play() {
            Content.Play(this.region_name);
        }
    }, {
        key: 'seekBy',
        value: function seekBy(value) {
            Content.SeekBy(this.region_name, value);
        }
    }, {
        key: 'seekTo',
        value: function seekTo(value) {
            Content.SeekTo(this.region_name, value);
        }
    }, {
        key: 'resume',
        value: function resume() {
            Content.Resume(this.region_name);
        }
    }, {
        key: 'setBalance',
        value: function setBalance(balance) {
            Content.SetBalance(this.region_name, balance);
        }
    }, {
        key: 'setVolume',
        value: function setVolume(volume) {
            Content.SetVolume(this.region_name, volume);
        }
    }, {
        key: 'stop',
        value: function stop() {
            Content.Stop(this.region_name);
        }
    }, {
        key: 'name',
        get: function get() {
            return _content_name.get(this);
        }
    }, {
        key: 'region_name',
        get: function get() {
            return _region_name.get(this);
        }
    }], [{
        key: 'GetDetails',
        value: function GetDetails(name) {
            return FWI.getURL('content://' + name);
        }
    }, {
        key: 'Print',
        value: function Print(region_name, parameters) {
            FWI.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
        }
    }, {
        key: 'Seek',
        value: function Seek(region_name, direction) {
            var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            FWI.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
        }
    }, {
        key: 'SetArgument',
        value: function SetArgument(region_name, o) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = o[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _ref11 = _step6.value;

                    var _ref12 = _slicedToArray(_ref11, 2);

                    var k = _ref12[0];
                    var v = _ref12[1];

                    FWI.RunScript('Content[' + region_name + '].SetArgument(' + k + ', ' + v + ');');
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            ;
        }
    }, {
        key: 'ShowRoute',
        value: function ShowRoute(region_name, o) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = o[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _ref13 = _step7.value;

                    var _ref14 = _slicedToArray(_ref13, 2);

                    var k = _ref14[0];
                    var v = _ref14[1];

                    FWI.RunScript('Content[' + region_name + '].ShowRoute(' + k + ', ' + v + ');');
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    }, {
        key: 'Url',
        value: function Url(url) {
            FWI.RunScript('Content.Url(' + url + ');');
        }
    }, {
        key: 'UrlAsync',
        value: function UrlAsync(url) {
            FWI.RunScript('Content.UrlAsync(' + url + ');');
        }
    }, {
        key: 'Pause',
        value: function Pause(region_name) {
            FWI.RunScript('Content[' + region_name + '].Pause();');
        }
    }, {
        key: 'Play',
        value: function Play(region_name) {
            FWI.RunScript('Content[' + region_name + '].Play();');
        }
    }, {
        key: 'SeekBy',
        value: function SeekBy(region_name, value) {
            FWI.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
        }
    }, {
        key: 'SeekTo',
        value: function SeekTo(region_name, value) {
            FWI.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
        }
    }, {
        key: 'Resume',
        value: function Resume(region_name) {
            FWI.RunScript('Content[' + region_name + '].Resume();');
        }
    }, {
        key: 'SetBalance',
        value: function SetBalance(region_name, balance) {
            FWI.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
        }
    }, {
        key: 'SetVolume',
        value: function SetVolume(region_name, volume) {
            FWI.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
        }
    }, {
        key: 'Stop',
        value: function Stop(region_name) {
            FWI.RunScript('Content[' + region_name + '].Stop();');
        }
    }, {
        key: 'HighlightRows',
        value: function HighlightRows(region_name, row_list) {
            FWI.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
        }
    }]);

    return Content;
}();

var easingTypes = {
    /**
     * Easing types are different equations to determine the path of a region tween.
     * @param {DateTime|Int} t The amount of time that has passed since the animation began.
     * @param {Int|Float} b The current position of the x or y point of the top left corner of the region
     * @param {Int|Float} c The total delta for the x or y point from beginning position to the end position
     * @param {Int} d The total duration of the animation
     * @return {Float} The next position of the x or y point.
     */

    linear: function linear(t, b, c, d) {
        return c * t / d + b;
    },

    easeInQuad: function easeInQuad(t, b, c, d) {
        t /= d;
        return c * t * t + b;
    },

    easeOutQuad: function easeOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    },

    easeInCubic: function easeInCubic(t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
    },

    easeOutCubic: function easeOutCubic(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    },

    easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    },

    easeInQuart: function easeInQuart(t, b, c, d) {
        t /= d;
        return c * t * t * t * t + b;
    },

    easeOutQuart: function easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    },

    easeInOutQuart: function easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    },

    easeInQuint: function easeInQuint(t, b, c, d) {
        t /= d;
        return c * t * t * t * t * t + b;
    },

    easeOutQuint: function easeOutQuint(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t * t * t + 1) + b;
    },

    easeInOutQuint: function easeInOutQuint(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
    },

    easeInSine: function easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },

    easeOutSine: function easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },

    easeInOutSine: function easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },

    easeInExpo: function easeInExpo(t, b, c, d) {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
    },

    easeOutExpo: function easeOutExpo(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },

    easeInOutExpo: function easeInOutExpo(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
    },

    easeInCirc: function easeInCirc(t, b, c, d) {
        t /= d;
        return -c * (Math.sqrt(1 - t * t) - 1) + b;
    },

    easeOutCirc: function easeOutCirc(t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t * t) + b;
    },

    easeInOutCirc: function easeInOutCirc(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
    },

    easeInElastic: function easeInElastic(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },

    easeOutElastic: function easeOutElastic(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },

    easeInOutElastic: function easeInOutElastic(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },

    easeInBack: function easeInBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },

    easeOutBack: function easeOutBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },

    easeInOutBack: function easeInOutBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },

    easeInBounce: function easeInBounce(t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    },

    easeOutBounce: function easeOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
    },

    easeInOutBounce: function easeInOutBounce(t, b, c, d) {
        if (t < d / 2) return this.easeInBounce(t * 2, 0, c, d) * .5 + b;
        return this.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};

var _origin_position = new WeakMap();
var _origin_size = new WeakMap();

var Region = function () {

    /**
     * The init function creates a new region object to keep track of region specific information
     * like location, template name, region name, etc.
     * @param {String} region_name Name of the region you want to control
     * @param {String} template_name Name of the containing template
     * @param {Array} origin_xy Array of the regions' starting top left coordinates, [x,y]
     * @param {Array} origin_size Array of the regions' size [x,y]
     * @return {Obj} New region object
     */
    function Region(region_name, template_name, origin_position, origin_size) {
        _classCallCheck(this, Region);

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


    _createClass(Region, [{
        key: 'resetPosition',


        /*
         * Resets the position of the region to the original
         * @return {Void}
         */
        value: function resetPosition() {
            Template.ClearLeft(this.region_name);
            Template.ClearTop(this.region_name);
            this.current_xy = this.originXY;
        }

        /*
         * Resets the size of the region to the original
         * @return {Void}
         */

    }, {
        key: 'resetSize',
        value: function resetSize() {
            Template.ClearHeight(this.region_name);
            Template.ClearWidth(this.region_name);
            this.current_size = this.originSize;
        }

        /*
         * bound seek method with region name automatially given
         * see Region.Seek for more
         */

    }, {
        key: 'seek',
        value: function seek(direction) {
            var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            Region.Seek(this.region_name, direction, wrap);
        }

        /*
         * Sets the new horizontal position of the region
         * @param {Int} value Horizontal position in pixels from left of the screen
         * @return {Void}
         */

    }, {
        key: '_moveX',
        value: function _moveX(value) {
            Template.SetLeft(this.region_name, value);
        }

        /*
         * Sets the new vertical position of the region
         * @param {Int} value Vertical position in pixels from top of the screen
         * @return {Void}
         */

    }, {
        key: '_moveY',
        value: function _moveY(value) {
            Template.SetTop(this.region_name, value);
        }

        /*
         * Sets the new width of the region
         * @param {Int} value Width in pixels
         * @return {Void}
         */

    }, {
        key: '_resizeX',
        value: function _resizeX(value) {
            Template.SetWidth(this.region_name, value);
        }

        /*
         * Sets the new height of the region
         * @param {Int} value Height in pixels
         * @return {Void}
         */

    }, {
        key: '_resizeY',
        value: function _resizeY(value) {
            Template.SetHeight(this.region_name, value);
        }

        /**
         * The move function moves a region to a new set of xy coordinantes using predefined easing types.
         * @param {Array} end_pos A list of [x,y] cordinates for the end position of the top left of the region
         * @param {Int} duration How long the animation lasts in milliseconds
         * @param {String} type What kind of easing to apply to the tween animation
         * @return {Void}
         */

    }, {
        key: 'moveTo',
        value: function moveTo(end_pos) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';

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

    }, {
        key: 'resize',
        value: function resize(end_size) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';

            this._animateRegionInit(end_size, duration, type, 'size');
        }

        /**
         * Intializes some variables for use in the animation and calls the main animation method
         * @param {Array} end_coords [x,y] list of the end coordinates you want the region to move to
         * @param {Int} duration How long the animation plays in milliseconds
         * @param {String} type The easting type used for the tweening animation
         * @return {Void}
         */

    }, {
        key: '_animateRegionInit',
        value: function _animateRegionInit(end_coords, duration, type, animation_type) {
            //log.info('_animateRegionInit called, setting vars and calling _animateRegion');

            var delta_x = void 0;
            var delta_y = void 0;

            var start_time = new Date().getTime();
            var end_time = start_time + duration;

            if (animation_type == 'position') {
                delta_x = end_coords[0] - this.current_position[0];
                delta_y = end_coords[1] - this.current_position[1];
            } else if (animation_type == 'size') {
                //log.info('in the size animation tyype chooser init');
                delta_x = end_coords[0] - this.current_size[0];
                delta_y = end_coords[1] - this.current_size[1];
            };

            //log.debug({startTime: start_time, endTime:end_time, deltaX:delta_x, deltaY: delta_y, duration: duration, type: type, animation_type: animation_type});

            this._animateRegion(end_coords, delta_x, delta_y, start_time, end_time, duration, type, animation_type);
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

    }, {
        key: '_animateRegion',
        value: function _animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type) {
            //log.info('Inside main animation loop');

            var next_pos_x = void 0;
            var next_pos_y = void 0;
            var next_size_x = void 0;
            var next_size_y = void 0;

            var now = new Date().getTime();
            var t = now - start_time;

            //log.debug('Now: ',now, ' T: ',t);

            //log.debug({cx: cX, cy: cY, startTime: start_time, endTime: end_time, duration: d, type:type})

            if (now < end_time) {
                var callback = function callback() {
                    self._animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type);
                };

                //log.info('inside if loop');
                if (animation_type == 'position') {
                    next_pos_x = easing_types[type](t, this.current_position[0], cX, d);
                    next_pos_y = easing_types[type](t, this.current_position[1], cY, d);

                    this._moveX(next_pos_x);
                    this._moveY(next_pos_y);
                } else if (animation_type == 'size') {
                    next_size_x = easing_types[type](t, this.current_size[0], cX, d);
                    next_size_y = easing_types[type](t, this.current_size[1], cY, d);

                    this._resizeX(next_size_x);
                    this._resizeY(next_size_y);
                };

                var self = this;

                window.requestAnimationFrame(callback);
            } else {
                //log.debug('inside else, almost over');

                if (animation_type == 'position') {
                    this._moveX(end_coords[0]);
                    this._moveY(end_coords[1]);
                    this.current_position[0] = end_coords[0];
                    this.current_position[1] = end_coords[1];
                } else if (animation_type == 'size') {
                    this._resizeX(end_coords[0]);
                    this._resizeY(end_coords[1]);
                    this.current_size[0] = end_coords[0];
                    this.current_size[1] = end_coords[1];
                }

                return;
            };
        }
    }, {
        key: 'originPosition',


        /*
         * getter for the original position
         * @return {Array} Array of original [x,y] position
         */
        get: function get() {
            return _origin_position.get(this);
        }

        /*
         * getter for the original size
         * @return {Array} Array of original [x,y] size
         */

    }, {
        key: 'originSize',
        get: function get() {
            return _origin_size.get(this);
        }
    }], [{
        key: 'Seek',
        value: function Seek(region_name, direction) {
            var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            FWI.RunScript('Region[' + region_name + '].Seek("' + direction + '", "' + wrap + '");');
        }
    }]);

    return Region;
}();

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: 'poller',
        value: function poller(var_name, callback) {
            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;


            if (Player.GetVariable(var_name) != 'Undefined') {
                callback();
                Player.SetVariable(var_name, 'Undefined');
            };

            var timeout_function = function timeout_function() {
                Helpers.poller(var_name, callback, timeout);
            };

            window.setTimeout(timeout_function, timeout);
        }
    }]);

    return Helpers;
}();

module.exports = Helpers;
module.exports = Region;
module.exports = Content;
module.exports = Template;
module.exports = Player;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5cbndpbmRvdy5hbGVydCgndGVzdCcpO1xuXG5faW5kZXguUGxheWVyLlNldFZhcmlhYmxlKCdmb28nLCAnYmFyJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIExvYWQgdGhlIEZXSSBKYXZhc2NyaXB0IGJhc2U6XG52YXIgRldJID0gd2luZG93LmZyYW1lRWxlbWVudCA/IHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50Tm9kZS5GV0kgOiB3aW5kb3cuZXh0ZXJuYWw7XG5cbnZhciBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2luZ2xlIENNIHZhcmlhYmxlLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgQSB2YXJpYWJsZSBuYW1lIHRvIGNvbGxlY3RcclxuICAgICAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIGFwcHJvcHJpYXRlbHkgY2FzdGVkIHZhbHVlIGZyb20gdGhlIHZhcmlhYmxlXHJcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFBsYXllciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnR2V0VmFyaWFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gR2V0VmFyaWFibGUobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIEZXSS5NYXJrdXBWYWx1ZSgneyZ2YXI6JyArIG5hbWUgKyAnfScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIHZhbHVlcyBmb3IgbXVsdGlwbGUgQ00gdmFyaWFibGVzLlxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5hbWVBcnJheSBBbiBhcnJheSBvZiB2YXJpYWJsZSBuYW1lcyB0byBjb2xsZWN0XHJcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHJlcXVlc3RlZCB2YXJpYWJsZXNcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnR2V0TWFueVZhcmlhYmxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBHZXRNYW55VmFyaWFibGVzKG5hbWVBcnJheSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gbmFtZUFycmF5LmVudHJpZXMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9yZWYyWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKEZXSS5NYXJrdXBWYWx1ZSgneyZ2YXI6JyArIHYgKyAnfScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0cyBhIHNpbmdsZSB2YXJpYWJsZSBiYWNrIGluIENNLlxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBzZXRcclxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB0byBzZXRcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRWYXJpYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRWYXJpYWJsZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlNldFZhcmlhYmxlKCcgKyBuYW1lICsgJywgJyArIHZhbHVlICsgJyk7Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIG11bHRpcGxlIHZhcmlhYmxlcyBiYWNrIGluIENNLlxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlWYWx1ZURpY3QgQW4gb2JqZWN0IHRoYXQgZGVmaW5lcyBrZXkvdmFsdWUgcGFpcnMgdG8gdXNlXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2V0TWFueVZhcmlhYmxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRNYW55VmFyaWFibGVzKGtleVZhbHVlRGljdCkge1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGtleVZhbHVlRGljdFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjMgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gX3JlZjRbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gX3JlZjRbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlNldFZhcmlhYmxlKCcgKyBrICsgJywnICsgdiArICcpOycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIHRoZSBsYW5ndWFnZSBvZiB0aGUgYnVpbGQuXHJcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSBUaGUgbGFuZ3VhZ2UgY29kZSB0byB1c2VcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRMYW5ndWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRMYW5ndWFnZShsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5TZXRMYW5ndWFnZSgnICsgbGFuZ3VhZ2VDb2RlICsgJyk7Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIHRoZSBsYW5ndWFnZSBvZiB0aGUgYnVpbGQuXHJcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSBUaGUgbGFuZ3VhZ2UgY29kZSB0byB1c2VcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdUb2dnbGVWYXJpYWJsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBUb2dnbGVWYXJpYWJsZShuYW1lKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdQbGF5ZXIuVG9nZ2xlVmFyaWFibGUoJyArIG5hbWUgKyAnKTsnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBsYXlzIGEgdGVtcGxhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGVtcGxhdGUgdG8gcGxheVxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEludH0gdGVtcGxhdGVJbmRleCBUaGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgdGVtcGxhdGUgaW5zdGFuY2UgaW4gdGhlIG5ldHdvcmsgb3ZlcnZpZXdcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdQbGF5VGVtcGxhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gUGxheVRlbXBsYXRlKG5hbWUsIHRlbXBsYXRlSW5kZXgpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5QbGF5VGVtcGxhdGUoJyArIG5hbWUgKyAodGVtcGxhdGVJbmRleCA/ICcsICcgKyB0ZW1wbGF0ZUluZGV4IDogJycpICsgJyk7Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSdW5zIGEgc2hlbGwgY29tbWFuZFxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kX25hbWUgVGhlIG1haW4gY29tbWFuZCwgc29tZXRpbWVzIGluY2x1ZGVzIGZvbGRlciBwYXRoXHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJnX2FycmF5IEFycmF5IG9mIGFyZ3MgdG8gYmUgc3VibWl0dGVkIHRvIHRoZSBjb21tYW5kXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnQ29tbWFuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBDb21tYW5kKGNvbW1hbmRfbmFtZSwgYXJnX2FycmF5KSB7XG4gICAgICAgICAgICB2YXIgY29tbWFuZCA9ICdQbGF5ZXIuQ29tbWFuZCgnICsgY29tbWFuZF9uYW1lO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYXJnX2FycmF5LmVudHJpZXMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjUgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gX3JlZjZbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gX3JlZjZbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQgKyAnLCAnICsgdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWFuZCArPSAnKTsnO1xuXG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KGNvbW1hbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBSZXNldHMgdGhlIGlkbGUgdGltZXJcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdSZXNldElkbGVUaW1lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBSZXNldElkbGVUaW1lcigpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5SZXNldElkbGVUaW1lcigpOycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBSZXN0YXJ0cyB0aGUgcGxheWVyXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnUmVzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBSZXN0YXJ0KCkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlJlc3RhcnQoKTsnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbmRzIG1haWxcclxuICAgICAgICAgKiBAcGFyYW0ge09ian0gbyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGFyYW10ZXJzIGZyb20gd2lraVxyXG4gICAgICAgICAqIHtcclxuICAgICAgICAgKiAgIHRvOiBzdHJpbmcgZGVzdF9hZGRyZXNzXHJcbiAgICAgICAgICogICBjYzogc3RyaW5nIGNjX2FkZHJlc3MsXHJcbiAgICAgICAgICogICBiY2M6IHN0cmluZyBiY2NfYWRkcmVzcyxcclxuICAgICAgICAgKiAgIHN1YmplY3Q6IHN0cmluZyBzdWJqZWN0LFxyXG4gICAgICAgICAqICAgZnJvbTogc3RyaW5nIHNlbmRlcl9hZGRyZXNzLFxyXG4gICAgICAgICAqICAgYm9keTogc3RyaW5nIG1haW5fbWVzc2FnZSxcclxuICAgICAgICAgKiAgIGhvc3Q6IHN0cmluZyBzbXB0X2hvc3QsXHJcbiAgICAgICAgICogICB1c2VybmFtZTogc3RyaW5nIHNtcHRfdXNlcm5hbWUsXHJcbiAgICAgICAgICogICBwYXNzd29yZDogc3RyaWduIHNtcHRfcGFzc3dvcmRcclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2VuZE1haWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2VuZE1haWwobykge1xuICAgICAgICAgICAgdmFyIGNvbW1hbmQgPSAnUGxheWVyLlNlbmRNYWlsKCc7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNyA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBfcmVmOFswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBfcmVmOFsxXTtcblxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kID0gY29tbWFuZCArICcsJyArIGsgKyAnPScgKyB2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGNvbW1hbmQgKz0gJyk7JztcblxuICAgICAgICAgICAgRldJLlJ1blNjcmlwdChjb21tYW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRleHQtdG8tc3BlZWNoXHJcbiAgICAgICAgICogQHBhcmFtIHtPYmp9IG8gT2JqZWN0IHRoYXQgY29udGFpbnMgcGFyYW1ldGVycyBmcm9tIHRoZSB3aWtpXHJcbiAgICAgICAgICoge1xyXG4gICAgICAgICAqICAgbXNnOiBzdHJpbmcgdGV4dF90b19zcGVhayxcclxuICAgICAgICAgKiAgIFZvbHVtZTogaW50IHZvbHVtZSxcclxuICAgICAgICAgKiAgIFJhdGU6IGludCByYXRlLFxyXG4gICAgICAgICAqICAgVm9pY2U6IHN0cmluZyB2b2ljZVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTcGVhaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTcGVhayhvKSB7XG4gICAgICAgICAgICB2YXIgY29tbWFuZCA9ICdQbGF5ZXIuU3BlYWsoJztcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb21tYW5kICs9IG9bbXNnXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yNSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNTsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IChfc3RlcDUgPSBfaXRlcmF0b3I1Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjkgPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYxMCA9IF9zbGljZWRUb0FycmF5KF9yZWY5LCAyKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9yZWYxMFswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBfcmVmMTBbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9IGsgIT0gJ21zZycgPyBjb21tYW5kICsgJywnICsgayArICc9JyArIHYgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNSA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSAmJiBfaXRlcmF0b3I1LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBjb21tYW5kICs9ICcpOyc7XG5cbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoY29tbWFuZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVbnNldHMgYSB2YXJpYWJsZVxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFZhcmlhYmxlIG5hbWUgeW91IHdpc2ggdG8gY2xlYXJcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdVbnNldFZhcmlhYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFVuc2V0VmFyaWFibGUobmFtZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlVuc2V0VmFyaWFibGUoJyArIG5hbWUgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQbGF5ZXI7XG59KCk7XG5cbjtcblxudmFyIFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRlbXBsYXRlKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcGxhdGUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUZW1wbGF0ZSwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnUGxheUNvbnRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gUGxheUNvbnRlbnQobmFtZSwgcmVnaW9uKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5QbGF5Q29udGVudChcIicgKyBuYW1lICsgJ1wiLCBcIicgKyByZWdpb24gKyAnXCIpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdQb3BDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFBvcENvbnRlbnQoKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5Qb3BDb250ZW50KCk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1B1c2hDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFB1c2hDb250ZW50KGNvbnRlbnQsIHJlZ2lvbikge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5QdXNoQ29udGVudCgnICsgY29udGVudCArICcsICcgKyByZWdpb24gKyAocGFyYW1zICE9IHVuZGVmaW5lZCA/ICcsICcgKyBwYXJhbXMgOiAnJykgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnUmVzdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBSZXN0YXJ0KCkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuUmVzdGFydCgpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRDYW5TaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldENhblNpemUocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRDYW5TaXplKCcgKyByZWdpb25fbmFtZSArICcsICcgKyB2YWx1ZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRDYW5EcmFnJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldENhbkRyYWcocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRDYW5EcmFnKCcgKyByZWdpb25fbmFtZSArICcsICcgKyB2YWx1ZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRDYW5Sb3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2V0Q2FuUm90YXRlKHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0Q2FuUm90YXRlKCcgKyByZWdpb25fbmFtZSArICcsICcgKyB2YWx1ZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRMZWZ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldExlZnQocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRMZWZ0KCcgKyByZWdpb25fbmFtZSArICcsJyArIHZhbHVlICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1NldFRvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRUb3AocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRUb3AoJyArIHJlZ2lvbl9uYW1lICsgJywnICsgdmFsdWUgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2V0V2lkdGgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2V0V2lkdGgocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRXaWR0aCgnICsgcmVnaW9uX25hbWUgKyAnLCcgKyB2YWx1ZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRIZWlnaHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2V0SGVpZ2h0KHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0SGVpZ2h0KCcgKyByZWdpb25fbmFtZSArICcsJyArIHZhbHVlICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1NldEFuZ2xlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldEFuZ2xlKHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0QW5nbGUoJyArIHJlZ2lvbl9uYW1lICsgJywgJyArIHZhbHVlICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ0NsZWFyTGVmdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBDbGVhckxlZnQocmVnaW9uX25hbWUpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyTGVmdCgnICsgcmVnaW9uX25hbWUgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnQ2xlYXJUb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gQ2xlYXJUb3AocmVnaW9uX25hbWUpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyVG9wKCcgKyByZWdpb25fbmFtZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdDbGVhcldpZHRoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIENsZWFyV2lkdGgocmVnaW9uX25hbWUpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyV2lkdGgoJyArIHJlZ2lvbl9uYW1lICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ0NsZWFySGVpZ2h0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIENsZWFySGVpZ2h0KHJlZ2lvbl9uYW1lKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5DbGVhckhlaWdodCgnICsgcmVnaW9uX25hbWUgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnQ2xlYXJBbmdsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBDbGVhckFuZ2xlKHJlZ2lvbl9uYW1lKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5DbGVhckFuZ2xlKCcgKyByZWdpb25fbmFtZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRaSW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2V0WkluZGV4KHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0WkluZGV4KCcgKyByZWdpb25fbmFtZSArICcsICcgKyB2YWx1ZSArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdDbGVhclpJbmRleCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBDbGVhclpJbmRleChyZWdpb25fbmFtZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuQ2xlYXJaSW5kZXgoJyArIHJlZ2lvbl9uYW1lICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1NldExpbmVhclZlbG9jaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldExpbmVhclZlbG9jaXR5KHJlZ2lvbl9uYW1lKSB7XG4gICAgICAgICAgICB2YXIgVnggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcqJztcbiAgICAgICAgICAgIHZhciBWeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyonO1xuXG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRMaW5lYXJWZWxvY2l0eSgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgVnggKyAnLCAnICsgVnkgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2V0QW5ndWxhclZlbG9jaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldEFuZ3VsYXJWZWxvY2l0eShyZWdpb25fbmFtZSwgb21lZ2EpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlNldEFuZ3VsYXJWZWxvY2l0eSgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgb21lZ2EgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUZW1wbGF0ZTtcbn0oKTtcblxudmFyIF9jb250ZW50X25hbWUgPSBuZXcgV2Vha01hcCgpO1xudmFyIF9yZWdpb25fbmFtZSA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciBDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRlbnQobmFtZSwgcmVnaW9uX25hbWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRlbnQpO1xuXG4gICAgICAgIF9jb250ZW50X25hbWUuc2V0KHRoaXMsIG5hbWUpO1xuICAgICAgICBfcmVnaW9uX25hbWUuc2V0KHRoaXMsIHJlZ2lvbl9uYW1lKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udGVudCwgW3tcbiAgICAgICAga2V5OiAnZ2V0RGV0YWlscycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXRhaWxzKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnQuR2V0RGV0YWlscyh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmludCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBDb250ZW50LlByaW50KHRoaXMucmVnaW9uX25hbWUsIHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZWVrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWsoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgd3JhcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICAgICAgICAgICAgQ29udGVudC5TZWVrKHRoaXMucmVnaW9uX25hbWUsIGRpcmVjdGlvbiwgd3JhcCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEFyZ3VtZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFyZ3VtZW50KG8pIHtcbiAgICAgICAgICAgIENvbnRlbnQuU2V0QXJndW1lbnQodGhpcy5yZWdpb25fbmFtZSwgbyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Nob3dSb3V0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93Um91dGUobykge1xuICAgICAgICAgICAgQ29udGVudC5TaG93Um91dGUodGhpcy5yZWdpb25fbmFtZSwgbyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgQ29udGVudC5QYXVzZSh0aGlzLnJlZ2lvbl9uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgQ29udGVudC5QbGF5KHRoaXMucmVnaW9uX25hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZWVrQnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla0J5KHZhbHVlKSB7XG4gICAgICAgICAgICBDb250ZW50LlNlZWtCeSh0aGlzLnJlZ2lvbl9uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlZWtUbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8odmFsdWUpIHtcbiAgICAgICAgICAgIENvbnRlbnQuU2Vla1RvKHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzdW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgICAgIENvbnRlbnQuUmVzdW1lKHRoaXMucmVnaW9uX25hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRCYWxhbmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEJhbGFuY2UoYmFsYW5jZSkge1xuICAgICAgICAgICAgQ29udGVudC5TZXRCYWxhbmNlKHRoaXMucmVnaW9uX25hbWUsIGJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRWb2x1bWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgICAgICAgICAgQ29udGVudC5TZXRWb2x1bWUodGhpcy5yZWdpb25fbmFtZSwgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgQ29udGVudC5TdG9wKHRoaXMucmVnaW9uX25hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICduYW1lJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRlbnRfbmFtZS5nZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lvbl9uYW1lJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZ2lvbl9uYW1lLmdldCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdHZXREZXRhaWxzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIEdldERldGFpbHMobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIEZXSS5nZXRVUkwoJ2NvbnRlbnQ6Ly8nICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1ByaW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFByaW50KHJlZ2lvbl9uYW1lLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlByaW50KCcgKyBwYXJhbWV0ZXJzICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1NlZWsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2VlayhyZWdpb25fbmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgd3JhcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZWVrKCcgKyBkaXJlY3Rpb24gKyAnLCAnICsgd3JhcCArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZXRBcmd1bWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRBcmd1bWVudChyZWdpb25fbmFtZSwgbykge1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjYgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNiA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDY7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSAoX3N0ZXA2ID0gX2l0ZXJhdG9yNi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYxMSA9IF9zdGVwNi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjEyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjExLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9yZWYxMlswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBfcmVmMTJbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZXRBcmd1bWVudCgnICsgayArICcsICcgKyB2ICsgJyk7Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjYgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgJiYgX2l0ZXJhdG9yNi5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjYucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2hvd1JvdXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNob3dSb3V0ZShyZWdpb25fbmFtZSwgbykge1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNyA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDc7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSAoX3N0ZXA3ID0gX2l0ZXJhdG9yNy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYxMyA9IF9zdGVwNy52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjE0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjEzLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9yZWYxNFswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBfcmVmMTRbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TaG93Um91dGUoJyArIGsgKyAnLCAnICsgdiArICcpOycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNyA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I3ID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb243ICYmIF9pdGVyYXRvcjcucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I3LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gVXJsKHVybCkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudC5VcmwoJyArIHVybCArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdVcmxBc3luYycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBVcmxBc3luYyh1cmwpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnQuVXJsQXN5bmMoJyArIHVybCArICcpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdQYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBQYXVzZShyZWdpb25fbmFtZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5QYXVzZSgpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdQbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFBsYXkocmVnaW9uX25hbWUpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uUGxheSgpOycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdTZWVrQnknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2Vla0J5KHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZWVrQnkoJyArIHZhbHVlICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1NlZWtUbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZWVrVG8ocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlNlZWtUbygnICsgdmFsdWUgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnUmVzdW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFJlc3VtZShyZWdpb25fbmFtZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5SZXN1bWUoKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2V0QmFsYW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBTZXRCYWxhbmNlKHJlZ2lvbl9uYW1lLCBiYWxhbmNlKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlNldEJhbGFuY2UoJyArIGJhbGFuY2UgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnU2V0Vm9sdW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIFNldFZvbHVtZShyZWdpb25fbmFtZSwgdm9sdW1lKSB7XG4gICAgICAgICAgICBGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlNldFZvbHVtZSgnICsgdm9sdW1lICsgJyk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ1N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU3RvcChyZWdpb25fbmFtZSkge1xuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TdG9wKCk7Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ0hpZ2hsaWdodFJvd3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gSGlnaGxpZ2h0Um93cyhyZWdpb25fbmFtZSwgcm93X2xpc3QpIHtcbiAgICAgICAgICAgIEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uSGlnaGxpZ2h0Um93cygnICsgcm93X2xpc3QgKyAnKTsnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb250ZW50O1xufSgpO1xuXG52YXIgZWFzaW5nVHlwZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBFYXNpbmcgdHlwZXMgYXJlIGRpZmZlcmVudCBlcXVhdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSBwYXRoIG9mIGEgcmVnaW9uIHR3ZWVuLlxyXG4gICAgICogQHBhcmFtIHtEYXRlVGltZXxJbnR9IHQgVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgaGFzIHBhc3NlZCBzaW5jZSB0aGUgYW5pbWF0aW9uIGJlZ2FuLlxyXG4gICAgICogQHBhcmFtIHtJbnR8RmxvYXR9IGIgVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHggb3IgeSBwb2ludCBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSByZWdpb25cclxuICAgICAqIEBwYXJhbSB7SW50fEZsb2F0fSBjIFRoZSB0b3RhbCBkZWx0YSBmb3IgdGhlIHggb3IgeSBwb2ludCBmcm9tIGJlZ2lubmluZyBwb3NpdGlvbiB0byB0aGUgZW5kIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0ludH0gZCBUaGUgdG90YWwgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHJldHVybiB7RmxvYXR9IFRoZSBuZXh0IHBvc2l0aW9uIG9mIHRoZSB4IG9yIHkgcG9pbnQuXHJcbiAgICAgKi9cblxuICAgIGxpbmVhcjogZnVuY3Rpb24gbGluZWFyKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGMgKiB0IC8gZCArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIGVhc2VJblF1YWQodCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHJldHVybiBjICogdCAqIHQgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0UXVhZDogZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQgLyAyO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICAgICAgdC0tO1xuICAgICAgICByZXR1cm4gLWMgLyAyICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5DdWJpYzogZnVuY3Rpb24gZWFzZUluQ3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHJldHVybiBjICogdCAqIHQgKiB0ICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIGMgKiAodCAqIHQgKiB0ICsgMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQgLyAyO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgIHQgLT0gMjtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogdCArIDIpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkO1xuICAgICAgICByZXR1cm4gYyAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZDtcbiAgICAgICAgdC0tO1xuICAgICAgICByZXR1cm4gLWMgKiAodCAqIHQgKiB0ICogdCAtIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uIGVhc2VJbk91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkIC8gMjtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgdCAtPSAyO1xuICAgICAgICByZXR1cm4gLWMgLyAyICogKHQgKiB0ICogdCAqIHQgLSAyKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJblF1aW50OiBmdW5jdGlvbiBlYXNlSW5RdWludCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZDtcbiAgICAgICAgcmV0dXJuIGMgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgfSxcblxuICAgIGVhc2VPdXRRdWludDogZnVuY3Rpb24gZWFzZU91dFF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkO1xuICAgICAgICB0LS07XG4gICAgICAgIHJldHVybiBjICogKHQgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gZWFzZUluT3V0UXVpbnQodCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQgLyAyO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgdCAtPSAyO1xuICAgICAgICByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJblNpbmU6IGZ1bmN0aW9uIGVhc2VJblNpbmUodCwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XG4gICAgfSxcblxuICAgIGVhc2VPdXRTaW5lOiBmdW5jdGlvbiBlYXNlT3V0U2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uIGVhc2VJbk91dFNpbmUodCwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbkV4cG86IGZ1bmN0aW9uIGVhc2VJbkV4cG8odCwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEV4cG86IGZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZCAvIDI7XG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDIpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluQ2lyYzogZnVuY3Rpb24gZWFzZUluQ2lyYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZDtcbiAgICAgICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0Q2lyYzogZnVuY3Rpb24gZWFzZU91dENpcmModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtIHQgKiB0KSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uIGVhc2VJbk91dENpcmModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQgLyAyO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG4gICAgICAgIHQgLT0gMjtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpICsgMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5FbGFzdGljOiBmdW5jdGlvbiBlYXNlSW5FbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO2lmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7aWYgKCFwKSBwID0gZCAqIC4zO1xuICAgICAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICAgICAgICBhID0gYzt2YXIgcyA9IHAgLyA0O1xuICAgICAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbiBlYXNlT3V0RWxhc3RpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtpZiAoKHQgLz0gZCkgPT0gMSkgcmV0dXJuIGIgKyBjO2lmICghcCkgcCA9IGQgKiAuMztcbiAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgICAgICAgYSA9IGM7dmFyIHMgPSBwIC8gNDtcbiAgICAgICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gZWFzZUluT3V0RWxhc3RpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gYjtpZiAoKHQgLz0gZCAvIDIpID09IDIpIHJldHVybiBiICsgYztpZiAoIXApIHAgPSBkICogKC4zICogMS41KTtcbiAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgICAgICAgYSA9IGM7dmFyIHMgPSBwIC8gNDtcbiAgICAgICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbkJhY2s6IGZ1bmN0aW9uIGVhc2VJbkJhY2sodCwgYiwgYywgZCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEJhY2s6IGZ1bmN0aW9uIGVhc2VPdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqICgocyArIDEpICogdCArIHMpICsgMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiBlYXNlSW5PdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0ICsgcykgKyAyKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbkJvdW5jZTogZnVuY3Rpb24gZWFzZUluQm91bmNlKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGMgLSB0aGlzLmVhc2VPdXRCb3VuY2UoZCAtIHQsIDAsIGMsIGQpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24gZWFzZU91dEJvdW5jZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmICgodCAvPSBkKSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgICAgICB9IGVsc2UgaWYgKHQgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgLjc1KSArIGI7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuMjUgLyAyLjc1KSAqIHQgKyAuOTM3NSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAuOTg0Mzc1KSArIGI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiBlYXNlSW5PdXRCb3VuY2UodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAodCA8IGQgLyAyKSByZXR1cm4gdGhpcy5lYXNlSW5Cb3VuY2UodCAqIDIsIDAsIGMsIGQpICogLjUgKyBiO1xuICAgICAgICByZXR1cm4gdGhpcy5lYXNlT3V0Qm91bmNlKHQgKiAyIC0gZCwgMCwgYywgZCkgKiAuNSArIGMgKiAuNSArIGI7XG4gICAgfVxufTtcblxudmFyIF9vcmlnaW5fcG9zaXRpb24gPSBuZXcgV2Vha01hcCgpO1xudmFyIF9vcmlnaW5fc2l6ZSA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciBSZWdpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcclxuICAgICAqIFRoZSBpbml0IGZ1bmN0aW9uIGNyZWF0ZXMgYSBuZXcgcmVnaW9uIG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHJlZ2lvbiBzcGVjaWZpYyBpbmZvcm1hdGlvblxyXG4gICAgICogbGlrZSBsb2NhdGlvbiwgdGVtcGxhdGUgbmFtZSwgcmVnaW9uIG5hbWUsIGV0Yy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZWdpb25fbmFtZSBOYW1lIG9mIHRoZSByZWdpb24geW91IHdhbnQgdG8gY29udHJvbFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlX25hbWUgTmFtZSBvZiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gb3JpZ2luX3h5IEFycmF5IG9mIHRoZSByZWdpb25zJyBzdGFydGluZyB0b3AgbGVmdCBjb29yZGluYXRlcywgW3gseV1cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9yaWdpbl9zaXplIEFycmF5IG9mIHRoZSByZWdpb25zJyBzaXplIFt4LHldXHJcbiAgICAgKiBAcmV0dXJuIHtPYmp9IE5ldyByZWdpb24gb2JqZWN0XHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSZWdpb24ocmVnaW9uX25hbWUsIHRlbXBsYXRlX25hbWUsIG9yaWdpbl9wb3NpdGlvbiwgb3JpZ2luX3NpemUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZ2lvbik7XG5cbiAgICAgICAgdGhpcy5yZWdpb25fbmFtZSA9IHJlZ2lvbl9uYW1lO1xuICAgICAgICB0aGlzLnRlbXBsYXRlX25hbWUgPSB0ZW1wbGF0ZV9uYW1lO1xuICAgICAgICBfb3JpZ2luX3Bvc2l0aW9uLnNldCh0aGlzLCBvcmlnaW5fcG9zaXRpb24pO1xuICAgICAgICBfb3JpZ2luX3NpemUuc2V0KHRoaXMsIG9yaWdpbl9zaXplKTtcbiAgICAgICAgdGhpcy5jdXJyZW50X3Bvc2l0aW9uID0gX29yaWdpbl9wb3NpdGlvbi5nZXQodGhpcyk7XG4gICAgICAgIHRoaXMuY3VycmVudF9zaXplID0gX29yaWdpbl9zaXplLmdldCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICogU2Vla3MgdG8gdGhlIG5leHQgY29udGVudCBpdGVtIGluIHRoYXQgcmVnaW9uXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gRGlyZWN0aW9uIG9mIHBhZ2luYXRpb24gcHJldnxuZXh0fGZpcnN0XHJcbiAgICAqIEBwYXJhbSB7Qm9vbHxTdHJpbmd9IHdyYXAgQ29udHJvbHMgd2hhdCBoYXBwZW5zIHdoZW4gcmVhY2ggdGhlIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAgKiBAcGFybSB7U3RyaW5nfSByZWdpb25OYW1lIE5hbWUgb2YgdGhlIHJlZ2lvbiB5b3Ugd2FudCB0byBzZWVrXHJcbiAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVnaW9uLCBbe1xuICAgICAgICBrZXk6ICdyZXNldFBvc2l0aW9uJyxcblxuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogUmVzZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcmVnaW9uIHRvIHRoZSBvcmlnaW5hbFxyXG4gICAgICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgVGVtcGxhdGUuQ2xlYXJMZWZ0KHRoaXMucmVnaW9uX25hbWUpO1xuICAgICAgICAgICAgVGVtcGxhdGUuQ2xlYXJUb3AodGhpcy5yZWdpb25fbmFtZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfeHkgPSB0aGlzLm9yaWdpblhZO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBSZXNldHMgdGhlIHNpemUgb2YgdGhlIHJlZ2lvbiB0byB0aGUgb3JpZ2luYWxcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNldFNpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRTaXplKCkge1xuICAgICAgICAgICAgVGVtcGxhdGUuQ2xlYXJIZWlnaHQodGhpcy5yZWdpb25fbmFtZSk7XG4gICAgICAgICAgICBUZW1wbGF0ZS5DbGVhcldpZHRoKHRoaXMucmVnaW9uX25hbWUpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X3NpemUgPSB0aGlzLm9yaWdpblNpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxyXG4gICAgICAgICAqIGJvdW5kIHNlZWsgbWV0aG9kIHdpdGggcmVnaW9uIG5hbWUgYXV0b21hdGlhbGx5IGdpdmVuXHJcbiAgICAgICAgICogc2VlIFJlZ2lvbi5TZWVrIGZvciBtb3JlXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlZWsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VlayhkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB3cmFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgICAgICAgICBSZWdpb24uU2Vlayh0aGlzLnJlZ2lvbl9uYW1lLCBkaXJlY3Rpb24sIHdyYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBTZXRzIHRoZSBuZXcgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiB0aGUgcmVnaW9uXHJcbiAgICAgICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIEhvcml6b250YWwgcG9zaXRpb24gaW4gcGl4ZWxzIGZyb20gbGVmdCBvZiB0aGUgc2NyZWVuXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21vdmVYJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tb3ZlWCh2YWx1ZSkge1xuICAgICAgICAgICAgVGVtcGxhdGUuU2V0TGVmdCh0aGlzLnJlZ2lvbl9uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFNldHMgdGhlIG5ldyB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgcmVnaW9uXHJcbiAgICAgICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIFZlcnRpY2FsIHBvc2l0aW9uIGluIHBpeGVscyBmcm9tIHRvcCBvZiB0aGUgc2NyZWVuXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21vdmVZJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tb3ZlWSh2YWx1ZSkge1xuICAgICAgICAgICAgVGVtcGxhdGUuU2V0VG9wKHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogU2V0cyB0aGUgbmV3IHdpZHRoIG9mIHRoZSByZWdpb25cclxuICAgICAgICAgKiBAcGFyYW0ge0ludH0gdmFsdWUgV2lkdGggaW4gcGl4ZWxzXHJcbiAgICAgICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Jlc2l6ZVgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2l6ZVgodmFsdWUpIHtcbiAgICAgICAgICAgIFRlbXBsYXRlLlNldFdpZHRoKHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogU2V0cyB0aGUgbmV3IGhlaWdodCBvZiB0aGUgcmVnaW9uXHJcbiAgICAgICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIEhlaWdodCBpbiBwaXhlbHNcclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfcmVzaXplWScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzaXplWSh2YWx1ZSkge1xuICAgICAgICAgICAgVGVtcGxhdGUuU2V0SGVpZ2h0KHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtb3ZlIGZ1bmN0aW9uIG1vdmVzIGEgcmVnaW9uIHRvIGEgbmV3IHNldCBvZiB4eSBjb29yZGluYW50ZXMgdXNpbmcgcHJlZGVmaW5lZCBlYXNpbmcgdHlwZXMuXHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZW5kX3BvcyBBIGxpc3Qgb2YgW3gseV0gY29yZGluYXRlcyBmb3IgdGhlIGVuZCBwb3NpdGlvbiBvZiB0aGUgdG9wIGxlZnQgb2YgdGhlIHJlZ2lvblxyXG4gICAgICAgICAqIEBwYXJhbSB7SW50fSBkdXJhdGlvbiBIb3cgbG9uZyB0aGUgYW5pbWF0aW9uIGxhc3RzIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFdoYXQga2luZCBvZiBlYXNpbmcgdG8gYXBwbHkgdG8gdGhlIHR3ZWVuIGFuaW1hdGlvblxyXG4gICAgICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdmVUbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlVG8oZW5kX3Bvcykge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdsaW5lYXInO1xuXG4gICAgICAgICAgICAvL2xvZy5pbmZvKCdwYXRoVG8gY2FsbGVkLCBjYWxsaW5nIF9hbmltYXRlUmVnaW9uSW5pdCcpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZVJlZ2lvbkluaXQoZW5kX3BvcywgZHVyYXRpb24sIHR5cGUsICdwb3NpdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHJlc2l6ZSBmdW5jdGlvbiByZXNpc2VzIGEgcmVnaW9uIHRvIGEgbmV3IHNldCBvZiB4eSBjb29yZGluYW50ZXMgdXNpbmcgcHJlZGVmaW5lZCBlYXNpbmcgdHlwZXMuXHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZW5kX3NpemUgQSBsaXN0IG9mIFt4LHldIGNvcmRpbmF0ZXMgZm9yIHRoZSBlbmQgc2l6ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7SW50fSBkdXJhdGlvbiBIb3cgbG9uZyB0aGUgYW5pbWF0aW9uIGxhc3RzIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFdoYXQga2luZCBvZiBlYXNpbmcgdG8gYXBwbHkgdG8gdGhlIHR3ZWVuIGFuaW1hdGlvblxyXG4gICAgICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2l6ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemUoZW5kX3NpemUpIHtcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDtcbiAgICAgICAgICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnbGluZWFyJztcblxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZVJlZ2lvbkluaXQoZW5kX3NpemUsIGR1cmF0aW9uLCB0eXBlLCAnc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW50aWFsaXplcyBzb21lIHZhcmlhYmxlcyBmb3IgdXNlIGluIHRoZSBhbmltYXRpb24gYW5kIGNhbGxzIHRoZSBtYWluIGFuaW1hdGlvbiBtZXRob2RcclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBlbmRfY29vcmRzIFt4LHldIGxpc3Qgb2YgdGhlIGVuZCBjb29yZGluYXRlcyB5b3Ugd2FudCB0aGUgcmVnaW9uIHRvIG1vdmUgdG9cclxuICAgICAgICAgKiBAcGFyYW0ge0ludH0gZHVyYXRpb24gSG93IGxvbmcgdGhlIGFuaW1hdGlvbiBwbGF5cyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZWFzdGluZyB0eXBlIHVzZWQgZm9yIHRoZSB0d2VlbmluZyBhbmltYXRpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfYW5pbWF0ZVJlZ2lvbkluaXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVSZWdpb25Jbml0KGVuZF9jb29yZHMsIGR1cmF0aW9uLCB0eXBlLCBhbmltYXRpb25fdHlwZSkge1xuICAgICAgICAgICAgLy9sb2cuaW5mbygnX2FuaW1hdGVSZWdpb25Jbml0IGNhbGxlZCwgc2V0dGluZyB2YXJzIGFuZCBjYWxsaW5nIF9hbmltYXRlUmVnaW9uJyk7XG5cbiAgICAgICAgICAgIHZhciBkZWx0YV94ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGRlbHRhX3kgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIHZhciBzdGFydF90aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb25fdHlwZSA9PSAncG9zaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgZGVsdGFfeCA9IGVuZF9jb29yZHNbMF0gLSB0aGlzLmN1cnJlbnRfcG9zaXRpb25bMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfeSA9IGVuZF9jb29yZHNbMV0gLSB0aGlzLmN1cnJlbnRfcG9zaXRpb25bMV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbl90eXBlID09ICdzaXplJykge1xuICAgICAgICAgICAgICAgIC8vbG9nLmluZm8oJ2luIHRoZSBzaXplIGFuaW1hdGlvbiB0eXlwZSBjaG9vc2VyIGluaXQnKTtcbiAgICAgICAgICAgICAgICBkZWx0YV94ID0gZW5kX2Nvb3Jkc1swXSAtIHRoaXMuY3VycmVudF9zaXplWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX3kgPSBlbmRfY29vcmRzWzFdIC0gdGhpcy5jdXJyZW50X3NpemVbMV07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL2xvZy5kZWJ1Zyh7c3RhcnRUaW1lOiBzdGFydF90aW1lLCBlbmRUaW1lOmVuZF90aW1lLCBkZWx0YVg6ZGVsdGFfeCwgZGVsdGFZOiBkZWx0YV95LCBkdXJhdGlvbjogZHVyYXRpb24sIHR5cGU6IHR5cGUsIGFuaW1hdGlvbl90eXBlOiBhbmltYXRpb25fdHlwZX0pO1xuXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlUmVnaW9uKGVuZF9jb29yZHMsIGRlbHRhX3gsIGRlbHRhX3ksIHN0YXJ0X3RpbWUsIGVuZF90aW1lLCBkdXJhdGlvbiwgdHlwZSwgYW5pbWF0aW9uX3R5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFpbiBhbmltYXRpb24gbG9vcCwgY29tcHV0ZXMgdGhlIG5leHQgW3gseV0gdmFsdWVzIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBlbmRfY29vcmRzIFt4LHldIGxpc3Qgb2YgdGhlIGVuZCBjb29yZGluYXRlcyB5b3Ugd2FudCB0aGUgcmVnaW9uIHRvIG1vdmUgdG9cclxuICAgICAgICAgKiBAcGFyYW0ge0ludH0gY1ggVGhlIHRvdGFsIGRlbHRhIG9mIHRoZSBYIGNvb3JkaW5hdGUgZnJvbSBiZWdpbm5pbmcgcG9zaXRpb24gdG8gZW5kIHBvc2l0aW9uXHJcbiAgICAgICAgICogQHBhcmFtIHtJbnR9IGNZIFRoZSB0b3RhbCBkZWx0YSBvZiB0aGVZIGNvb3JkaW5hdGUgZnJvbSBiZWdpbm5pbmcgcG9zaXRpb24gdG8gZW5kIHBvc2l0aW9uXHJcbiAgICAgICAgICogQHBhcmFtIHtEYXRlVGltZX0gc3RhcnRfdGltZSBBIGRhdGV0aW1lIHRpbWUgb2JqZWN0XHJcbiAgICAgICAgICogQHBhcmFtIHtJbnR8RGF0ZVRpbWV9IGVuZF90aW1lIEEgaW50IG9yIGRheXRpbWUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgKiBAcGFyYW0ge0ludH0gZCBUaGUgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZWFzdGluZyB0eXBlIHVzZWQgZm9yIHRoZSB0d2VlbmluZyBhbmltYXRpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfYW5pbWF0ZVJlZ2lvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZVJlZ2lvbihlbmRfY29vcmRzLCBjWCwgY1ksIHN0YXJ0X3RpbWUsIGVuZF90aW1lLCBkLCB0eXBlLCBhbmltYXRpb25fdHlwZSkge1xuICAgICAgICAgICAgLy9sb2cuaW5mbygnSW5zaWRlIG1haW4gYW5pbWF0aW9uIGxvb3AnKTtcblxuICAgICAgICAgICAgdmFyIG5leHRfcG9zX3ggPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgbmV4dF9wb3NfeSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBuZXh0X3NpemVfeCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBuZXh0X3NpemVfeSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHQgPSBub3cgLSBzdGFydF90aW1lO1xuXG4gICAgICAgICAgICAvL2xvZy5kZWJ1ZygnTm93OiAnLG5vdywgJyBUOiAnLHQpO1xuXG4gICAgICAgICAgICAvL2xvZy5kZWJ1Zyh7Y3g6IGNYLCBjeTogY1ksIHN0YXJ0VGltZTogc3RhcnRfdGltZSwgZW5kVGltZTogZW5kX3RpbWUsIGR1cmF0aW9uOiBkLCB0eXBlOnR5cGV9KVxuXG4gICAgICAgICAgICBpZiAobm93IDwgZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fYW5pbWF0ZVJlZ2lvbihlbmRfY29vcmRzLCBjWCwgY1ksIHN0YXJ0X3RpbWUsIGVuZF90aW1lLCBkLCB0eXBlLCBhbmltYXRpb25fdHlwZSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vbG9nLmluZm8oJ2luc2lkZSBpZiBsb29wJyk7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl90eXBlID09ICdwb3NpdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9wb3NfeCA9IGVhc2luZ190eXBlc1t0eXBlXSh0LCB0aGlzLmN1cnJlbnRfcG9zaXRpb25bMF0sIGNYLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9wb3NfeSA9IGVhc2luZ190eXBlc1t0eXBlXSh0LCB0aGlzLmN1cnJlbnRfcG9zaXRpb25bMV0sIGNZLCBkKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlWChuZXh0X3Bvc194KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVkobmV4dF9wb3NfeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25fdHlwZSA9PSAnc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9zaXplX3ggPSBlYXNpbmdfdHlwZXNbdHlwZV0odCwgdGhpcy5jdXJyZW50X3NpemVbMF0sIGNYLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9zaXplX3kgPSBlYXNpbmdfdHlwZXNbdHlwZV0odCwgdGhpcy5jdXJyZW50X3NpemVbMV0sIGNZLCBkKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVYKG5leHRfc2l6ZV94KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplWShuZXh0X3NpemVfeSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2xvZy5kZWJ1ZygnaW5zaWRlIGVsc2UsIGFsbW9zdCBvdmVyJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX3R5cGUgPT0gJ3Bvc2l0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlWChlbmRfY29vcmRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVkoZW5kX2Nvb3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9wb3NpdGlvblswXSA9IGVuZF9jb29yZHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9wb3NpdGlvblsxXSA9IGVuZF9jb29yZHNbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25fdHlwZSA9PSAnc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplWChlbmRfY29vcmRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplWShlbmRfY29vcmRzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3NpemVbMF0gPSBlbmRfY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfc2l6ZVsxXSA9IGVuZF9jb29yZHNbMV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb3JpZ2luUG9zaXRpb24nLFxuXG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBnZXR0ZXIgZm9yIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxyXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBvcmlnaW5hbCBbeCx5XSBwb3NpdGlvblxyXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb3JpZ2luX3Bvc2l0aW9uLmdldCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogZ2V0dGVyIGZvciB0aGUgb3JpZ2luYWwgc2l6ZVxyXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBvcmlnaW5hbCBbeCx5XSBzaXplXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29yaWdpblNpemUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb3JpZ2luX3NpemUuZ2V0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ1NlZWsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gU2VlayhyZWdpb25fbmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgd3JhcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgICAgICAgICAgRldJLlJ1blNjcmlwdCgnUmVnaW9uWycgKyByZWdpb25fbmFtZSArICddLlNlZWsoXCInICsgZGlyZWN0aW9uICsgJ1wiLCBcIicgKyB3cmFwICsgJ1wiKTsnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZWdpb247XG59KCk7XG5cbnZhciBIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhlbHBlcnMoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWxwZXJzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSGVscGVycywgbnVsbCwgW3tcbiAgICAgICAga2V5OiAncG9sbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBvbGxlcih2YXJfbmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA1MDtcblxuXG4gICAgICAgICAgICBpZiAoUGxheWVyLkdldFZhcmlhYmxlKHZhcl9uYW1lKSAhPSAnVW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgUGxheWVyLlNldFZhcmlhYmxlKHZhcl9uYW1lLCAnVW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdGltZW91dF9mdW5jdGlvbiA9IGZ1bmN0aW9uIHRpbWVvdXRfZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgSGVscGVycy5wb2xsZXIodmFyX25hbWUsIGNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRpbWVvdXRfZnVuY3Rpb24sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEhlbHBlcnM7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVscGVycztcbm1vZHVsZS5leHBvcnRzID0gUmVnaW9uO1xubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50O1xubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdfQ==
