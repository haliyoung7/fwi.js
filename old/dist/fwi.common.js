'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Load the FWI Javascript base depending on if you are using a browser or windows player.
 */
var FWI$1 = window.frameElement ? window.frameElement.parentNode.FWI : window.external;

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 * These are here to store information about multiple content and regions names
 */
var _content_name = new WeakMap();
var _region_name = new WeakMap();

/**
 * This is the content class it can be used in two ways.  You can access the static methods if you just need
 * a one off operation, or you can create a content item to execute multiple operations on it.
 *
 * Example:
 * ```
 * var item = new Content('Places_Live_Data', 'Live_Data_Region);
 *
 * item.getDetails()
 *
 * item.play()
 * ```
 * or
 * ```
 * var url_contents = Content.Url('https://example.com');
 * ```
 */
var Content = function () {

  /**
   * Constructor that accespts the content items name and the region the content item is playing in.
   * @param {String} name Name of the content item
   * @param {String} region_name Name of the region the content item resides in
   * @return {Void}
   */
  function Content(name, region_name) {
    classCallCheck(this, Content);

    _content_name.set(this, name);
    _region_name.set(this, region_name);
  }

  /**
   * Returns the name of the content item
   * @return {String}
   */


  createClass(Content, [{
    key: 'getDetails',


    /**
     * Returns the content items details, in the case of the live data, it's the data itself.
     * @return {String}
     */
    value: function getDetails() {
      return Content.GetDetails(this.name);
    }

    /**
     * Prints the regions content item
     * @param {String} parameters Printing parameters
     * @return {Void}
     */

  }, {
    key: 'print',
    value: function print(parameters) {
      Content.Print(this.region_name, parameters);
    }

    /**
     * Play the next item in the region
     * @param {String} direction Forward/Backward
     * @param {Boolean} wrap True/False if it should wrap when it reaches the start/end.
     * @return {Void}
     */

  }, {
    key: 'seek',
    value: function seek(direction) {
      var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      Content.Seek(this.region_name, direction, wrap);
    }

    /**
     * Sets arguments on currently playing content items
     * @param {Object} o Object that contains a single object of key pair values for content arguments.
     * @return {Void}
     */

  }, {
    key: 'setArgument',
    value: function setArgument(o) {
      Content.SetArgument(this.region_name, o);
    }

    /**
     * Shows the route on a wayfinding contnet item
     * @param {Object} o Single key pair object that takes a Location=Location type thing
     * @return {Void}
     */

  }, {
    key: 'showRoute',
    value: function showRoute(o) {
      Content.ShowRoute(this.region_name, o);
    }

    /**
     * Pauses a video if it is playing in a region.
     * @return {Void}
     */

  }, {
    key: 'pause',
    value: function pause() {
      Content.Pause(this.region_name);
    }

    /**
     * Plays a video if it is playing in a region.
     * @return {Void}
     */

  }, {
    key: 'play',
    value: function play() {
      Content.Play(this.region_name);
    }

    /**
     * Seeks by a  a particular part of a video if it is playing in a region.
     * @param {String} value Timecode value to seek through the video by.
     * @return {Void}
     */

  }, {
    key: 'seekBy',
    value: function seekBy(value) {
      Content.SeekBy(this.region_name, value);
    }

    /**
     * Seeks to a  a particular part of a video if it is playing in a region.
     * @param {String} value Timecode value to seek through the video too.
     * @return {Void}
     */

  }, {
    key: 'seekTo',
    value: function seekTo(value) {
      Content.SeekTo(this.region_name, value);
    }

    /**
     * Resumes a paused video if it is playing in a region.
     * @return {Void}
     */

  }, {
    key: 'resume',
    value: function resume() {
      Content.Resume(this.region_name);
    }

    /**
     * Sets the left right balance of the audio in a video
     * @param {Number} balance Number representing the left right balance.
     * @return {Void}
     */

  }, {
    key: 'setBalance',
    value: function setBalance(balance) {
      Content.SetBalance(this.region_name, balance);
    }

    /**
     * Sets the audio for a video.
     * @param {Number} volume Number representing the volume
     * @return {Void}
     */

  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      Content.SetVolume(this.region_name, volume);
    }

    /**
     * Stops a video in a region if it's scheduled
     * @return {Void}
     */

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

    /**
     * Returns the name of the content item
     * @return {String}
     */

  }, {
    key: 'region_name',
    get: function get$$1() {
      return _region_name.get(this);
    }

    /**
     * Returns the content items details, in the case of the live data, it's the data itself.
     * @param {String} name Name of the content item
     * @return {String}
     */

  }], [{
    key: 'GetDetails',
    value: function GetDetails(name) {
      return FWI$1.GetUrl('content://' + name);
    }

    /**
     * Prints the regions content item
     * @param {String} region_name Name of the region.
     * @param {String} parameters Printing parameters
     * @return {Void}
     */

  }, {
    key: 'Print',
    value: function Print(region_name, parameters) {
      FWI$1.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
    }

    /**
     * Play the next item in the region
     * @param {String} region_name Name of the region
     * @param {String} direction Forward/Backward
     * @param {Boolean} wrap True/False if it should wrap when it reaches the start/end.
     * @return {Void}
     */

  }, {
    key: 'Seek',
    value: function Seek(region_name, direction) {
      var wrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      FWI$1.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
    }

    /**
     * Sets arguments on currently playing content items
     * @param {String} region_name Name of the region
     * @param {Object} o Object that contains a single object of key pair values for content arguments.
     * @return {Void}
     */

  }, {
    key: 'SetArgument',
    value: function SetArgument(region_name, o) {
      FWI$1.RunScript('Content[' + region_name + '].SetArgument(' + o.keys[0] + ', ' + o.values[0] + ');');
    }

    /**
     * Shows the route on a wayfinding contnet item
     * @param {String} region name Name of the content item
     * @param {Object} o Single key pair object that takes a Location=Location type thing
     * @return {Void}
     */

  }, {
    key: 'ShowRoute',
    value: function ShowRoute(region_name, o) {
      FWI$1.RunScript('Content[' + region_name + '].ShowRoute(' + o.keys[0] + '=' + o.values[0] + ');');
    }

    /**
     * Gets the contents of a provided URL.  Blocking operation, CM will freeze while it gets the url contents.
     * @param {String} url www.gooogle.com or www.example.com
     * @return {Void}
     */

  }, {
    key: 'Url',
    value: function Url(url) {
      return FWI$1.RunScript('Content.Url(' + url + ');');
    }

    /**
     * Gets the contents of a provided URL.  Non-blocking operation.  Will return contents to variable once operation is complete.
     * @param {String} url Name of the content item
     * @return {Void}
     */

  }, {
    key: 'UrlAsync',
    value: function UrlAsync(url) {
      return FWI$1.RunScript('Content.UrlAsync(' + url + ');');
    }

    /**
     * Pauses a video if it is playing in a region.
     * @param {String} region_name Name of the region that contains the video
     * @return {Void}
     */

  }, {
    key: 'Pause',
    value: function Pause(region_name) {
      FWI$1.RunScript('Content[' + region_name + '].Pause();');
    }

    /**
     * Plays a video if it is playing in a region.
     * @param {String} region_name Name of the region that contains the video
     * @return {Void}
     */

  }, {
    key: 'Play',
    value: function Play(region_name) {
      FWI$1.RunScript('Content[' + region_name + '].Play();');
    }

    /**
     * Seeks by a  a particular part of a video if it is playing in a region.
     * @param {String} region_name Name of the region that contains the video
     * @param {String} value Timecode value to seek through the video by.
     * @return {Void}
     */

  }, {
    key: 'SeekBy',
    value: function SeekBy(region_name, value) {
      FWI$1.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
    }

    /**
     * Seeks to a  a particular part of a video if it is playing in a region.
     * @param {String} region_name Name of the region that contains the video
     * @param {String} value Timecode value to seek through the video too.
     * @return {Void}
     */

  }, {
    key: 'SeekTo',
    value: function SeekTo(region_name, value) {
      FWI$1.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
    }

    /**
     * Resumes a paused video if it is playing in a region.
     * @param {String} region_name Name of the region that contains the video
     * @return {Void}
     */

  }, {
    key: 'Resume',
    value: function Resume(region_name) {
      FWI$1.RunScript('Content[' + region_name + '].Resume();');
    }

    /**
     * Sets the left right balance of the audio in a video
     * @param {String} region_name Name of the region that contains the video
     * @param {Number} balance Number representing the left right balance.
     * @return {Void}
     */

  }, {
    key: 'SetBalance',
    value: function SetBalance(region_name, balance) {
      FWI$1.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
    }

    /**
     * Sets the audio for a video.
     * @param {String} region_name Name of the region that contains the video
     * @param {Number} volume Number representing the volume
     * @return {Void}
     */

  }, {
    key: 'SetVolume',
    value: function SetVolume(region_name, volume) {
      FWI$1.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
    }

    /**
     * Stops a video in a region if it's scheduled
     * @param {String} region_name Name of the region that contains the video
     * @return {Void}
     */

  }, {
    key: 'Stop',
    value: function Stop(region_name) {
      FWI$1.RunScript('Content[' + region_name + '].Stop();');
    }

    /**
     * Highlights one or multiple rows in live data
     * @param {String} region_name Name of the region that contains the video
     * @param {String} row_list Comma seperated list of rows to highlight.
     * @return {Void}
     */

  }, {
    key: 'HighlightRows',
    value: function HighlightRows(region_name, row_list) {
      FWI$1.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
    }
  }]);
  return Content;
}();

/**
 * Easing types are different equations to determine the path of a region tween.
 * They can be used in resizes or moveTo scripts.  All of them follow the same input formula.
 * @param {DateTime|Int} t The amount of time that has passed since the animation began.
 * @param {Int|Float} b The current position of the x or y point of the top left corner of the region
 * @param {Int|Float} c The total delta for the x or y point from beginning position to the end position
 * @param {Int} d The total duration of the animation
 * @return {Float} The next position of the x or y point.
 */
var easingTypes = {

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

/**
 * This is the helpers class.  It will grow over time.  It contains methods
 * that are designed to help aid certain repetitive tasks.
 */
var Helpers = function () {
	function Helpers() {
		classCallCheck(this, Helpers);
	}

	/**
  * This helper method is designed to split a color into it's opacity.
  * This is needed because most color libraries don't store their alpha information
  * in the first two digits of the hex code!
  * @param {String} color 8 digit hex color that our software uses
  * @returns {Object}
  */


	createClass(Helpers, null, [{
		key: 'splitColor',
		value: function splitColor(color) {
			var opacity = parseInt('0x' + color.slice(1, 3)) / 255;

			var rgb = '#' + color.slice(3, 9);

			return { 'rgb': rgb, 'opacity': opacity };
		}
	}]);
	return Helpers;
}();

/**
 * This method replaces illegal charecters in the font strings so they aren't
 * inturpreted by javascript!
 */
String.prototype.ReplaceIllegalChars = function (prefix) {
  //This method replaces { } and , with variable names so CM can read the JSON properly
  var OutputString = this.replace(/{/g, "{&lb");
  OutputString = OutputString.replace(/}/g, "&rb}");
  OutputString = OutputString.replace(/,/g, "{&var:" + prefix + "_comma}");
  OutputString = OutputString.replace(/{&lb/g, "{&lb}");
  OutputString = OutputString.replace(/&rb}/g, "{&rb}");
  return OutputString;
};

/**
 * This adds a startsWith method to all strings to see if they start with a specific prefix.
 */
String.prototype.startsWith = function (prefix) {
  return this.slice(0, prefix.length) == prefix;
};

/**
 * This is the Player class.  It will probably be the most used class.  It contains all player functions.
 * It should be noted that all methods in this class are static so there is no need for the `new` keyword.
 *
 * Example:
 * ```
 * Player.SetVariable('foo', 'bar');
 * Player.GetVariable('foo');
 * 'bar'
 * ```
 */
var Player = function () {
  function Player() {
    classCallCheck(this, Player);
  }

  /**
   * Retrieves the value for a single CM variable.
   * @param {String} name A variable name to collect
   * @return {Number|String} An appropriately casted value from the variable
   */


  createClass(Player, null, [{
    key: "GetVariable",
    value: function GetVariable(name) {
      return FWI$1.MarkupValue('{&var:' + name + '}') != '' ? FWI$1.MarkupValue('{&var:' + name + '}') : false;
    }
  }, {
    key: "GetFontVariable",


    /**
     * Retrieves the value for a single CM font variable.
     * @param {String} name A variable name to collect
     * @return {Object} Dictionary of the font json
     */
    value: function GetFontVariable(name) {
      var font_var = Player.GetVariable(name);
      return JSON.parse(font_var);
    }

    /**
     * Retrieves values for multiple CM variables.
     * @param {Array} nameArray An array of variable names to collect
     * @return {Array} An array of values that correspond to the requested variables
     */

  }, {
    key: "GetManyVariables",
    value: function GetManyVariables(nameArray) {
      var values = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray(_ref, 2);

          var k = _ref2[0];
          var v = _ref2[1];

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

      return values;
    }

    /**
     * Sets  single variable back in CM.
     * @param {String} name The name of the variable to set
     * @param {String} value The value of the variable to set
     * @return {Void}
     */

  }, {
    key: "SetVariable",
    value: function SetVariable(name, value) {
      FWI$1.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
    }

    /**
     * Sets a single font variable back in CM.
     * @param {String} name The name of the variable to set
     * @param {Object} value The font dictionary object
     * @return {Void}
     */

  }, {
    key: "SetFontVariable",
    value: function SetFontVariable(name, value, prefix) {
      Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars());
    }

    /**
     * Sets multiple variables back in CM.
     * @param {Object} keyValueDict An object that defines key/value pairs to use
     * @return {Void}
     */

  }, {
    key: "SetManyVariables",
    value: function SetManyVariables(keyValueDict) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = keyValueDict[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray(_ref3, 2);

          var k = _ref4[0];
          var v = _ref4[1];

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

      
    }

    /**
     * Creates a new dictionary with a font variable tempalte
     * @return {Object} Font dictionary template
     */

  }, {
    key: "CreateFontVariable",
    value: function CreateFontVariable() {

      var font_dict = {
        fontFamily: "Arial",
        fontSize: 9.000000E+000,
        fontStretch: null,
        fontStyle: null,
        fontWeight: null,
        textDecoration: null,
        fontColor: "#FF000000",
        textAlignment: "TopLeft",
        textAutoSize: false,
        textSizeBehavior: "Fixed",
        fontLeading: 0,
        frame: {
          type: "",
          backgroundColor: "#00424242",
          borderColor: "#008BD5B5"
        }
      };

      return font_dict;
    }

    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */

  }, {
    key: "SetLanguage",
    value: function SetLanguage(languageCode) {
      FWI$1.RunScript('Player.SetLanguage(' + languageCode + ');');
    }

    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */

  }, {
    key: "ToggleVariable",
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
    key: "PlayTemplate",
    value: function PlayTemplate(name, templateIndex) {
      FWI$1.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
    }

    /**
     * Runs a shell command
     * @param {String} command_name The main command, sometimes includes folder path
     * @param {Array} arg_array Array of args to be submitted to the command
     * @return {Void}
     */

  }, {
    key: "Command",
    value: function Command(command_name, arg_array) {
      var command = 'Player.Command(' + command_name;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = arg_array.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref5 = _step3.value;

          var _ref6 = slicedToArray(_ref5, 2);

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

      FWI$1.RunScript(command);
    }

    /**
     * Resets the idle timer
     * @return {Void}
     */

  }, {
    key: "ResetIdleTimer",
    value: function ResetIdleTimer() {
      FWI$1.RunScript('Player.ResetIdleTimer();');
    }

    /**
     * Restarts the player
     * @return {Void}
     */

  }, {
    key: "Restart",
    value: function Restart() {
      FWI$1.RunScript('Player.Restart();');
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
    key: "SendMail",
    value: function SendMail(o) {
      var command = 'Player.SendMail(';

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = o[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref7 = _step4.value;

          var _ref8 = slicedToArray(_ref7, 2);

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

      

      command += ');';

      FWI$1.RunScript(command);
    }

    /**
     * Text-to-speech
     * @param {Obj} o Object that contains parameters from the wiki
     * {
     *   msg: string text_to_speak,
     *   Volume: int volume,
     *   Rate: int rate,
     *   Voice: string voice
     * }
     * @return {Void}
     */

  }, {
    key: "Speak",
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
          var _ref9 = _step5.value;

          var _ref10 = slicedToArray(_ref9, 2);

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

      

      command += ');';

      FWI$1.RunScript(command);
    }

    /**
     * Unsets a variable
     * @param {String} name Variable name you wish to clear
     * @return {Void}
     */

  }, {
    key: "UnsetVariable",
    value: function UnsetVariable(name) {
      FWI$1.RunScript('Player.UnsetVariable(' + name + ');');
    }
  }]);
  return Player;
}();

/**
 * This is the template class.  It contains all of the template functions you'd find in CM.
 * All methods in this class are static so you do not need to use the `new` keyword.
 *
 * Example:
 * ```
 * Template.PlayContent('Foo', 'Bar');
 * ```
 */
var Template = function () {
  function Template() {
    classCallCheck(this, Template);
  }

  /**
   * Plays a piece of content in a region
   * @param {String} name The name of the variable to set
   * @param {String} region The region of the content to play
   * @return {Void}
   */


  createClass(Template, null, [{
    key: 'PlayContent',
    value: function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, region) {
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

    /**
     * Pops a command from the FIFO command stack
     * @return {Void}
     */

  }, {
    key: 'PopContent',
    value: function PopContent() {
      FWI$1.RunScript('Template.PopContent();');
    }

    /**
     * Pushes a command to the FIFO command stack
     * @return {Void}
     */

  }, {
    key: 'PushContent',
    value: function PushContent(content, region) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      FWI$1.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
    }

    /**
     * Restarts the template, be careful!  If you don't have a span region
     * set this will spawn a new process.
     * @return {Void}
     */

  }, {
    key: 'Restart',
    value: function Restart() {
      FWI$1.RunScript('Template.Restart();');
    }

    /**
     * Sets a region property telling it if it can resize or not.
     * @param {String} region_name Name of the region
     * @param {Bool} value True/False if the region can be resized
     * @return {Void}
     */

  }, {
    key: 'SetCanSize',
    value: function SetCanSize(region_name, value) {
      FWI$1.RunScript('Template.SetCanSize(' + region_name + ', ' + value + ');');
    }

    /**
     * Sets a region property telling it if it can be draged around
     * @param {String} region_name Name of the region
     * @param {Boolean} value True/False if the region can be dragged
     * @return {Void}
     */

  }, {
    key: 'SetCanDrag',
    value: function SetCanDrag(region_name, value) {
      FWI$1.RunScript('Template.SetCanDrag(' + region_name + ', ' + value + ');');
    }

    /**
     * Sets a region property telling it if it can be rotated by touch
     * @param {String} region_name Name of the region
     * @param {Boolean} value True/False if the region can be rotated
     * @return {Void}
     */

  }, {
    key: 'SetCanRotate',
    value: function SetCanRotate(region_name, value) {
      FWI$1.RunScript('Template.SetCanRotate(' + region_name + ', ' + value + ');');
    }

    /**
     * Sets the top left point of the region in x axis
     * @param {String} region_name Name of the region
     * @param {Number} value Value of the top left corner of the region in pixels in the x axis
     * @return {Void}
     */

  }, {
    key: 'SetLeft',
    value: function SetLeft(region_name, value) {
      FWI$1.RunScript('Template.SetLeft(' + region_name + ',' + value + ');');
    }

    /**
     * Set the top left point of the region in the Y axis
     * @param {String} region_name Name of the region
     * @param {Number} value Value of the top left corner of the region in pixels in the y axis
     * @return {Void}
     */

  }, {
    key: 'SetTop',
    value: function SetTop(region_name, value) {
      FWI$1.RunScript('Template.SetTop(' + region_name + ',' + value + ');');
    }

    /**
     * Sets the regions width in pixels
     * @param {String} region_name Name of the region
     * @param {Number} value Value of the width of the region in pixels
     * @return {Void}
     */

  }, {
    key: 'SetWidth',
    value: function SetWidth(region_name, value) {
      FWI$1.RunScript('Template.SetWidth(' + region_name + ',' + value + ');');
    }

    /**
     * Sets the regions height in pixels
     * @param {String} region_name Name of the region
     * @param {Number} value Value of the height of the region in pixels
     * @return {Void}
     */

  }, {
    key: 'SetHeight',
    value: function SetHeight(region_name, value) {
      FWI$1.RunScript('Template.SetHeight(' + region_name + ',' + value + ');');
    }
    /**
     * Sets a regions angle in degrees
     * @param {String} region_name Name of the region
     * @param {Number} value Angle of the region in degrees
     * @return {Void}
     */

  }, {
    key: 'SetAngle',
    value: function SetAngle(region_name, value) {
      FWI$1.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
    }

    /**
     * Sets a regions X coordinante
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearLeft',
    value: function ClearLeft(region_name) {
      FWI$1.RunScript('Template.ClearLeft(' + region_name + ');');
    }

    /**
     * Resets a regions Y coordinante
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearTop',
    value: function ClearTop(region_name) {
      FWI$1.RunScript('Template.ClearTop(' + region_name + ');');
    }

    /**
     * Resets the width of the region back to the stored original
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearWidth',
    value: function ClearWidth(region_name) {
      FWI$1.RunScript('Template.ClearWidth(' + region_name + ');');
    }

    /**
     * Resets the regions height
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearHeight',
    value: function ClearHeight(region_name) {
      FWI$1.RunScript('Template.ClearHeight(' + region_name + ');');
    }

    /**
     * Resets a regions angle
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearAngle',
    value: function ClearAngle(region_name) {
      FWI$1.RunScript('Template.ClearAngle(' + region_name + ');');
    }

    /**
     * Sets a regions Z-Index
     * @param {String} region_name Name of the region
     * @param {Number} value Number of the regions z-index
     * @return {Void}
     */

  }, {
    key: 'SetZIndex',
    value: function SetZIndex(region_name, value) {
      FWI$1.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
    }

    /**
     * Resets the Z-Index
     * @param {String} region_name Name of the region
     * @return {Void}
     */

  }, {
    key: 'ClearZIndex',
    value: function ClearZIndex(region_name) {
      FWI$1.RunScript('Template.ClearZIndex(' + region_name + ');');
    }

    /**
     * Sets a regions linear velocity
     * @param {String} region_name Name of the region
     * @param {Number} Vx Velocity of the region in the x axis
     * @param {Number} Vy Velocity of the region in the y axis
     * @return {Void}
     */

  }, {
    key: 'SetLinearVelocity',
    value: function SetLinearVelocity(region_name) {
      var Vx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      var Vy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

      FWI$1.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
    }

    /**
     * Sets a region's angular velocity or rotation
     * @param {String} region_name Name of the region
     * @param {Number} omega Number of degrees per a second
     * @return {Void}
     */

  }, {
    key: 'SetAngularVelocity',
    value: function SetAngularVelocity(region_name, omega) {
      FWI$1.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
    }
  }]);
  return Template;
}();

/**
 * These store information outside of the class for reasons
 */
var _origin_position = new WeakMap();
var _origin_size = new WeakMap();

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
var Region = function () {

    /**
     * The init function creates a new region object to keep track of region specific information
     * like location, template name, region name, etc.
     * @param {String} region_name Name of the region you want to control
     * @param {String} template_name Name of the containing template
     * @param {Array} origin_xy Array of the regions' starting top left coordinates, [x,y]
     * @param {Array} origin_size Array of the regions' size [x,y]
     * @return {Object} New region object
     */
    function Region(region_name, template_name, origin_position, origin_size) {
        classCallCheck(this, Region);

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


    createClass(Region, [{
        key: "resetPosition",


        /**
         * Resets the position of the region to the original
         * @return {Void}
         */
        value: function resetPosition() {
            Template.ClearLeft(this.region_name);
            Template.ClearTop(this.region_name);
            this.current_position = originPosition;
        }

        /**
         * Resets the size of the region to the original
         * @return {Void}
         */

    }, {
        key: "resetSize",
        value: function resetSize() {
            Template.ClearHeight(this.region_name);
            Template.ClearWidth(this.region_name);
            this.current_size = originSize;
        }

        /**
         * bound seek method with region name automatially given
         * see Region.Seek for more
         */

    }, {
        key: "seek",
        value: function seek(direction) {
            var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            Region.Seek(this.region_name, direction, wrap);
        }

        /**
         * Sets the new horizontal position of the region
         * @param {Int} value Horizontal position in pixels from left of the screen
         * @return {Void}
         */

    }, {
        key: "_moveX",
        value: function _moveX(value) {
            Template.SetLeft(this.region_name, value);
            this.current_position[0] = value;
        }

        /**
         * Sets the new vertical position of the region
         * @param {Int} value Vertical position in pixels from top of the screen
         * @return {Void}
         */

    }, {
        key: "_moveY",
        value: function _moveY(value) {
            Template.SetTop(this.region_name, value);
            this.current_position[1] = value;
        }

        /**
         * Sets the new width of the region
         * @param {Int} value Width in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeX",
        value: function _resizeX(value) {
            Template.SetWidth(this.region_name, value);
            this.current_size[0] = value;
        }

        /**
         * Sets the new height of the region
         * @param {Int} value Height in pixels
         * @return {Void}
         */

    }, {
        key: "_resizeY",
        value: function _resizeY(value) {
            Template.SetHeight(this.region_name, value);
            this.current_position[1] = value;
        }
    }, {
        key: "_resizeXCenter",
        value: function _resizeXCenter(deltaSize, deltaPos) {
            Template.SetWidth(this.region_name, deltaSize);
            Template.SetLeft(this.region_name, deltaPos);
            this.current_size[0] = deltaSize;
            this.current_position[0] = deltaPos ? deltaPos : this.current_position[0];
        }
    }, {
        key: "_resizeYCenter",
        value: function _resizeYCenter(deltaSize, deltaPos) {
            Template.SetHeight(this.region_name, deltaSize);
            Template.SetTop(this.region_name, deltaPos);
            this.current_size[1] = deltaSize;
            this.current_position[1] = deltaPos ? deltaPos : this.current_position[1];
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
            return this._animateRegionInit(end_pos, duration, type, 'position');
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
    }, {
        key: "resizeFromCenter",
        value: function resizeFromCenter(end_size) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';

            return this._animateRegionInit(end_size, duration, type, 'size_center');
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

            log.info('_animateRegionInit called, setting vars and calling _animateRegion');

            var delta_x = void 0;
            var delta_y = void 0;

            var start_time = new Date().getTime();
            var end_time = start_time + duration;

            if (animation_type == 'position') {
                delta_x = end_coords[0] - this.current_position[0];
                delta_y = end_coords[1] - this.current_position[1];
            } else if (animation_type == 'size' || animation_type == 'size_center') {
                //log.info('in the size animation tyype chooser init');
                delta_x = end_coords[0] - this.current_size[0];
                delta_y = end_coords[1] - this.current_size[1];
            }

            var start_coords = Object.assign([], this.current_position);
            var start_size = Object.assign([], this.current_size);

            log.debug(start_coords);
            log.debug(start_size);
            log.debug(end_coords);

            var promise = new Promise(function (resolve) {
                _this._animateRegion(start_coords, start_size, end_coords, delta_x, delta_y, start_time, end_time, duration, type, animation_type, resolve);
            });
            return promise;
        }

        /**
         * Main animation loop, computes the next [x,y] values of the animation
         * @param {Array} start_size [x,y] list of the of the starting size of the region
         * @param {Array} start_coords [x,y] list of the starting coordinates
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
        value: function _animateRegion(start_coords, start_size, end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve) {
            var next_pos_x = void 0;
            var next_pos_y = void 0;
            var next_size_x = void 0;
            var next_size_y = void 0;

            var now = new Date().getTime();
            var t = now - start_time;

            if (now < end_time) {

                if (animation_type == 'position') {
                    next_pos_x = easingTypes[type](t, start_coords[0], cX, d);
                    next_pos_y = easingTypes[type](t, start_coords[1], cY, d);

                    this._moveX(next_pos_x);
                    this._moveY(next_pos_y);
                } else if (animation_type == 'size') {
                    next_size_x = easingTypes[type](t, start_size[0], cX, d);
                    next_size_y = easingTypes[type](t, start_size[1], cY, d);

                    this._resizeX(next_size_x);
                    this._resizeY(next_size_y);
                } else if (animation_type == 'size_center') {
                    next_size_x = easingTypes[type](t, start_size[0], cX, d);
                    next_size_y = easingTypes[type](t, start_size[1], cY, d);

                    next_pos_x = start_coords[0] - (next_size_x - start_size[0]) / 2;
                    next_pos_y = start_coords[1] - (next_size_y - start_size[1]) / 2;

                    this._resizeXCenter(next_size_x, next_pos_x);
                    this._resizeYCenter(next_size_y, next_pos_y);
                }

                var self = this;

                var callback = function callback() {
                    self._animateRegion(start_coords, start_size, end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve);
                };

                window.requestAnimationFrame(callback);
            } else {
                if (animation_type == 'position') {
                    this._moveX(end_coords[0]);
                    this._moveY(end_coords[1]);
                } else if (animation_type == 'size') {
                    this._resizeX(end_coords[0]);
                    this._resizeY(end_coords[1]);
                } else if (animation_type == 'size_center') {
                    this._resizeXCenter(end_coords[0], false);
                    this._resizeYCenter(end_coords[1], false);
                }

                resolve();
            }
        }
    }, {
        key: "originPosition",


        /**
         * Gets the original position of the top left corner of the region.
         * @return {Array} Array of original [x,y] position
         */
        get: function get$$1() {
            return _origin_position.get(this);
        }

        /**
         * Gets the original size of the region.
         * @return {Array} Array of original [x,y] size
         */

    }, {
        key: "originSize",
        get: function get$$1() {
            return _origin_size.get(this);
        }

        /**
         * Returns the center position of a region relative to the top left of the image
         * @return {Array}
         */

    }, {
        key: "regionCenter",
        get: function get$$1() {
            var x1 = this.current_position[0];
            var y1 = this.current_position[1];
            var x2 = x1 + this.current_size[0];
            var y2 = y1 + this.current_size[1];

            xPrime = (x1 + x2) / 2;
            yPrime = (y1 + y2) / 2;

            return [xPrime, yPrime];
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
exports.Helpers = Helpers;
exports.Player = Player;
exports.Region = Region;
exports.Template = Template;
