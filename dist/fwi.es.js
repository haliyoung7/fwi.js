// Load the FWI Javascript base:
const FWI$1 = window.frameElement ? window.frameElement.parentNode.FWI : window.external;

const _content_name = new WeakMap();
const _region_name = new WeakMap();

class Content {

	constructor(name, region_name) {
		_content_name.set(this, name);
		_region_name.set(this, region_name);
	}

	get name() {
		return _content_name.get(this);
	}

	get region_name() {
		return _region_name.get(this);
	}

	static GetDetails(name) {
		return FWI$1.GetUrl('content://' + name);
	}

	static Print(region_name, parameters) {
		FWI$1.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
	}

	static Seek(region_name, direction, wrap = true) {
		FWI$1.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
	}

	static SetArgument(region_name, o) {
      	for (let [k,v] of o) {
          	FWI$1.RunScript('Content[' + region_name + '].SetArgument(' + k + ', ' + v + ');');
      	}
	}

	static ShowRoute(region_name, o) {
		for (let [k,v] of o) {
			FWI$1.RunScript('Content[' + region_name + '].ShowRoute(' + k + ', ' + v + ');');
		}
	}

	static Url(url) {
		FWI$1.RunScript('Content.Url(' + url + ');');
	}

	static UrlAsync(url) {
		FWI$1.RunScript('Content.UrlAsync(' + url + ');');
	}

	static Pause(region_name) {
		FWI$1.RunScript('Content[' + region_name + '].Pause();');
	}

	static Play(region_name) {
		FWI$1.RunScript('Content[' + region_name + '].Play();');
	}

	static SeekBy(region_name, value) {
		FWI$1.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
	}

	static SeekTo(region_name, value) {
		FWI$1.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
	}

	static Resume(region_name) {
		FWI$1.RunScript('Content[' + region_name + '].Resume();');
	}

	static SetBalance(region_name, balance) {
		FWI$1.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
	}

	static SetVolume(region_name, volume) {
		FWI$1.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
	}

	static Stop(region_name) {
		FWI$1.RunScript('Content[' + region_name + '].Stop();');
	}

	static HighlightRows(region_name, row_list) {
		FWI$1.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
	}

	getDetails() {
		return Content.GetDetails(this.name);
	}

	print(parameters) {
		Content.Print(this.region_name, parameters);
	}

	seek(direction, wrap = true) {
		Content.Seek(this.region_name, direction, wrap);
	}

	setArgument(o) {
		Content.SetArgument(this.region_name, o);
	}

	showRoute(o) {
		Content.ShowRoute(this.region_name, o);
	}

	pause() {
		Content.Pause(this.region_name);
	}

	play() {
		Content.Play(this.region_name);
	}

	seekBy(value) {
		Content.SeekBy(this.region_name, value);
	}

	seekTo(value) {
		Content.SeekTo(this.region_name, value);
	}

	resume() {
		Content.Resume(this.region_name);
	}

	setBalance(balance) {
		Content.SetBalance(this.region_name, balance);
	}

	setVolume(volume) {
		Content.SetVolume(this.region_name, volume);
	}

	stop() {
		Content.Stop(this.region_name);
	}
}

const easingTypes = {
      /**
       * Easing types are different equations to determine the path of a region tween.
       * @param {DateTime|Int} t The amount of time that has passed since the animation began.
       * @param {Int|Float} b The current position of the x or y point of the top left corner of the region
       * @param {Int|Float} c The total delta for the x or y point from beginning position to the end position
       * @param {Int} d The total duration of the animation
       * @return {Float} The next position of the x or y point.
       */

    linear: function(t,b ,c, d) {
      return c*t/d + b;
    },

    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c*t*t + b;
    },

    easeOutQuad: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },

    easeInCubic: function(t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },

    easeOutCubic: function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },

    easeInOutCubic: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },

    easeInQuart: function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t + b;
    },

    easeOutQuart: function(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t*t*t*t - 1) + b;
    },

    easeInOutQuart: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    },

    easeInQuint: function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t*t + b;
    },

    easeOutQuint: function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t*t*t + 1) + b;
    },

    easeInOutQuint: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    },

    easeInSine: function(t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },

    easeOutSine: function(t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },

    easeInOutSine: function(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },

    easeInExpo: function(t, b, c, d) {
        return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    },

    easeOutExpo: function(t, b, c, d) {
        return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
    },

    easeInOutExpo: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
        t--;
        return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
    },

    easeInCirc: function(t, b, c, d) {
        t /= d;
        return -c * (Math.sqrt(1 - t*t) - 1) + b;
    },

    easeOutCirc: function(t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t*t) + b;
    },

    easeInOutCirc: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        t -= 2;
        return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
    },

    easeInElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },

    easeOutElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },

    easeInOutElastic: function(t, b, c, d) {
        var a = 0;
        var p = 0;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },

    easeInBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },

    easeOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },

    easeInOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },

    easeInBounce: function(t, b, c, d) {
        return c - this.easeOutBounce(d-t, 0, c, d) + b;
    },

    easeOutBounce: function(t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },

    easeInOutBounce: function(t, b, c, d) {
        if (t < d/2) return this.easeInBounce(t*2, 0, c, d) * .5 + b;
        return this.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
};

class Helpers {

	constructor() {

	}

	static splitColor(color) {
		const opacity = parseInt('0x' + color.slice(1,3))/255;

		const rgb = '#' + color.slice(3,9);

		return ({'rgb' : rgb, 'opacity' : opacity});
	}
}

String.prototype.ReplaceIllegalChars = function (prefix) {
  //This method replaces { } and , with variable names so CM can read the JSON properly
  let OutputString = this.replace(/{/g,"{&lb");
  OutputString = OutputString.replace(/}/g,"&rb}");
  OutputString = OutputString.replace(/,/g,`{&var:${prefix}_comma}`);
  OutputString = OutputString.replace(/{&lb/g,"{&lb}");
  OutputString = OutputString.replace(/&rb}/g,"{&rb}");
  return OutputString;
};

String.prototype.startsWith = function (prefix) {
    return this.slice(0, prefix.length) == prefix;
};

class Player{
  constructor() {

  }

  /**
   * Retrieves the value for a single CM variable.
   * @param {String} name A variable name to collect
   * @return {Number|String} An appropriately casted value from the variable
   */
  static GetVariable(name) {
    return FWI$1.MarkupValue('{&var:' + name + '}') != '' ? FWI$1.MarkupValue('{&var:' + name + '}') : false;
  };

  /**
   * Retrieves the value for a single CM font variable.
   * @param {String} name A variable name to collect
   * @return {Object} Dictionary of the font json
   */
  static GetFontVariable(name) {
    const font_var = Player.GetVariable(name);
    return JSON.parse(font_var);
  }

  /**
   * Retrieves values for multiple CM variables.
   * @param {Array} nameArray An array of variable names to collect
   * @return {Array} An array of values that correspond to the requested variables
   */
  static GetManyVariables(nameArray) {
    const values = [];
    for (let [k,v] of nameArray.entries()) {
      values.push(FWI$1.MarkupValue('{&var:' + v + '}'));
    }
    return values;
  }

  /**
   * Sets  single variable back in CM.
   * @param {String} name The name of the variable to set
   * @param {String} value The value of the variable to set
   * @return {Void}
   */
  static SetVariable(name, value) {
    FWI$1.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
  }

  /**
   * Sets a single font variable back in CM.
   * @param {String} name The name of the variable to set
   * @param {Object} value The font dictionary object
   * @return {Void}
   */
  static SetFontVariable(name, value, prefix) {
    Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars());
  }

  /**
   * Sets multiple variables back in CM.
   * @param {Object} keyValueDict An object that defines key/value pairs to use
   * @return {Void}
   */
  static SetManyVariables(keyValueDict) {
    for (let [k, v] of keyValueDict) {
      FWI$1.RunScript('Player.SetVariable(' + k + ',' + v + ');');
    }
  }

  /**
   * Creates a new dictionary with a font variable tempalte
   * @return {Object} Font dictionary template
   */
  static CreateFontVariable() {

    const font_dict = {
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
  static SetLanguage(languageCode) {
      FWI$1.RunScript('Player.SetLanguage(' + languageCode + ');');
  }

  /**
   * Sets the language of the build.
   * @param {String} languageCode The language code to use
   * @return {Void}
   */
  static ToggleVariable(name) {
      FWI$1.RunScript('Player.ToggleVariable(' + name + ');');
  }

  /**
   * Plays a template
   * @param {String} name The name of the template to play
   * @param {String|Int} templateIndex The position of the desired template instance in the network overview
   * @return {Void}
   */
  static PlayTemplate(name, templateIndex) {
      FWI$1.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
  }

  /*
   * Runs a shell command
   * @param {String} command_name The main command, sometimes includes folder path
   * @param {Array} arg_array Array of args to be submitted to the command
   * @return {Void}
   */
  static Command(command_name, arg_array) {
    let command = 'Player.Command(' + command_name;

    for (let [k,v] of arg_array.entries()) {
      command = command + ', ' + v;
    }

    command += ');';

    FWI$1.RunScript(command);

  }

  /*
   * Resets the idle timer
   * @return {Void}
   */
  static ResetIdleTimer() {
    FWI$1.RunScript('Player.ResetIdleTimer();');
  }

  /*
   * Restarts the player
   * @return {Void}
   */
  static Restart() {
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
  static SendMail(o) {
    let command = 'Player.SendMail(';

    for (let [k,v] of o) {
      command = command + ',' + k + '=' + v;
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
  static Speak(o) {
    let command = 'Player.Speak(';

    try {
      command += o[msg];
    }

    catch(e) {
      log.error(e);
    }

    for (let [k,v] of o) {
      command = (k != 'msg' ? (command + ',' + k + '=' + v) : '');
    }

    command += ');';

    FWI$1.RunScript(command);
  }

  /*
   * Unsets a variable
   * @param {String} name Variable name you wish to clear
   * @return {Void}
   */
  static UnsetVariable(name) {
    FWI$1.RunScript('Player.UnsetVariable(' + name + ');');
  }

}

class Template {
  constructor() {

  }

  static async PlayContent(name, region) {
    return new Promise((resolve) => {
      FWI$1.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
      resolve();
    })
  }

  static PopContent() {
    FWI$1.RunScript('Template.PopContent();');
  }

  static PushContent(content, region, params = undefined) {
    FWI$1.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
  }

  static Restart() {
    FWI$1.RunScript('Template.Restart();');
  }

  static SetCanSize(region_name, value) {
    FWI$1.RunScript('Template.SetCanSize(' + region_name + ', ' + value +');');
  }

  static SetCanDrag(region_name, value) {
    FWI$1.RunScript('Template.SetCanDrag(' + region_name + ', ' + value +');');
  }

  static SetCanRotate(region_name, value) {
    FWI$1.RunScript('Template.SetCanRotate(' + region_name + ', ' + value +');');
  }

  static SetLeft(region_name, value) {
    FWI$1.RunScript('Template.SetLeft('+ region_name + ',' + value + ');');
  }

  static SetTop(region_name, value) {
    FWI$1.RunScript('Template.SetTop('+ region_name + ',' + value + ');');
  }

  static SetWidth(region_name, value) {
    FWI$1.RunScript('Template.SetWidth('+ region_name + ',' + value + ');');
  }

  static SetHeight(region_name, value) {
    FWI$1.RunScript('Template.SetHeight('+ region_name + ',' + value + ');');
  }

  static SetAngle(region_name, value) {
    FWI$1.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
  }

  static ClearLeft(region_name) {
    FWI$1.RunScript('Template.ClearLeft('+ region_name + ');');
  }

  static ClearTop(region_name) {
    FWI$1.RunScript('Template.ClearTop('+ region_name + ');');
  }

  static ClearWidth(region_name) {
    FWI$1.RunScript('Template.ClearWidth('+ region_name + ');');
  }

  static ClearHeight(region_name) {
    FWI$1.RunScript('Template.ClearHeight('+ region_name + ');');
  }

  static ClearAngle(region_name) {
    FWI$1.RunScript('Template.ClearAngle(' + region_name + ');');
  }

  static SetZIndex(region_name, value) {
    FWI$1.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
  }

  static ClearZIndex(region_name) {
    FWI$1.RunScript('Template.ClearZIndex(' + region_name + ');');
  }

  static SetLinearVelocity(region_name, Vx = '*', Vy = '*') {
    FWI$1.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
  }

  static SetAngularVelocity(region_name, omega) {
    FWI$1.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
  }
}

const _origin_position = new WeakMap();
const _origin_size = new WeakMap();

class Region {

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
        }

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
            }

            const self = this;

            const callback = () => {
                self._animateRegion(end_coords, cX, cY, start_time, end_time, d, type, animation_type, resolve);
            };

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
            resolve();
        }
    }
}

export { Content, easingTypes, FWI$1 as FWI, Helpers, Player, Region, Template };
