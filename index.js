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

var _fwi_core = require('./fwi_core.js');

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

},{"./fwi_core.js":4}],3:[function(require,module,exports){
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

var _fwi_core = require('./fwi_core.js');

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

},{"./fwi_core.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Region = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require("./template.js");

var _easing_types = require("./easing_types.js");

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

},{"./easing_types.js":3,"./template.js":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fwi_core = require('./fwi_core.js');

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

},{"./fwi_core.js":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1pbmRleC5qcyIsInNyY1xcY29udGVudC5qcyIsInNyY1xcZWFzaW5nX3R5cGVzLmpzIiwic3JjXFxmd2lfY29yZS5qcyIsInNyY1xccGxheWVyLmpzIiwic3JjXFxyZWdpb24uanMiLCJzcmNcXHRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFNBQVMsUUFBUSxpQkFBUixDQUFmO0FBQ0EsSUFBTSxXQUFXLFFBQVEsbUJBQVIsQ0FBakI7QUFDQSxJQUFNLFVBQVUsUUFBUSxrQkFBUixDQUFoQjtBQUNBLElBQU0sU0FBUyxRQUFRLGlCQUFSLENBQWY7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7QUFFQSxJQUFNLGdCQUFnQixJQUFJLE9BQUosRUFBdEI7QUFDQSxJQUFNLGVBQWUsSUFBSSxPQUFKLEVBQXJCOztJQUVhLE8sV0FBQSxPO0FBRVosa0JBQVksSUFBWixFQUFrQixXQUFsQixFQUErQjtBQUFBOztBQUM5QixnQkFBYyxHQUFkLENBQWtCLElBQWxCLEVBQXdCLElBQXhCO0FBQ0EsZUFBYSxHQUFiLENBQWlCLElBQWpCLEVBQXVCLFdBQXZCO0FBQ0E7Ozs7K0JBOEVZO0FBQ1osVUFBTyxRQUFRLFVBQVIsQ0FBbUIsS0FBSyxJQUF4QixDQUFQO0FBQ0E7Ozt3QkFFSyxVLEVBQVk7QUFDakIsV0FBUSxLQUFSLENBQWMsS0FBSyxXQUFuQixFQUFnQyxVQUFoQztBQUNBOzs7dUJBRUksUyxFQUF3QjtBQUFBLE9BQWIsSUFBYSx1RUFBTixJQUFNOztBQUM1QixXQUFRLElBQVIsQ0FBYSxLQUFLLFdBQWxCLEVBQStCLFNBQS9CLEVBQTBDLElBQTFDO0FBQ0E7Ozs4QkFFVyxDLEVBQUc7QUFDZCxXQUFRLFdBQVIsQ0FBb0IsS0FBSyxXQUF6QixFQUFzQyxDQUF0QztBQUNBOzs7NEJBRVMsQyxFQUFHO0FBQ1osV0FBUSxTQUFSLENBQWtC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LFNBQUosQ0FBYyx1QkFBc0IsV0FBdEIsR0FBb0MsSUFBbEQ7QUFDRDs7OytCQUVpQixXLEVBQWE7QUFDN0Isb0JBQUksU0FBSixDQUFjLHlCQUF3QixXQUF4QixHQUFzQyxJQUFwRDtBQUNEOzs7Z0NBRWtCLFcsRUFBYTtBQUM5QixvQkFBSSxTQUFKLENBQWMsMEJBQXlCLFdBQXpCLEdBQXVDLElBQXJEO0FBQ0Q7OzsrQkFFaUIsVyxFQUFhO0FBQzdCLG9CQUFJLFNBQUosQ0FBYyx5QkFBeUIsV0FBekIsR0FBdUMsSUFBckQ7QUFDRDs7OzhCQUVnQixXLEVBQWEsSyxFQUFPO0FBQ25DLG9CQUFJLFNBQUosQ0FBYyx3QkFBd0IsV0FBeEIsR0FBc0MsSUFBdEMsR0FBNkMsS0FBN0MsR0FBcUQsSUFBbkU7QUFDRDs7O2dDQUVrQixXLEVBQWE7QUFDOUIsb0JBQUksU0FBSixDQUFjLDBCQUEwQixXQUExQixHQUF3QyxJQUF0RDtBQUNEOzs7c0NBRXdCLFcsRUFBaUM7QUFBQSxVQUFwQixFQUFvQix1RUFBZixHQUFlO0FBQUEsVUFBVixFQUFVLHVFQUFMLEdBQUs7O0FBQ3hELG9CQUFJLFNBQUosQ0FBYyxnQ0FBZ0MsV0FBaEMsR0FBOEMsSUFBOUMsR0FBcUQsRUFBckQsR0FBMEQsSUFBMUQsR0FBaUUsRUFBakUsR0FBc0UsSUFBcEY7QUFDRDs7O3VDQUV5QixXLEVBQWEsSyxFQUFPO0FBQzVDLG9CQUFJLFNBQUosQ0FBYyxpQ0FBaUMsV0FBakMsR0FBK0MsSUFBL0MsR0FBc0QsS0FBdEQsR0FBOEQsSUFBNUU7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3NyYy9wbGF5ZXIuanMnKTtcbmNvbnN0IFRlbXBsYXRlID0gcmVxdWlyZSgnLi9zcmMvdGVtcGxhdGUuanMnKTtcbmNvbnN0IENvbnRlbnQgPSByZXF1aXJlKCcuL3NyYy9jb250ZW50LmpzJyk7XG5jb25zdCBSZWdpb24gPSByZXF1aXJlKCcuL3NyYy9yZWdpb24uanMnKTsiLCJpbXBvcnQgeyBGV0kgfSBmcm9tIFwiLi9md2lfY29yZS5qc1wiO1xuXG5jb25zdCBfY29udGVudF9uYW1lID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9yZWdpb25fbmFtZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBjbGFzcyBDb250ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihuYW1lLCByZWdpb25fbmFtZSkge1xuXHRcdF9jb250ZW50X25hbWUuc2V0KHRoaXMsIG5hbWUpO1xuXHRcdF9yZWdpb25fbmFtZS5zZXQodGhpcywgcmVnaW9uX25hbWUpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIF9jb250ZW50X25hbWUuZ2V0KHRoaXMpO1xuXHR9XG5cblx0Z2V0IHJlZ2lvbl9uYW1lKCkge1xuXHRcdHJldHVybiBfcmVnaW9uX25hbWUuZ2V0KHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIEdldERldGFpbHMobmFtZSkge1xuXHRcdHJldHVybiBGV0kuZ2V0VVJMKCdjb250ZW50Oi8vJyArIG5hbWUpO1xuXHR9XG5cblx0c3RhdGljIFByaW50KHJlZ2lvbl9uYW1lLCBwYXJhbWV0ZXJzKSB7XG5cdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5QcmludCgnICsgcGFyYW1ldGVycyArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFNlZWsocmVnaW9uX25hbWUsIGRpcmVjdGlvbiwgd3JhcCA9IHRydWUpIHtcblx0XHRGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlNlZWsoJyArIGRpcmVjdGlvbiArICcsICcgKyB3cmFwICsgJyk7Jyk7XG5cdH1cblxuXHRzdGF0aWMgU2V0QXJndW1lbnQocmVnaW9uX25hbWUsIG8pIHtcbiAgICAgIFx0Zm9yIChsZXQgW2ssdl0gb2Ygbykge1xuICAgICAgICAgIFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZXRBcmd1bWVudCgnICsgayArICcsICcgKyB2ICsgJyk7Jyk7XG4gICAgICBcdH07XG5cdH1cblxuXHRzdGF0aWMgU2hvd1JvdXRlKHJlZ2lvbl9uYW1lLCBvKSB7XG5cdFx0Zm9yIChsZXQgW2ssdl0gb2Ygbykge1xuXHRcdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TaG93Um91dGUoJyArIGsgKyAnLCAnICsgdiArICcpOycpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBVcmwodXJsKSB7XG5cdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudC5VcmwoJyArIHVybCArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFVybEFzeW5jKHVybCkge1xuXHRcdEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnQuVXJsQXN5bmMoJyArIHVybCArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFBhdXNlKHJlZ2lvbl9uYW1lKSB7XG5cdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5QYXVzZSgpOycpO1xuXHR9XG5cblx0c3RhdGljIFBsYXkocmVnaW9uX25hbWUpIHtcblx0XHRGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlBsYXkoKTsnKTtcblx0fVxuXG5cdHN0YXRpYyBTZWVrQnkocmVnaW9uX25hbWUsIHZhbHVlKSB7XG5cdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZWVrQnkoJyArIHZhbHVlICsgJyk7Jyk7XG5cdH1cblxuXHRzdGF0aWMgU2Vla1RvKHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuXHRcdEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uU2Vla1RvKCcgKyB2YWx1ZSArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFJlc3VtZShyZWdpb25fbmFtZSkge1xuXHRcdEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uUmVzdW1lKCk7Jyk7XG5cdH1cblxuXHRzdGF0aWMgU2V0QmFsYW5jZShyZWdpb25fbmFtZSwgYmFsYW5jZSkge1xuXHRcdEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uU2V0QmFsYW5jZSgnICsgYmFsYW5jZSArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFNldFZvbHVtZShyZWdpb25fbmFtZSwgdm9sdW1lKSB7XG5cdFx0RldJLlJ1blNjcmlwdCgnQ29udGVudFsnICsgcmVnaW9uX25hbWUgKyAnXS5TZXRWb2x1bWUoJyArIHZvbHVtZSArICcpOycpO1xuXHR9XG5cblx0c3RhdGljIFN0b3AocmVnaW9uX25hbWUpIHtcblx0XHRGV0kuUnVuU2NyaXB0KCdDb250ZW50WycgKyByZWdpb25fbmFtZSArICddLlN0b3AoKTsnKTtcblx0fVxuXG5cdHN0YXRpYyBIaWdobGlnaHRSb3dzKHJlZ2lvbl9uYW1lLCByb3dfbGlzdCkge1xuXHRcdEZXSS5SdW5TY3JpcHQoJ0NvbnRlbnRbJyArIHJlZ2lvbl9uYW1lICsgJ10uSGlnaGxpZ2h0Um93cygnICsgcm93X2xpc3QgKyAnKTsnKTtcblx0fVxuXG5cdGdldERldGFpbHMoKSB7XG5cdFx0cmV0dXJuIENvbnRlbnQuR2V0RGV0YWlscyh0aGlzLm5hbWUpO1xuXHR9XG5cblx0cHJpbnQocGFyYW1ldGVycykge1xuXHRcdENvbnRlbnQuUHJpbnQodGhpcy5yZWdpb25fbmFtZSwgcGFyYW1ldGVycyk7XG5cdH1cblxuXHRzZWVrKGRpcmVjdGlvbiwgd3JhcCA9IHRydWUpIHtcblx0XHRDb250ZW50LlNlZWsodGhpcy5yZWdpb25fbmFtZSwgZGlyZWN0aW9uLCB3cmFwKTtcblx0fVxuXG5cdHNldEFyZ3VtZW50KG8pIHtcblx0XHRDb250ZW50LlNldEFyZ3VtZW50KHRoaXMucmVnaW9uX25hbWUsIG8pO1xuXHR9XG5cblx0c2hvd1JvdXRlKG8pIHtcblx0XHRDb250ZW50LlNob3dSb3V0ZSh0aGlzLnJlZ2lvbl9uYW1lLCBvKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdENvbnRlbnQuUGF1c2UodGhpcy5yZWdpb25fbmFtZSk7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdENvbnRlbnQuUGxheSh0aGlzLnJlZ2lvbl9uYW1lKTtcblx0fVxuXG5cdHNlZWtCeSh2YWx1ZSkge1xuXHRcdENvbnRlbnQuU2Vla0J5KHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHNlZWtUbyh2YWx1ZSkge1xuXHRcdENvbnRlbnQuU2Vla1RvKHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJlc3VtZSgpIHtcblx0XHRDb250ZW50LlJlc3VtZSh0aGlzLnJlZ2lvbl9uYW1lKTtcblx0fVxuXG5cdHNldEJhbGFuY2UoYmFsYW5jZSkge1xuXHRcdENvbnRlbnQuU2V0QmFsYW5jZSh0aGlzLnJlZ2lvbl9uYW1lLCBiYWxhbmNlKTtcblx0fVxuXG5cdHNldFZvbHVtZSh2b2x1bWUpIHtcblx0XHRDb250ZW50LlNldFZvbHVtZSh0aGlzLnJlZ2lvbl9uYW1lLCB2b2x1bWUpO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRDb250ZW50LlN0b3AodGhpcy5yZWdpb25fbmFtZSk7XG5cdH1cbn0iLCJleHBvcnQgY29uc3QgZWFzaW5nVHlwZXMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEVhc2luZyB0eXBlcyBhcmUgZGlmZmVyZW50IGVxdWF0aW9ucyB0byBkZXRlcm1pbmUgdGhlIHBhdGggb2YgYSByZWdpb24gdHdlZW4uXG4gICAgICAgKiBAcGFyYW0ge0RhdGVUaW1lfEludH0gdCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBoYXMgcGFzc2VkIHNpbmNlIHRoZSBhbmltYXRpb24gYmVnYW4uXG4gICAgICAgKiBAcGFyYW0ge0ludHxGbG9hdH0gYiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgeCBvciB5IHBvaW50IG9mIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHJlZ2lvblxuICAgICAgICogQHBhcmFtIHtJbnR8RmxvYXR9IGMgVGhlIHRvdGFsIGRlbHRhIGZvciB0aGUgeCBvciB5IHBvaW50IGZyb20gYmVnaW5uaW5nIHBvc2l0aW9uIHRvIHRoZSBlbmQgcG9zaXRpb25cbiAgICAgICAqIEBwYXJhbSB7SW50fSBkIFRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgKiBAcmV0dXJuIHtGbG9hdH0gVGhlIG5leHQgcG9zaXRpb24gb2YgdGhlIHggb3IgeSBwb2ludC5cbiAgICAgICAqL1xuXG4gICAgbGluZWFyOiBmdW5jdGlvbih0LGIgLGMsIGQpIHtcbiAgICAgIHJldHVybiBjKnQvZCArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XG4gICAgICB0IC89IGQ7XG4gICAgICByZXR1cm4gYyp0KnQgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0UXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQvMjtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIC1jLzIgKiAodCoodC0yKSAtIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkO1xuICAgICAgICByZXR1cm4gYyp0KnQqdCArIGI7XG4gICAgfSxcblxuICAgIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIGMqKHQqdCp0ICsgMSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQvMjtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtcbiAgICAgICAgdCAtPSAyO1xuICAgICAgICByZXR1cm4gYy8yKih0KnQqdCArIDIpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkO1xuICAgICAgICByZXR1cm4gYyp0KnQqdCp0ICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZDtcbiAgICAgICAgdC0tO1xuICAgICAgICByZXR1cm4gLWMgKiAodCp0KnQqdCAtIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkLzI7XG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgICAgICAgdCAtPSAyO1xuICAgICAgICByZXR1cm4gLWMvMiAqICh0KnQqdCp0IC0gMikgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5RdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHJldHVybiBjKnQqdCp0KnQqdCArIGI7XG4gICAgfSxcblxuICAgIGVhc2VPdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQ7XG4gICAgICAgIHQtLTtcbiAgICAgICAgcmV0dXJuIGMqKHQqdCp0KnQqdCArIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkLzI7XG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0KnQgKyBiO1xuICAgICAgICB0IC09IDI7XG4gICAgICAgIHJldHVybiBjLzIqKHQqdCp0KnQqdCArIDIpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluU2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0L2QgKiAoTWF0aC5QSS8yKSkgKyBjICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0L2QgKiAoTWF0aC5QSS8yKSkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHJldHVybiAtYy8yICogKE1hdGguY29zKE1hdGguUEkqdC9kKSAtIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluRXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gYyAqIE1hdGgucG93KCAyLCAxMCAqICh0L2QgLSAxKSApICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGMgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdC9kICkgKyAxICkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZC8yO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiBjLzIgKiBNYXRoLnBvdyggMiwgMTAgKiAodCAtIDEpICkgKyBiO1xuICAgICAgICB0LS07XG4gICAgICAgIHJldHVybiBjLzIgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdCkgKyAyICkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5DaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHQgLz0gZDtcbiAgICAgICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gdCp0KSAtIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdCAvPSBkO1xuICAgICAgICB0LS07XG4gICAgICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSB0KnQpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQvMjtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gLWMvMiAqIChNYXRoLnNxcnQoMSAtIHQqdCkgLSAxKSArIGI7XG4gICAgICAgIHQgLT0gMjtcbiAgICAgICAgcmV0dXJuIGMvMiAqIChNYXRoLnNxcnQoMSAtIHQqdCkgKyAxKSArIGI7XG4gICAgfSxcblxuICAgIGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcbiAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuICAgICAgICBlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcbiAgICAgICAgcmV0dXJuIC0oYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcbiAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxuICAgICAgICBlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqdCkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkgKyBjICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgaWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kLzIpPT0yKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqKC4zKjEuNSk7XG4gICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cbiAgICAgICAgZWxzZSB2YXIgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4gKGMvYSk7XG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIC0uNSooYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSouNSArIGMgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlSW5CYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XG4gICAgICAgIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiBjKih0Lz1kKSp0KigocysxKSp0IC0gcykgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqKChzKzEpKnQgKyBzKSArIDEpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKih0KnQqKCgocyo9KDEuNTI1KSkrMSkqdCAtIHMpKSArIGI7XG4gICAgICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KigoKHMqPSgxLjUyNSkpKzEpKnQgKyBzKSArIDIpICsgYjtcbiAgICB9LFxuXG4gICAgZWFzZUluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHJldHVybiBjIC0gdGhpcy5lYXNlT3V0Qm91bmNlKGQtdCwgMCwgYywgZCkgKyBiO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmICgodC89ZCkgPCAoMS8yLjc1KSkge1xuICAgICAgICAgICAgcmV0dXJuIGMqKDcuNTYyNSp0KnQpICsgYjtcbiAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIvMi43NSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgxLjUvMi43NSkpKnQgKyAuNzUpICsgYjtcbiAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIuNS8yLjc1KSkge1xuICAgICAgICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuMjUvMi43NSkpKnQgKyAuOTM3NSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuNjI1LzIuNzUpKSp0ICsgLjk4NDM3NSkgKyBiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICBpZiAodCA8IGQvMikgcmV0dXJuIHRoaXMuZWFzZUluQm91bmNlKHQqMiwgMCwgYywgZCkgKiAuNSArIGI7XG4gICAgICAgIHJldHVybiB0aGlzLmVhc2VPdXRCb3VuY2UodCoyLWQsIDAsIGMsIGQpICogLjUgKyBjKi41ICsgYjtcbiAgICB9XG59IiwiLy8gTG9hZCB0aGUgRldJIEphdmFzY3JpcHQgYmFzZTpcbmV4cG9ydCBjb25zdCBGV0kgPSB3aW5kb3cuZnJhbWVFbGVtZW50ID8gd2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnROb2RlLkZXSSA6IHdpbmRvdy5leHRlcm5hbDsiLCJpbXBvcnQgeyBGV0kgfSBmcm9tIFwiLi9md2lfY29yZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2luZ2xlIENNIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBBIHZhcmlhYmxlIG5hbWUgdG8gY29sbGVjdFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBhcHByb3ByaWF0ZWx5IGNhc3RlZCB2YWx1ZSBmcm9tIHRoZSB2YXJpYWJsZVxuICAgKi9cbiAgc3RhdGljIEdldFZhcmlhYmxlKG5hbWUpIHtcbiAgICByZXR1cm4gRldJLk1hcmt1cFZhbHVlKCd7JnZhcjonICsgbmFtZSArICd9Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHZhbHVlcyBmb3IgbXVsdGlwbGUgQ00gdmFyaWFibGVzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuYW1lQXJyYXkgQW4gYXJyYXkgb2YgdmFyaWFibGUgbmFtZXMgdG8gY29sbGVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgcmVxdWVzdGVkIHZhcmlhYmxlc1xuICAgKi9cbiAgc3RhdGljIEdldE1hbnlWYXJpYWJsZXMobmFtZUFycmF5KSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IFtrLHZdIG9mIG5hbWVBcnJheS5lbnRyaWVzKCkpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goRldJLk1hcmt1cFZhbHVlKCd7JnZhcjonICsgdiArICd9JykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc2luZ2xlIHZhcmlhYmxlIGJhY2sgaW4gQ00uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBzZXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgdG8gc2V0XG4gICAqIEByZXR1cm4ge1ZvaWR9XG4gICAqL1xuICBzdGF0aWMgU2V0VmFyaWFibGUobmFtZSwgdmFsdWUpIHtcbiAgICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5TZXRWYXJpYWJsZSgnICsgbmFtZSArICcsICcgKyB2YWx1ZSArICcpOycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbXVsdGlwbGUgdmFyaWFibGVzIGJhY2sgaW4gQ00uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlWYWx1ZURpY3QgQW4gb2JqZWN0IHRoYXQgZGVmaW5lcyBrZXkvdmFsdWUgcGFpcnMgdG8gdXNlXG4gICAqIEByZXR1cm4ge1ZvaWR9XG4gICAqL1xuICBzdGF0aWMgU2V0TWFueVZhcmlhYmxlcyhrZXlWYWx1ZURpY3QpIHtcbiAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBrZXlWYWx1ZURpY3QpIHtcbiAgICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlNldFZhcmlhYmxlKCcgKyBrICsgJywnICsgdiArICcpOycpO1xuICAgICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsYW5ndWFnZSBvZiB0aGUgYnVpbGQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgVGhlIGxhbmd1YWdlIGNvZGUgdG8gdXNlXG4gICAqIEByZXR1cm4ge1ZvaWR9XG4gICAqL1xuICBzdGF0aWMgU2V0TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBGV0kuUnVuU2NyaXB0KCdQbGF5ZXIuU2V0TGFuZ3VhZ2UoJyArIGxhbmd1YWdlQ29kZSArICcpOycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxhbmd1YWdlIG9mIHRoZSBidWlsZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSBUaGUgbGFuZ3VhZ2UgY29kZSB0byB1c2VcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIHN0YXRpYyBUb2dnbGVWYXJpYWJsZShuYW1lKSB7XG4gICAgICBGV0kuUnVuU2NyaXB0KCdQbGF5ZXIuVG9nZ2xlVmFyaWFibGUoJyArIG5hbWUgKyAnKTsnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGF5cyBhIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0ZW1wbGF0ZSB0byBwbGF5XG4gICAqIEBwYXJhbSB7U3RyaW5nfEludH0gdGVtcGxhdGVJbmRleCBUaGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgdGVtcGxhdGUgaW5zdGFuY2UgaW4gdGhlIG5ldHdvcmsgb3ZlcnZpZXdcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIHN0YXRpYyBQbGF5VGVtcGxhdGUobmFtZSwgdGVtcGxhdGVJbmRleCkge1xuICAgICAgRldJLlJ1blNjcmlwdCgnUGxheWVyLlBsYXlUZW1wbGF0ZSgnICsgbmFtZSArICh0ZW1wbGF0ZUluZGV4ID8gJywgJyArIHRlbXBsYXRlSW5kZXggOiAnJykgKyAnKTsnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJ1bnMgYSBzaGVsbCBjb21tYW5kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kX25hbWUgVGhlIG1haW4gY29tbWFuZCwgc29tZXRpbWVzIGluY2x1ZGVzIGZvbGRlciBwYXRoXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFyZ19hcnJheSBBcnJheSBvZiBhcmdzIHRvIGJlIHN1Ym1pdHRlZCB0byB0aGUgY29tbWFuZFxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgc3RhdGljIENvbW1hbmQoY29tbWFuZF9uYW1lLCBhcmdfYXJyYXkpIHtcbiAgICBsZXQgY29tbWFuZCA9ICdQbGF5ZXIuQ29tbWFuZCgnICsgY29tbWFuZF9uYW1lO1xuXG4gICAgZm9yIChsZXQgW2ssdl0gb2YgYXJnX2FycmF5LmVudHJpZXMoKSkge1xuICAgICAgY29tbWFuZCA9IGNvbW1hbmQgKyAnLCAnICsgdjtcbiAgICB9XG5cbiAgICBjb21tYW5kICs9ICcpOyc7XG5cbiAgICBGV0kuUnVuU2NyaXB0KGNvbW1hbmQpO1xuXG4gIH1cblxuICAvKlxuICAgKiBSZXNldHMgdGhlIGlkbGUgdGltZXJcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIHN0YXRpYyBSZXNldElkbGVUaW1lcigpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdQbGF5ZXIuUmVzZXRJZGxlVGltZXIoKTsnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlc3RhcnRzIHRoZSBwbGF5ZXJcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIHN0YXRpYyBSZXN0YXJ0KCkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5SZXN0YXJ0KCk7Jyk7XG4gIH1cblxuICAvKlxuICAgKiBTZW5kcyBtYWlsXG4gICAqIEBwYXJhbSB7T2JqfSBvIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBwYXJhbXRlcnMgZnJvbSB3aWtpXG4gICAqIHtcbiAgICogICB0bzogc3RyaW5nIGRlc3RfYWRkcmVzc1xuICAgKiAgIGNjOiBzdHJpbmcgY2NfYWRkcmVzcyxcbiAgICogICBiY2M6IHN0cmluZyBiY2NfYWRkcmVzcyxcbiAgICogICBzdWJqZWN0OiBzdHJpbmcgc3ViamVjdCxcbiAgICogICBmcm9tOiBzdHJpbmcgc2VuZGVyX2FkZHJlc3MsXG4gICAqICAgYm9keTogc3RyaW5nIG1haW5fbWVzc2FnZSxcbiAgICogICBob3N0OiBzdHJpbmcgc21wdF9ob3N0LFxuICAgKiAgIHVzZXJuYW1lOiBzdHJpbmcgc21wdF91c2VybmFtZSxcbiAgICogICBwYXNzd29yZDogc3RyaWduIHNtcHRfcGFzc3dvcmRcbiAgICogfVxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgc3RhdGljIFNlbmRNYWlsKG8pIHtcbiAgICBsZXQgY29tbWFuZCA9ICdQbGF5ZXIuU2VuZE1haWwoJztcblxuICAgIGZvciAobGV0IFtrLHZdIG9mIG8pIHtcbiAgICAgIGNvbW1hbmQgPSBjb21tYW5kICsgJywnICsgayArICc9JyArIHY7XG4gICAgfTtcblxuICAgIGNvbW1hbmQgKz0gJyk7JztcblxuICAgIEZXSS5SdW5TY3JpcHQoY29tbWFuZCk7XG4gIH1cblxuICAvKlxuICAgKiBUZXh0LXRvLXNwZWVjaFxuICAgKiBAcGFyYW0ge09ian0gbyBPYmplY3QgdGhhdCBjb250YWlucyBwYXJhbWV0ZXJzIGZyb20gdGhlIHdpa2lcbiAgICoge1xuICAgKiAgIG1zZzogc3RyaW5nIHRleHRfdG9fc3BlYWssXG4gICAqICAgVm9sdW1lOiBpbnQgdm9sdW1lLFxuICAgKiAgIFJhdGU6IGludCByYXRlLFxuICAgKiAgIFZvaWNlOiBzdHJpbmcgdm9pY2VcbiAgICAgfVxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgc3RhdGljIFNwZWFrKG8pIHtcbiAgICBsZXQgY29tbWFuZCA9ICdQbGF5ZXIuU3BlYWsoJztcblxuICAgIHRyeSB7XG4gICAgICBjb21tYW5kICs9IG9bbXNnXTtcbiAgICB9XG5cbiAgICBjYXRjaChlKSB7XG4gICAgICBsb2cuZXJyb3IoZSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IFtrLHZdIG9mIG8pIHtcbiAgICAgIGNvbW1hbmQgPSAoayAhPSAnbXNnJyA/IChjb21tYW5kICsgJywnICsgayArICc9JyArIHYpIDogJycpO1xuICAgIH07XG5cbiAgICBjb21tYW5kICs9ICcpOyc7XG5cbiAgICBGV0kuUnVuU2NyaXB0KGNvbW1hbmQpO1xuICB9XG5cbiAgLypcbiAgICogVW5zZXRzIGEgdmFyaWFibGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVmFyaWFibGUgbmFtZSB5b3Ugd2lzaCB0byBjbGVhclxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgc3RhdGljIFVuc2V0VmFyaWFibGUobmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1BsYXllci5VbnNldFZhcmlhYmxlKCcgKyBuYW1lICsgJyk7Jyk7XG4gIH1cblxufSIsImltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGUuanNcIjtcbmltcG9ydCB7IGVhc2luZ1R5cGVzIH0gZnJvbSBcIi4vZWFzaW5nX3R5cGVzLmpzXCI7XG5cbmNvbnN0IF9vcmlnaW5fcG9zaXRpb24gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX29yaWdpbl9zaXplID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGNsYXNzIFJlZ2lvbiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdCBmdW5jdGlvbiBjcmVhdGVzIGEgbmV3IHJlZ2lvbiBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiByZWdpb24gc3BlY2lmaWMgaW5mb3JtYXRpb25cbiAgICAgKiBsaWtlIGxvY2F0aW9uLCB0ZW1wbGF0ZSBuYW1lLCByZWdpb24gbmFtZSwgZXRjLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZWdpb25fbmFtZSBOYW1lIG9mIHRoZSByZWdpb24geW91IHdhbnQgdG8gY29udHJvbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wbGF0ZV9uYW1lIE5hbWUgb2YgdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcmlnaW5feHkgQXJyYXkgb2YgdGhlIHJlZ2lvbnMnIHN0YXJ0aW5nIHRvcCBsZWZ0IGNvb3JkaW5hdGVzLCBbeCx5XVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9yaWdpbl9zaXplIEFycmF5IG9mIHRoZSByZWdpb25zJyBzaXplIFt4LHldXG4gICAgICogQHJldHVybiB7T2JqfSBOZXcgcmVnaW9uIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlZ2lvbl9uYW1lLCB0ZW1wbGF0ZV9uYW1lLCBvcmlnaW5fcG9zaXRpb24sIG9yaWdpbl9zaXplKSB7XG4gICAgICAgIHRoaXMucmVnaW9uX25hbWUgPSByZWdpb25fbmFtZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZV9uYW1lID0gdGVtcGxhdGVfbmFtZTtcbiAgICAgICAgX29yaWdpbl9wb3NpdGlvbi5zZXQodGhpcywgb3JpZ2luX3Bvc2l0aW9uKTtcbiAgICAgICAgX29yaWdpbl9zaXplLnNldCh0aGlzLCBvcmlnaW5fc2l6ZSk7XG4gICAgICAgIHRoaXMuY3VycmVudF9wb3NpdGlvbiA9IF9vcmlnaW5fcG9zaXRpb24uZ2V0KHRoaXMpO1xuICAgICAgICB0aGlzLmN1cnJlbnRfc2l6ZSA9IF9vcmlnaW5fc2l6ZS5nZXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTZWVrcyB0byB0aGUgbmV4dCBjb250ZW50IGl0ZW0gaW4gdGhhdCByZWdpb25cbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gRGlyZWN0aW9uIG9mIHBhZ2luYXRpb24gcHJldnxuZXh0fGZpcnN0XG4gICAgKiBAcGFyYW0ge0Jvb2x8U3RyaW5nfSB3cmFwIENvbnRyb2xzIHdoYXQgaGFwcGVucyB3aGVuIHJlYWNoIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAqIEBwYXJtIHtTdHJpbmd9IHJlZ2lvbk5hbWUgTmFtZSBvZiB0aGUgcmVnaW9uIHlvdSB3YW50IHRvIHNlZWtcbiAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgKi9cbiAgICBzdGF0aWMgU2VlayhyZWdpb25fbmFtZSwgZGlyZWN0aW9uLCB3cmFwID0gdHJ1ZSkge1xuICAgICAgICBGV0kuUnVuU2NyaXB0KCdSZWdpb25bJysgcmVnaW9uX25hbWUgKyddLlNlZWsoXCInICsgZGlyZWN0aW9uICsgJ1wiLCBcIicgKyB3cmFwICsgJ1wiKTsnKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGdldHRlciBmb3IgdGhlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIG9yaWdpbmFsIFt4LHldIHBvc2l0aW9uXG4gICAgICovXG4gICAgZ2V0IG9yaWdpblBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gX29yaWdpbl9wb3NpdGlvbi5nZXQodGhpcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBnZXR0ZXIgZm9yIHRoZSBvcmlnaW5hbCBzaXplXG4gICAgICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIG9yaWdpbmFsIFt4LHldIHNpemVcbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9vcmlnaW5fc2l6ZS5nZXQodGhpcylcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlc2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHJlZ2lvbiB0byB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIFRlbXBsYXRlLkNsZWFyTGVmdCh0aGlzLnJlZ2lvbl9uYW1lKTtcbiAgICAgICAgVGVtcGxhdGUuQ2xlYXJUb3AodGhpcy5yZWdpb25fbmFtZSk7XG4gICAgICAgIHRoaXMuY3VycmVudF94eSA9IHRoaXMub3JpZ2luWFk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXNldHMgdGhlIHNpemUgb2YgdGhlIHJlZ2lvbiB0byB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlc2V0U2l6ZSgpIHtcbiAgICAgICAgVGVtcGxhdGUuQ2xlYXJIZWlnaHQodGhpcy5yZWdpb25fbmFtZSk7XG4gICAgICAgIFRlbXBsYXRlLkNsZWFyV2lkdGgodGhpcy5yZWdpb25fbmFtZSk7XG4gICAgICAgIHRoaXMuY3VycmVudF9zaXplID0gdGhpcy5vcmlnaW5TaXplO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogYm91bmQgc2VlayBtZXRob2Qgd2l0aCByZWdpb24gbmFtZSBhdXRvbWF0aWFsbHkgZ2l2ZW5cbiAgICAgKiBzZWUgUmVnaW9uLlNlZWsgZm9yIG1vcmVcbiAgICAgKi9cbiAgICBzZWVrKGRpcmVjdGlvbiwgd3JhcCA9IHRydWUpIHtcbiAgICAgICAgUmVnaW9uLlNlZWsodGhpcy5yZWdpb25fbmFtZSwgZGlyZWN0aW9uLCB3cmFwKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldHMgdGhlIG5ldyBob3Jpem9udGFsIHBvc2l0aW9uIG9mIHRoZSByZWdpb25cbiAgICAgKiBAcGFyYW0ge0ludH0gdmFsdWUgSG9yaXpvbnRhbCBwb3NpdGlvbiBpbiBwaXhlbHMgZnJvbSBsZWZ0IG9mIHRoZSBzY3JlZW5cbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIF9tb3ZlWCh2YWx1ZSkge1xuICAgICAgICBUZW1wbGF0ZS5TZXRMZWZ0KHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldHMgdGhlIG5ldyB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgcmVnaW9uXG4gICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIFZlcnRpY2FsIHBvc2l0aW9uIGluIHBpeGVscyBmcm9tIHRvcCBvZiB0aGUgc2NyZWVuXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBfbW92ZVkodmFsdWUpIHtcbiAgICAgICAgVGVtcGxhdGUuU2V0VG9wKHRoaXMucmVnaW9uX25hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldHMgdGhlIG5ldyB3aWR0aCBvZiB0aGUgcmVnaW9uXG4gICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIFdpZHRoIGluIHBpeGVsc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgX3Jlc2l6ZVgodmFsdWUpIHtcbiAgICAgICAgVGVtcGxhdGUuU2V0V2lkdGgodGhpcy5yZWdpb25fbmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0cyB0aGUgbmV3IGhlaWdodCBvZiB0aGUgcmVnaW9uXG4gICAgICogQHBhcmFtIHtJbnR9IHZhbHVlIEhlaWdodCBpbiBwaXhlbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIF9yZXNpemVZKHZhbHVlKSB7XG4gICAgICAgIFRlbXBsYXRlLlNldEhlaWdodCh0aGlzLnJlZ2lvbl9uYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1vdmUgZnVuY3Rpb24gbW92ZXMgYSByZWdpb24gdG8gYSBuZXcgc2V0IG9mIHh5IGNvb3JkaW5hbnRlcyB1c2luZyBwcmVkZWZpbmVkIGVhc2luZyB0eXBlcy5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbmRfcG9zIEEgbGlzdCBvZiBbeCx5XSBjb3JkaW5hdGVzIGZvciB0aGUgZW5kIHBvc2l0aW9uIG9mIHRoZSB0b3AgbGVmdCBvZiB0aGUgcmVnaW9uXG4gICAgICogQHBhcmFtIHtJbnR9IGR1cmF0aW9uIEhvdyBsb25nIHRoZSBhbmltYXRpb24gbGFzdHMgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgV2hhdCBraW5kIG9mIGVhc2luZyB0byBhcHBseSB0byB0aGUgdHdlZW4gYW5pbWF0aW9uXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3ZlVG8oZW5kX3BvcywgZHVyYXRpb24gPSAxMDAwLCB0eXBlID0gJ2xpbmVhcicpIHtcbiAgICAgICAgLy9sb2cuaW5mbygncGF0aFRvIGNhbGxlZCwgY2FsbGluZyBfYW5pbWF0ZVJlZ2lvbkluaXQnKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVJlZ2lvbkluaXQoZW5kX3BvcywgZHVyYXRpb24sIHR5cGUsICdwb3NpdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXNpemUgZnVuY3Rpb24gcmVzaXNlcyBhIHJlZ2lvbiB0byBhIG5ldyBzZXQgb2YgeHkgY29vcmRpbmFudGVzIHVzaW5nIHByZWRlZmluZWQgZWFzaW5nIHR5cGVzLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVuZF9zaXplIEEgbGlzdCBvZiBbeCx5XSBjb3JkaW5hdGVzIGZvciB0aGUgZW5kIHNpemVcbiAgICAgKiBAcGFyYW0ge0ludH0gZHVyYXRpb24gSG93IGxvbmcgdGhlIGFuaW1hdGlvbiBsYXN0cyBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBXaGF0IGtpbmQgb2YgZWFzaW5nIHRvIGFwcGx5IHRvIHRoZSB0d2VlbiBhbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlc2l6ZShlbmRfc2l6ZSwgZHVyYXRpb24gPSAxMDAwLCB0eXBlID0gJ2xpbmVhcicpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVJlZ2lvbkluaXQoZW5kX3NpemUsIGR1cmF0aW9uLCB0eXBlLCAnc2l6ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGlhbGl6ZXMgc29tZSB2YXJpYWJsZXMgZm9yIHVzZSBpbiB0aGUgYW5pbWF0aW9uIGFuZCBjYWxscyB0aGUgbWFpbiBhbmltYXRpb24gbWV0aG9kXG4gICAgICogQHBhcmFtIHtBcnJheX0gZW5kX2Nvb3JkcyBbeCx5XSBsaXN0IG9mIHRoZSBlbmQgY29vcmRpbmF0ZXMgeW91IHdhbnQgdGhlIHJlZ2lvbiB0byBtb3ZlIHRvXG4gICAgICogQHBhcmFtIHtJbnR9IGR1cmF0aW9uIEhvdyBsb25nIHRoZSBhbmltYXRpb24gcGxheXMgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVhc3RpbmcgdHlwZSB1c2VkIGZvciB0aGUgdHdlZW5pbmcgYW5pbWF0aW9uXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBfYW5pbWF0ZVJlZ2lvbkluaXQoZW5kX2Nvb3JkcywgZHVyYXRpb24sIHR5cGUsIGFuaW1hdGlvbl90eXBlKSB7XG4gICAgICAgIC8vbG9nLmluZm8oJ19hbmltYXRlUmVnaW9uSW5pdCBjYWxsZWQsIHNldHRpbmcgdmFycyBhbmQgY2FsbGluZyBfYW5pbWF0ZVJlZ2lvbicpO1xuXG4gICAgICAgIGxldCBkZWx0YV94O1xuICAgICAgICBsZXQgZGVsdGFfeTtcblxuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuXG4gICAgICAgIGlmIChhbmltYXRpb25fdHlwZSA9PSAncG9zaXRpb24nKSB7XG4gICAgICAgICAgICBkZWx0YV94ID0gZW5kX2Nvb3Jkc1swXSAtIHRoaXMuY3VycmVudF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgIGRlbHRhX3kgPSBlbmRfY29vcmRzWzFdIC0gdGhpcy5jdXJyZW50X3Bvc2l0aW9uWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoYW5pbWF0aW9uX3R5cGUgPT0gJ3NpemUnKSB7XG4gICAgICAgICAgICAvL2xvZy5pbmZvKCdpbiB0aGUgc2l6ZSBhbmltYXRpb24gdHl5cGUgY2hvb3NlciBpbml0Jyk7XG4gICAgICAgICAgICBkZWx0YV94ID0gZW5kX2Nvb3Jkc1swXSAtIHRoaXMuY3VycmVudF9zaXplWzBdO1xuICAgICAgICAgICAgZGVsdGFfeSA9IGVuZF9jb29yZHNbMV0gLSB0aGlzLmN1cnJlbnRfc2l6ZVsxXTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2xvZy5kZWJ1Zyh7c3RhcnRUaW1lOiBzdGFydF90aW1lLCBlbmRUaW1lOmVuZF90aW1lLCBkZWx0YVg6ZGVsdGFfeCwgZGVsdGFZOiBkZWx0YV95LCBkdXJhdGlvbjogZHVyYXRpb24sIHR5cGU6IHR5cGUsIGFuaW1hdGlvbl90eXBlOiBhbmltYXRpb25fdHlwZX0pO1xuXG4gICAgICAgIHRoaXMuX2FuaW1hdGVSZWdpb24oZW5kX2Nvb3JkcyxkZWx0YV94LGRlbHRhX3ksc3RhcnRfdGltZSxlbmRfdGltZSxkdXJhdGlvbix0eXBlLCBhbmltYXRpb25fdHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFpbiBhbmltYXRpb24gbG9vcCwgY29tcHV0ZXMgdGhlIG5leHQgW3gseV0gdmFsdWVzIG9mIHRoZSBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbmRfY29vcmRzIFt4LHldIGxpc3Qgb2YgdGhlIGVuZCBjb29yZGluYXRlcyB5b3Ugd2FudCB0aGUgcmVnaW9uIHRvIG1vdmUgdG9cbiAgICAgKiBAcGFyYW0ge0ludH0gY1ggVGhlIHRvdGFsIGRlbHRhIG9mIHRoZSBYIGNvb3JkaW5hdGUgZnJvbSBiZWdpbm5pbmcgcG9zaXRpb24gdG8gZW5kIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtJbnR9IGNZIFRoZSB0b3RhbCBkZWx0YSBvZiB0aGVZIGNvb3JkaW5hdGUgZnJvbSBiZWdpbm5pbmcgcG9zaXRpb24gdG8gZW5kIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtEYXRlVGltZX0gc3RhcnRfdGltZSBBIGRhdGV0aW1lIHRpbWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtJbnR8RGF0ZVRpbWV9IGVuZF90aW1lIEEgaW50IG9yIGRheXRpbWUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0ge0ludH0gZCBUaGUgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZWFzdGluZyB0eXBlIHVzZWQgZm9yIHRoZSB0d2VlbmluZyBhbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIF9hbmltYXRlUmVnaW9uKGVuZF9jb29yZHMsY1gsY1ksc3RhcnRfdGltZSxlbmRfdGltZSxkLHR5cGUsIGFuaW1hdGlvbl90eXBlKSB7XG4gICAgICAgIC8vbG9nLmluZm8oJ0luc2lkZSBtYWluIGFuaW1hdGlvbiBsb29wJyk7XG5cbiAgICAgICAgbGV0IG5leHRfcG9zX3g7XG4gICAgICAgIGxldCBuZXh0X3Bvc195O1xuICAgICAgICBsZXQgbmV4dF9zaXplX3g7XG4gICAgICAgIGxldCBuZXh0X3NpemVfeTtcblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG5cbiAgICAgICAgLy9sb2cuZGVidWcoJ05vdzogJyxub3csICcgVDogJyx0KTtcblxuICAgICAgICAvL2xvZy5kZWJ1Zyh7Y3g6IGNYLCBjeTogY1ksIHN0YXJ0VGltZTogc3RhcnRfdGltZSwgZW5kVGltZTogZW5kX3RpbWUsIGR1cmF0aW9uOiBkLCB0eXBlOnR5cGV9KVxuXG4gICAgICAgIGlmIChub3cgPCBlbmRfdGltZSkge1xuXG4gICAgICAgICAgICAvL2xvZy5pbmZvKCdpbnNpZGUgaWYgbG9vcCcpO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl90eXBlID09ICdwb3NpdGlvbicpIHtcbiAgICAgICAgICAgICAgICBuZXh0X3Bvc194ID0gZWFzaW5nX3R5cGVzW3R5cGVdKHQsdGhpcy5jdXJyZW50X3Bvc2l0aW9uWzBdLGNYLGQpO1xuICAgICAgICAgICAgICAgIG5leHRfcG9zX3kgPSBlYXNpbmdfdHlwZXNbdHlwZV0odCx0aGlzLmN1cnJlbnRfcG9zaXRpb25bMV0sY1ksZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlWChuZXh0X3Bvc194KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlWShuZXh0X3Bvc195KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoYW5pbWF0aW9uX3R5cGUgPT0gJ3NpemUnKSB7XG4gICAgICAgICAgICAgICAgbmV4dF9zaXplX3ggPSBlYXNpbmdfdHlwZXNbdHlwZV0odCx0aGlzLmN1cnJlbnRfc2l6ZVswXSxjWCxkKTtcbiAgICAgICAgICAgICAgICBuZXh0X3NpemVfeSA9IGVhc2luZ190eXBlc1t0eXBlXSh0LHRoaXMuY3VycmVudF9zaXplWzFdLGNZLGQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplWChuZXh0X3NpemVfeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplWShuZXh0X3NpemVfeSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYW5pbWF0ZVJlZ2lvbihlbmRfY29vcmRzLGNYLGNZLHN0YXJ0X3RpbWUsZW5kX3RpbWUsZCx0eXBlLCBhbmltYXRpb25fdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2xvZy5kZWJ1ZygnaW5zaWRlIGVsc2UsIGFsbW9zdCBvdmVyJyk7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb25fdHlwZSA9PSAncG9zaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVgoZW5kX2Nvb3Jkc1swXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVkoZW5kX2Nvb3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3Bvc2l0aW9uWzBdID0gZW5kX2Nvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfcG9zaXRpb25bMV0gPSBlbmRfY29vcmRzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChhbmltYXRpb25fdHlwZSA9PSAnc2l6ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVYKGVuZF9jb29yZHNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVkoZW5kX2Nvb3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3NpemVbMF0gPSBlbmRfY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9zaXplWzFdID0gZW5kX2Nvb3Jkc1sxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBGV0kgfSBmcm9tIFwiLi9md2lfY29yZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhdGljIFBsYXlDb250ZW50KG5hbWUsIHJlZ2lvbikge1xuICAgICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuUGxheUNvbnRlbnQoXCInICsgbmFtZSArICdcIiwgXCInICsgcmVnaW9uICsgJ1wiKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBQb3BDb250ZW50KCkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlBvcENvbnRlbnQoKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBQdXNoQ29udGVudChjb250ZW50LCByZWdpb24sIHBhcmFtcyA9IHVuZGVmaW5lZCkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlB1c2hDb250ZW50KCcgKyBjb250ZW50ICsgJywgJyArIHJlZ2lvbiArIChwYXJhbXMgIT0gdW5kZWZpbmVkID8gJywgJyArIHBhcmFtcyA6ICcnKSArICcpOycpO1xuICB9XG5cbiAgc3RhdGljIFJlc3RhcnQoKSB7XG4gICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuUmVzdGFydCgpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldENhblNpemUocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0Q2FuU2l6ZSgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgdmFsdWUgKycpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldENhbkRyYWcocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0Q2FuRHJhZygnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgdmFsdWUgKycpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldENhblJvdGF0ZShyZWdpb25fbmFtZSwgdmFsdWUpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRDYW5Sb3RhdGUoJyArIHJlZ2lvbl9uYW1lICsgJywgJyArIHZhbHVlICsnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBTZXRMZWZ0KHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlNldExlZnQoJysgcmVnaW9uX25hbWUgKyAnLCcgKyB2YWx1ZSArICcpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldFRvcChyZWdpb25fbmFtZSwgdmFsdWUpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRUb3AoJysgcmVnaW9uX25hbWUgKyAnLCcgKyB2YWx1ZSArICcpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldFdpZHRoKHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlNldFdpZHRoKCcrIHJlZ2lvbl9uYW1lICsgJywnICsgdmFsdWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBTZXRIZWlnaHQocmVnaW9uX25hbWUsIHZhbHVlKSB7XG4gICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0SGVpZ2h0KCcrIHJlZ2lvbl9uYW1lICsgJywnICsgdmFsdWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBTZXRBbmdsZShyZWdpb25fbmFtZSwgdmFsdWUpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRBbmdsZSgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgdmFsdWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBDbGVhckxlZnQocmVnaW9uX25hbWUpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5DbGVhckxlZnQoJysgcmVnaW9uX25hbWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBDbGVhclRvcChyZWdpb25fbmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyVG9wKCcrIHJlZ2lvbl9uYW1lICsgJyk7Jyk7XG4gIH1cblxuICBzdGF0aWMgQ2xlYXJXaWR0aChyZWdpb25fbmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyV2lkdGgoJysgcmVnaW9uX25hbWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBDbGVhckhlaWdodChyZWdpb25fbmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFySGVpZ2h0KCcrIHJlZ2lvbl9uYW1lICsgJyk7Jyk7XG4gIH1cblxuICBzdGF0aWMgQ2xlYXJBbmdsZShyZWdpb25fbmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyQW5nbGUoJyArIHJlZ2lvbl9uYW1lICsgJyk7Jyk7XG4gIH1cblxuICBzdGF0aWMgU2V0WkluZGV4KHJlZ2lvbl9uYW1lLCB2YWx1ZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLlNldFpJbmRleCgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgdmFsdWUgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBDbGVhclpJbmRleChyZWdpb25fbmFtZSkge1xuICAgIEZXSS5SdW5TY3JpcHQoJ1RlbXBsYXRlLkNsZWFyWkluZGV4KCcgKyByZWdpb25fbmFtZSArICcpOycpO1xuICB9XG5cbiAgc3RhdGljIFNldExpbmVhclZlbG9jaXR5KHJlZ2lvbl9uYW1lLCBWeCA9ICcqJywgVnkgPSAnKicpIHtcbiAgICBGV0kuUnVuU2NyaXB0KCdUZW1wbGF0ZS5TZXRMaW5lYXJWZWxvY2l0eSgnICsgcmVnaW9uX25hbWUgKyAnLCAnICsgVnggKyAnLCAnICsgVnkgKyAnKTsnKTtcbiAgfVxuXG4gIHN0YXRpYyBTZXRBbmd1bGFyVmVsb2NpdHkocmVnaW9uX25hbWUsIG9tZWdhKSB7XG4gICAgRldJLlJ1blNjcmlwdCgnVGVtcGxhdGUuU2V0QW5ndWxhclZlbG9jaXR5KCcgKyByZWdpb25fbmFtZSArICcsICcgKyBvbWVnYSArICcpOycpO1xuICB9XG59Il19
