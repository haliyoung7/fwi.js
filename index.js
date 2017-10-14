(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Player = require('./src/player.js');
var Template = require('./src/template.js');
var Content = require('./src/content.js');
var Region = require('./src/region.js');

},{"./src/content.js":2,"./src/player.js":5,"./src/region.js":6,"./src/template.js":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Content = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fwi_core = require('./fwi_core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _content_name = new WeakMap();
var _region_name = new WeakMap();

var Content = exports.Content = function () {
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
			return _fwi_core.FWI.getURL('content://' + name);
		}
	}, {
		key: 'Print',
		value: function Print(region_name, parameters) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
		}
	}, {
		key: 'Seek',
		value: function Seek(region_name, direction) {
			var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			_fwi_core.FWI.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
		}
	}, {
		key: 'SetArgument',
		value: function SetArgument(region_name, o) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref = _step.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var k = _ref2[0];
					var v = _ref2[1];

					_fwi_core.FWI.RunScript('Content[' + region_name + '].SetArgument(' + k + ', ' + v + ');');
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

			;
		}
	}, {
		key: 'ShowRoute',
		value: function ShowRoute(region_name, o) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _ref3 = _step2.value;

					var _ref4 = _slicedToArray(_ref3, 2);

					var k = _ref4[0];
					var v = _ref4[1];

					_fwi_core.FWI.RunScript('Content[' + region_name + '].ShowRoute(' + k + ', ' + v + ');');
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
		}
	}, {
		key: 'Url',
		value: function Url(url) {
			_fwi_core.FWI.RunScript('Content.Url(' + url + ');');
		}
	}, {
		key: 'UrlAsync',
		value: function UrlAsync(url) {
			_fwi_core.FWI.RunScript('Content.UrlAsync(' + url + ');');
		}
	}, {
		key: 'Pause',
		value: function Pause(region_name) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].Pause();');
		}
	}, {
		key: 'Play',
		value: function Play(region_name) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].Play();');
		}
	}, {
		key: 'SeekBy',
		value: function SeekBy(region_name, value) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
		}
	}, {
		key: 'SeekTo',
		value: function SeekTo(region_name, value) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
		}
	}, {
		key: 'Resume',
		value: function Resume(region_name) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].Resume();');
		}
	}, {
		key: 'SetBalance',
		value: function SetBalance(region_name, balance) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
		}
	}, {
		key: 'SetVolume',
		value: function SetVolume(region_name, volume) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
		}
	}, {
		key: 'Stop',
		value: function Stop(region_name) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].Stop();');
		}
	}, {
		key: 'HighlightRows',
		value: function HighlightRows(region_name, row_list) {
			_fwi_core.FWI.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
		}
	}]);

	return Content;
}();

},{"./fwi_core":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var easingTypes = exports.easingTypes = {
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Load the FWI Javascript base:
var FWI = exports.FWI = window.frameElement ? window.frameElement.parentNode.FWI : window.external;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fwi_core = require('./fwi_core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = exports.Player = function () {
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
      return _fwi_core.FWI.MarkupValue('{&var:' + name + '}');
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

          values.push(_fwi_core.FWI.MarkupValue('{&var:' + v + '}'));
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
      _fwi_core.FWI.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
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

          _fwi_core.FWI.RunScript('Player.SetVariable(' + k + ',' + v + ');');
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
      _fwi_core.FWI.RunScript('Player.SetLanguage(' + languageCode + ');');
    }

    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */

  }, {
    key: 'ToggleVariable',
    value: function ToggleVariable(name) {
      _fwi_core.FWI.RunScript('Player.ToggleVariable(' + name + ');');
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
      _fwi_core.FWI.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
    }

    /*
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

      _fwi_core.FWI.RunScript(command);
    }

    /*
     * Resets the idle timer
     * @return {Void}
     */

  }, {
    key: 'ResetIdleTimer',
    value: function ResetIdleTimer() {
      _fwi_core.FWI.RunScript('Player.ResetIdleTimer();');
    }

    /*
     * Restarts the player
     * @return {Void}
     */

  }, {
    key: 'Restart',
    value: function Restart() {
      _fwi_core.FWI.RunScript('Player.Restart();');
    }

    /*
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

      _fwi_core.FWI.RunScript(command);
    }

    /*
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

      _fwi_core.FWI.RunScript(command);
    }

    /*
     * Unsets a variable
     * @param {String} name Variable name you wish to clear
     * @return {Void}
     */

  }, {
    key: 'UnsetVariable',
    value: function UnsetVariable(name) {
      _fwi_core.FWI.RunScript('Player.UnsetVariable(' + name + ');');
    }
  }]);

  return Player;
}();

},{"./fwi_core":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Region = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require("./template");

var _easing_types = require("./easing_types");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _origin_position = new WeakMap();
var _origin_size = new WeakMap();

var Region = exports.Region = function () {

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
        key: "resetPosition",


        /*
         * Resets the position of the region to the original
         * @return {Void}
         */
        value: function resetPosition() {
            _template.Template.ClearLeft(this.region_name);
            _template.Template.ClearTop(this.region_name);
            this.current_xy = this.originXY;
        }

        /*
         * Resets the size of the region to the original
         * @return {Void}
         */

    }, {
        key: "resetSize",
        value: function resetSize() {
            _template.Template.ClearHeight(this.region_name);
            _template.Template.ClearWidth(this.region_name);
            this.current_size = this.originSize;
        }

        /*
         * bound seek method with region name automatially given
         * see Region.Seek for more
         */

    }, {
        key: "seek",
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
        key: "_moveX",
        value: function _moveX(value) {
            _template.Template.SetLeft(this.region_name, value);
        }

        /*
         * Sets the new vertical position of the region
         * @param {Int} value Vertical position in pixels from top of the screen
         * @return {Void}
         */

    }, {
        key: "_moveY",
        value: function _moveY(value) {
            _template.Template.SetTop(this.region_name, value);
        }

        /*
         * Sets the new width of the region
         * @param {Int} value Width in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeX",
        value: function _resizeX(value) {
            _template.Template.SetWidth(this.region_name, value);
        }

        /*
         * Sets the new height of the region
         * @param {Int} value Height in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeY",
        value: function _resizeY(value) {
            _template.Template.SetHeight(this.region_name, value);
        }

        /**
         * The move function moves a region to a new set of xy coordinantes using predefined easing types.
         * @param {Array} end_pos A list of [x,y] cordinates for the end position of the top left of the region
         * @param {Int} duration How long the animation lasts in milliseconds
         * @param {String} type What kind of easing to apply to the tween animation
         * @return {Void}
         */

    }, {
        key: "moveTo",
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
        key: "resize",
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
        key: "_animateRegionInit",
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
        key: "_animateRegion",
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
        key: "originPosition",


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
        key: "originSize",
        get: function get() {
            return _origin_size.get(this);
        }
    }], [{
        key: "Seek",
        value: function Seek(region_name, direction) {
            var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            FWI.RunScript('Region[' + region_name + '].Seek("' + direction + '", "' + wrap + '");');
        }
    }]);

    return Region;
}();

},{"./easing_types":3,"./template":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fwi_core = require('./fwi_core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = exports.Template = function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, null, [{
    key: 'PlayContent',
    value: function PlayContent(name, region) {
      _fwi_core.FWI.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
    }
  }, {
    key: 'PopContent',
    value: function PopContent() {
      _fwi_core.FWI.RunScript('Template.PopContent();');
    }
  }, {
    key: 'PushContent',
    value: function PushContent(content, region) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      _fwi_core.FWI.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
    }
  }, {
    key: 'Restart',
    value: function Restart() {
      _fwi_core.FWI.RunScript('Template.Restart();');
    }
  }, {
    key: 'SetCanSize',
    value: function SetCanSize(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetCanSize(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetCanDrag',
    value: function SetCanDrag(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetCanDrag(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetCanRotate',
    value: function SetCanRotate(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetCanRotate(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetLeft',
    value: function SetLeft(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetLeft(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetTop',
    value: function SetTop(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetTop(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetWidth',
    value: function SetWidth(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetWidth(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetHeight',
    value: function SetHeight(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetHeight(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetAngle',
    value: function SetAngle(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'ClearLeft',
    value: function ClearLeft(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearLeft(' + region_name + ');');
    }
  }, {
    key: 'ClearTop',
    value: function ClearTop(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearTop(' + region_name + ');');
    }
  }, {
    key: 'ClearWidth',
    value: function ClearWidth(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearWidth(' + region_name + ');');
    }
  }, {
    key: 'ClearHeight',
    value: function ClearHeight(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearHeight(' + region_name + ');');
    }
  }, {
    key: 'ClearAngle',
    value: function ClearAngle(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearAngle(' + region_name + ');');
    }
  }, {
    key: 'SetZIndex',
    value: function SetZIndex(region_name, value) {
      _fwi_core.FWI.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'ClearZIndex',
    value: function ClearZIndex(region_name) {
      _fwi_core.FWI.RunScript('Template.ClearZIndex(' + region_name + ');');
    }
  }, {
    key: 'SetLinearVelocity',
    value: function SetLinearVelocity(region_name) {
      var Vx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      var Vy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

      _fwi_core.FWI.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
    }
  }, {
    key: 'SetAngularVelocity',
    value: function SetAngularVelocity(region_name, omega) {
      _fwi_core.FWI.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
    }
  }]);

  return Template;
}();

},{"./fwi_core":4}]},{},[1]);
