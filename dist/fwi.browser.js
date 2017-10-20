var fwi = (function (exports) {
'use strict';

// Load the FWI Javascript base:
var FWI$1 = window.frameElement ? window.frameElement.parentNode.FWI : window.external;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
		get: function get$$1() {
			return _content_name.get(this);
		}
	}, {
		key: 'region_name',
		get: function get$$1() {
			return _region_name.get(this);
		}
	}], [{
		key: 'GetDetails',
		value: function GetDetails(name) {
			return FWI$1.getURL('content://' + name);
		}
	}, {
		key: 'Print',
		value: function Print(region_name, parameters) {
			FWI$1.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
		}
	}, {
		key: 'Seek',
		value: function Seek(region_name, direction) {
			var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			FWI$1.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
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

					FWI$1.RunScript('Content[' + region_name + '].SetArgument(' + k + ', ' + v + ');');
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

					FWI$1.RunScript('Content[' + region_name + '].ShowRoute(' + k + ', ' + v + ');');
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
			FWI$1.RunScript('Content.Url(' + url + ');');
		}
	}, {
		key: 'UrlAsync',
		value: function UrlAsync(url) {
			FWI$1.RunScript('Content.UrlAsync(' + url + ');');
		}
	}, {
		key: 'Pause',
		value: function Pause(region_name) {
			FWI$1.RunScript('Content[' + region_name + '].Pause();');
		}
	}, {
		key: 'Play',
		value: function Play(region_name) {
			FWI$1.RunScript('Content[' + region_name + '].Play();');
		}
	}, {
		key: 'SeekBy',
		value: function SeekBy(region_name, value) {
			FWI$1.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
		}
	}, {
		key: 'SeekTo',
		value: function SeekTo(region_name, value) {
			FWI$1.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
		}
	}, {
		key: 'Resume',
		value: function Resume(region_name) {
			FWI$1.RunScript('Content[' + region_name + '].Resume();');
		}
	}, {
		key: 'SetBalance',
		value: function SetBalance(region_name, balance) {
			FWI$1.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
		}
	}, {
		key: 'SetVolume',
		value: function SetVolume(region_name, volume) {
			FWI$1.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
		}
	}, {
		key: 'Stop',
		value: function Stop(region_name) {
			FWI$1.RunScript('Content[' + region_name + '].Stop();');
		}
	}, {
		key: 'HighlightRows',
		value: function HighlightRows(region_name, row_list) {
			FWI$1.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
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

var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck$1(this, Player);
  }

  /**
   * Retrieves the value for a single CM variable.
   * @param {String} name A variable name to collect
   * @return {Number|String} An appropriately casted value from the variable
   */


  _createClass$1(Player, null, [{
    key: 'GetVariable',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', new Promise(function (resolve) {
                  FWI$1.MarkupValue('{&var:' + name + '}');
                  resolve();
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetVariable(_x) {
        return _ref.apply(this, arguments);
      }

      return GetVariable;
    }()

    /**
     * Retrieves values for multiple CM variables.
     * @param {Array} nameArray An array of variable names to collect
     * @return {Array} An array of values that correspond to the requested variables
     */

  }, {
    key: 'GetManyVariables',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(nameArray) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new Promise(function (resolve) {
                  var values = [];
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = nameArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _ref3 = _step.value;

                      var _ref4 = _slicedToArray$1(_ref3, 2);

                      var k = _ref4[0];
                      var v = _ref4[1];

                      values.push(FWI$1.MarkupValue('{&var:' + v + '}'));
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

                  return resolve(values);
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetManyVariables(_x2) {
        return _ref2.apply(this, arguments);
      }

      return GetManyVariables;
    }()

    /**
     * Sets a single variable back in CM.
     * @param {String} name The name of the variable to set
     * @param {String} value The value of the variable to set
     * @return {Void}
     */

  }, {
    key: 'SetVariable',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name, value) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new Promise(function (resolve) {
                  FWI$1.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
                  resolve();
                }));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function SetVariable(_x3, _x4) {
        return _ref5.apply(this, arguments);
      }

      return SetVariable;
    }()

    /**
     * Sets multiple variables back in CM.
     * @param {Object} keyValueDict An object that defines key/value pairs to use
     * @return {Void}
     */

  }, {
    key: 'SetManyVariables',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(keyValueDict) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', new Promise(function (resolve) {
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = keyValueDict[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _ref7 = _step2.value;

                      var _ref8 = _slicedToArray$1(_ref7, 2);

                      var k = _ref8[0];
                      var v = _ref8[1];

                      FWI$1.RunScript('Player.SetVariable(' + k + ',' + v + ');');
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

                  
                }));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function SetManyVariables(_x5) {
        return _ref6.apply(this, arguments);
      }

      return SetManyVariables;
    }()

    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */

  }, {
    key: 'SetLanguage',
    value: function SetLanguage(languageCode) {
      FWI$1.RunScript('Player.SetLanguage(' + languageCode + ');');
    }

    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */

  }, {
    key: 'ToggleVariable',
    value: function ToggleVariable(name) {
      FWI$1.RunScript('Player.ToggleVariable(' + name + ');');
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
      FWI$1.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
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
          var _ref9 = _step3.value;

          var _ref10 = _slicedToArray$1(_ref9, 2);

          var k = _ref10[0];
          var v = _ref10[1];

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

      FWI$1.RunScript(command);
    }

    /*
     * Resets the idle timer
     * @return {Void}
     */

  }, {
    key: 'ResetIdleTimer',
    value: function ResetIdleTimer() {
      FWI$1.RunScript('Player.ResetIdleTimer();');
    }

    /*
     * Restarts the player
     * @return {Void}
     */

  }, {
    key: 'Restart',
    value: function Restart() {
      FWI$1.RunScript('Player.Restart();');
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
          var _ref11 = _step4.value;

          var _ref12 = _slicedToArray$1(_ref11, 2);

          var k = _ref12[0];
          var v = _ref12[1];

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

      

      command += ');';

      FWI$1.RunScript(command);
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
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = o[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _ref13 = _step5.value;

          var _ref14 = _slicedToArray$1(_ref13, 2);

          var k = _ref14[0];
          var v = _ref14[1];

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

      

      command += ');';

      FWI$1.RunScript(command);
    }

    /*
     * Unsets a variable
     * @param {String} name Variable name you wish to clear
     * @return {Void}
     */

  }, {
    key: 'UnsetVariable',
    value: function UnsetVariable(name) {
      FWI$1.RunScript('Player.UnsetVariable(' + name + ');');
    }
  }]);

  return Player;
}();

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator$1(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = function () {
  function Template() {
    _classCallCheck$3(this, Template);
  }

  _createClass$3(Template, null, [{
    key: 'PlayContent',
    value: function () {
      var _ref = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, region) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', new Promise(function (resolve) {
                  FWI$1.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
                  resolve();
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function PlayContent(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return PlayContent;
    }()
  }, {
    key: 'PopContent',
    value: function PopContent() {
      FWI$1.RunScript('Template.PopContent();');
    }
  }, {
    key: 'PushContent',
    value: function PushContent(content, region) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      FWI$1.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
    }
  }, {
    key: 'Restart',
    value: function Restart() {
      FWI$1.RunScript('Template.Restart();');
    }
  }, {
    key: 'SetCanSize',
    value: function SetCanSize(region_name, value) {
      FWI$1.RunScript('Template.SetCanSize(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetCanDrag',
    value: function SetCanDrag(region_name, value) {
      FWI$1.RunScript('Template.SetCanDrag(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetCanRotate',
    value: function SetCanRotate(region_name, value) {
      FWI$1.RunScript('Template.SetCanRotate(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'SetLeft',
    value: function SetLeft(region_name, value) {
      FWI$1.RunScript('Template.SetLeft(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetTop',
    value: function SetTop(region_name, value) {
      FWI$1.RunScript('Template.SetTop(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetWidth',
    value: function SetWidth(region_name, value) {
      FWI$1.RunScript('Template.SetWidth(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetHeight',
    value: function SetHeight(region_name, value) {
      FWI$1.RunScript('Template.SetHeight(' + region_name + ',' + value + ');');
    }
  }, {
    key: 'SetAngle',
    value: function SetAngle(region_name, value) {
      FWI$1.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'ClearLeft',
    value: function ClearLeft(region_name) {
      FWI$1.RunScript('Template.ClearLeft(' + region_name + ');');
    }
  }, {
    key: 'ClearTop',
    value: function ClearTop(region_name) {
      FWI$1.RunScript('Template.ClearTop(' + region_name + ');');
    }
  }, {
    key: 'ClearWidth',
    value: function ClearWidth(region_name) {
      FWI$1.RunScript('Template.ClearWidth(' + region_name + ');');
    }
  }, {
    key: 'ClearHeight',
    value: function ClearHeight(region_name) {
      FWI$1.RunScript('Template.ClearHeight(' + region_name + ');');
    }
  }, {
    key: 'ClearAngle',
    value: function ClearAngle(region_name) {
      FWI$1.RunScript('Template.ClearAngle(' + region_name + ');');
    }
  }, {
    key: 'SetZIndex',
    value: function SetZIndex(region_name, value) {
      FWI$1.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
    }
  }, {
    key: 'ClearZIndex',
    value: function ClearZIndex(region_name) {
      FWI$1.RunScript('Template.ClearZIndex(' + region_name + ');');
    }
  }, {
    key: 'SetLinearVelocity',
    value: function SetLinearVelocity(region_name) {
      var Vx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      var Vy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

      FWI$1.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
    }
  }, {
    key: 'SetAngularVelocity',
    value: function SetAngularVelocity(region_name, omega) {
      FWI$1.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
    }
  }]);

  return Template;
}();

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        _classCallCheck$2(this, Region);

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


    _createClass$2(Region, [{
        key: "resetPosition",


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
        key: "resetSize",
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
            Template.SetLeft(this.region_name, value);
        }

        /*
         * Sets the new vertical position of the region
         * @param {Int} value Vertical position in pixels from top of the screen
         * @return {Void}
         */

    }, {
        key: "_moveY",
        value: function _moveY(value) {
            Template.SetTop(this.region_name, value);
        }

        /*
         * Sets the new width of the region
         * @param {Int} value Width in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeX",
        value: function _resizeX(value) {
            Template.SetWidth(this.region_name, value);
        }

        /*
         * Sets the new height of the region
         * @param {Int} value Height in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeY",
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

            return this._animateRegionInit(end_size, duration, type, 'size');
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
            var _this = this;

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
            }

            var promise = new Promise(function (resolve) {
                _this._animateRegion(end_coords, delta_x, delta_y, start_time, end_time, duration, type, animation_type, resolve);
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

    }, {
        key: "_animateRegion",
        value: function _animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve) {
            var next_pos_x = void 0;
            var next_pos_y = void 0;
            var next_size_x = void 0;
            var next_size_y = void 0;

            var now = new Date().getTime();
            var t = now - start_time;

            if (now < end_time) {

                //log.info('inside if loop');
                if (animation_type == 'position') {
                    next_pos_x = easingTypes[type](t, this.current_position[0], cX, d);
                    next_pos_y = easingTypes[type](t, this.current_position[1], cY, d);

                    this._moveX(next_pos_x);
                    this._moveY(next_pos_y);
                } else if (animation_type == 'size') {
                    next_size_x = easingTypes[type](t, this.current_size[0], cX, d);
                    next_size_y = easingTypes[type](t, this.current_size[1], cY, d);

                    this._resizeX(next_size_x);
                    this._resizeY(next_size_y);
                }

                var self = this;

                var callback = function callback() {
                    self._animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve);
                };

                window.requestAnimationFrame(callback);
            } else {

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
                resolve();
            }
        }
    }, {
        key: "originPosition",


        /*
         * getter for the original position
         * @return {Array} Array of original [x,y] position
         */
        get: function get$$1() {
            return _origin_position.get(this);
        }

        /*
         * getter for the original size
         * @return {Array} Array of original [x,y] size
         */

    }, {
        key: "originSize",
        get: function get$$1() {
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

exports.Content = Content;
exports.easingTypes = easingTypes;
exports.FWI = FWI$1;
exports.Player = Player;
exports.Region = Region;
exports.Template = Template;

return exports;

}({}));
