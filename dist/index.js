var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
System.register("fwi_core", ["./utils/string"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var fwi;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            /**
             * Load the FWI Javascript base depending on if you are using a browser or windows player.
             */
            exports_1("fwi", fwi = window.frameElement ? window.frameElement.parentNode.FWI : window.external);
        }
    };
});
System.register("interfaces/ITextFormatVariable", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/TextFormatVariable", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var TextFormatVariable;
    return {
        setters: [],
        execute: function () {
            TextFormatVariable = /** @class */ (function () {
                function TextFormatVariable(fontFamily, fontSize, fontStretch, fontStyle, fontWeight, textDecoration, fontColor, textAlignment, textAutoSize, textSizeBehavior, fontLeading, frame) {
                    if (fontFamily === void 0) { fontFamily = 'Arial'; }
                    if (fontSize === void 0) { fontSize = 9.000000E+00; }
                    if (fontStretch === void 0) { fontStretch = null; }
                    if (fontStyle === void 0) { fontStyle = null; }
                    if (fontWeight === void 0) { fontWeight = null; }
                    if (textDecoration === void 0) { textDecoration = null; }
                    if (fontColor === void 0) { fontColor = '#FF000000'; }
                    if (textAlignment === void 0) { textAlignment = 'TopLeft'; }
                    if (textAutoSize === void 0) { textAutoSize = false; }
                    if (textSizeBehavior === void 0) { textSizeBehavior = 'Fixed'; }
                    if (fontLeading === void 0) { fontLeading = 0; }
                    if (frame === void 0) { frame = {
                        type: null,
                        backgroundColor: "#00424242",
                        borderColor: "#008BD5B5"
                    }; }
                    this.fontFamily = fontFamily;
                    this.fontSize = fontSize;
                    this.fontStretch = fontStretch;
                    this.fontStyle = fontStyle;
                    this.fontWeight = fontWeight;
                    this.textDecoration = textDecoration;
                    this.fontColor = fontColor;
                    this.textAlignment = textAlignment;
                    this.textAutoSize = textAutoSize;
                    this.textSizeBehavior = textSizeBehavior;
                    this.fontLeading = fontLeading;
                    this.frame = frame;
                }
                return TextFormatVariable;
            }());
            exports_3("TextFormatVariable", TextFormatVariable);
        }
    };
});
System.register("interfaces/IEmailMessage", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/EmailMessage", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var EmailMessage;
    return {
        setters: [],
        execute: function () {
            EmailMessage = /** @class */ (function () {
                function EmailMessage(to, cc, bcc, subject, from, body, host, username, password) {
                    if (to === void 0) { to = ''; }
                    if (from === void 0) { from = ''; }
                    if (body === void 0) { body = ''; }
                    if (host === void 0) { host = ''; }
                    if (username === void 0) { username = ''; }
                    if (password === void 0) { password = ''; }
                    this.to = to;
                    this.cc = cc;
                    this.bcc = bcc;
                    this.subject = subject;
                    this.from = from;
                    this.body = body;
                    this.host = host;
                    this.username = username;
                    this.password = password;
                }
                return EmailMessage;
            }());
            exports_5("EmailMessage", EmailMessage);
        }
    };
});
System.register("player", ["fwi_core", "models/TextFormatVariable", "models/EmailMessage"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var fwi_core_1, TextFormatVariable_1, EmailMessage_1, Player;
    return {
        setters: [
            function (fwi_core_1_1) {
                fwi_core_1 = fwi_core_1_1;
            },
            function (TextFormatVariable_1_1) {
                TextFormatVariable_1 = TextFormatVariable_1_1;
            },
            function (EmailMessage_1_1) {
                EmailMessage_1 = EmailMessage_1_1;
            }
        ],
        execute: function () {
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
            Player = /** @class */ (function () {
                function Player() {
                }
                /**
                 * Retrieves the value for a single CM variable.
                 *
                 * @static
                 * @param {string} name A variable name to collect
                 * @returns {string} An appropriately casted value from the variable
                 * @memberof Player
                 */
                Player.GetVariable = function (name) {
                    return fwi_core_1.fwi.MarkupValue('{&var:' + name + '}') != '' ? fwi_core_1.fwi.MarkupValue('{&var:' + name + '}') : false;
                };
                ;
                /**
                 * Retrieves the value for a single CM font variable.
                 *
                 * @static
                 * @param {string} name A variable name to collect
                 * @returns {TextFormatVariable} Dictionary of the font json
                 * @memberof Player
                 */
                Player.GetFontVariable = function (name) {
                    var font_var = Player.GetVariable(name);
                    return JSON.parse(font_var);
                };
                /**
                 * Retrieves values for multiple CM variables.
                 *
                 * @static
                 * @param {string[]} nameArray An array of variable names to collect
                 * @returns {string[]} An array of values that correspond to the requested variables
                 * @memberof Player
                 */
                Player.GetManyVariables = function (nameArray) {
                    var values = [];
                    try {
                        for (var _a = __values(nameArray.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var _c = __read(_b.value, 2), k = _c[0], v = _c[1];
                            values.push(fwi_core_1.fwi.MarkupValue('{&var:' + v + '}'));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return values;
                    var e_1, _d;
                };
                /**
                 * Sets  single variable back in CM.
                 *
                 * @static
                 * @param {string} name The name of the variable to set
                 * @param {*} value The value of the variable to set
                 * @memberof Player
                 */
                Player.SetVariable = function (name, value) {
                    fwi_core_1.fwi.RunScript('Player.SetVariable(' + name + ', ' + value.toString() + ');');
                };
                /**
                 * Sets a single font variable back in CM.
                 *
                 * @static
                 * @param {string} name The name of the variable to set
                 * @param {TextFormatVariable} value The font dictionary object
                 * @param {string} prefix App prefix if applicable
                 * @memberof Player
                 */
                Player.SetFontVariable = function (name, value, prefix) {
                    Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars(prefix));
                };
                /**
                 * Sets multiple variables back in CM.
                 *
                 * @static
                 * @param {{ [s: string]: string; }} keyValueDict An object that defines key/value pairs to use
                 * @memberof Player
                 */
                Player.SetManyVariables = function (keyValueDict) {
                    Object.keys(keyValueDict).forEach(function (key) {
                        var value = keyValueDict[key];
                        fwi_core_1.fwi.RunScript('Player.SetVariable(' + key + ',' + value + ');');
                    });
                };
                /**
                 * Creates a new dictionary with a font variable tempalte
                 *
                 * @static
                 * @returns {TextFormatVariable} Font dictionary template
                 * @memberof Player
                 */
                Player.CreateFontVariable = function () {
                    var tfv = new TextFormatVariable_1.TextFormatVariable();
                    return tfv;
                };
                /**
                 * Sets the language of the build.
                 * @param {String} languageCode The language code to use
                 * @return {Void}
                 */
                Player.SetLanguage = function (languageCode) {
                    fwi_core_1.fwi.RunScript('Player.SetLanguage(' + languageCode + ');');
                };
                /**
                 * Sets the language of the build.
                 * @param {String} name The language code to use
                 * @return {Void}
                 */
                Player.ToggleVariable = function (name) {
                    fwi_core_1.fwi.RunScript('Player.ToggleVariable(' + name + ');');
                };
                /**
                 * Plays a template
                 *
                 * @static
                 * @param {string} name The name of the template to play
                 * @param {number} templateIndex The position of the desired template instance in the network overview
                 * @memberof Player
                 */
                Player.PlayTemplate = function (name, templateIndex) {
                    fwi_core_1.fwi.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex.toString() : '') + ');');
                };
                /**
                 * Runs a shell command
                 *
                 * @static
                 * @param {string} command_name The main command, sometimes includes folder path
                 * @param {string[]} arg_array Array of args to be submitted to the command
                 * @memberof Player
                 */
                Player.Command = function (command_name, arg_array) {
                    var command = 'Player.Command(' + command_name;
                    try {
                        for (var _a = __values(arg_array.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var _c = __read(_b.value, 2), k = _c[0], v = _c[1];
                            command = command + ', ' + v;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    command += ');';
                    fwi_core_1.fwi.RunScript(command);
                    var e_2, _d;
                };
                /**
                 * Resets the idle timer
                 * @return {Void}
                 */
                Player.ResetIdleTimer = function () {
                    fwi_core_1.fwi.RunScript('Player.ResetIdleTimer();');
                };
                /**
                 * Restarts the player
                 * @return {Void}
                 */
                Player.Restart = function () {
                    fwi_core_1.fwi.RunScript('Player.Restart();');
                };
                /**
                 * Creates a new dictionary with a font variable tempalte
                 *
                 * @static
                 * @returns {TextFormatVariable} Font dictionary template
                 * @memberof Player
                 */
                Player.CreateEmailMessage = function () {
                    var email = new EmailMessage_1.EmailMessage();
                    return email;
                };
                // /**
                //  * Sends mail
                //  *
                //  * @static
                //  * @param {EmailMessage} o Object that contains all paramters from wiki
                //  * @memberof Player
                //  */
                // static SendMail(o: EmailMessage): void {
                //   let command = 'Player.SendMail(';
                //   for (let [k,v] of o) {
                //     command = command + ',' + k + '=' + v;
                //   };
                //   command += ');';
                //   Object.keys(o).forEach((key) => {
                //     let value = o[key];
                //     fwi.RunScript('Player.SetVariable(' + key + ',' + value + ');');
                //   })
                //   fwi.RunScript(command);
                // }
                // /**
                //  * Text-to-speech
                //  * @param {Obj} o Object that contains parameters from the wiki
                //  * {
                //  *   msg: string text_to_speak,
                //  *   Volume: int volume,
                //  *   Rate: int rate,
                //  *   Voice: string voice
                //  * }
                //  * @return {Void}
                //  */
                // static Speak(o) {
                //   return
                // }
                /**
                 * Unsets a variable
                 * @param {String} name Variable name you wish to clear
                 * @return {Void}
                 */
                Player.UnsetVariable = function (name) {
                    fwi_core_1.fwi.RunScript('Player.UnsetVariable(' + name + ');');
                };
                return Player;
            }());
            exports_6("Player", Player);
        }
    };
});
System.register("template", ["fwi_core"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var fwi_core_js_1, Template;
    return {
        setters: [
            function (fwi_core_js_1_1) {
                fwi_core_js_1 = fwi_core_js_1_1;
            }
        ],
        execute: function () {
            /**
             * This is the template class.  It contains all of the template functions you'd find in CM.
             * All methods in this class are static so you do not need to use the `new` keyword.
             *
             * Example:
             * ```
             * Template.PlayContent('Foo', 'Bar');
             * ```
             */
            Template = /** @class */ (function () {
                function Template() {
                }
                /**
                 * Plays a piece of content in a region
                 * @param {String} name The name of the variable to set
                 * @param {String} region The region of the content to play
                 * @return {Void}
                 */
                Template.PlayContent = function (name, region) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    fwi_core_js_1.fwi.RunScript('Template.PlayContent("' + name + '", "' + region + '");');
                                    resolve();
                                })];
                        });
                    });
                };
                /**
                 * Pops a command from the FIFO command stack
                 * @return {Void}
                 */
                Template.PopContent = function () {
                    fwi_core_js_1.fwi.RunScript('Template.PopContent();');
                };
                /**
                 * Pushes a command to the FIFO command stack
                 * @return {Void}
                 */
                Template.PushContent = function (content, region, params) {
                    if (params === void 0) { params = undefined; }
                    fwi_core_js_1.fwi.RunScript('Template.PushContent(' + content + ', ' + region + (params != undefined ? ', ' + params : '') + ');');
                };
                /**
                 * Restarts the template, be careful!  If you don't have a span region
                 * set this will spawn a new process.
                 * @return {Void}
                 */
                Template.Restart = function () {
                    fwi_core_js_1.fwi.RunScript('Template.Restart();');
                };
                /**
                 * Sets a region property telling it if it can resize or not.
                 * @param {String} region_name Name of the region
                 * @param {Bool} value True/False if the region can be resized
                 * @return {Void}
                 */
                Template.SetCanSize = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetCanSize(' + region_name + ', ' + value + ');');
                };
                /**
                 * Sets a region property telling it if it can be draged around
                 * @param {String} region_name Name of the region
                 * @param {Boolean} value True/False if the region can be dragged
                 * @return {Void}
                 */
                Template.SetCanDrag = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetCanDrag(' + region_name + ', ' + value + ');');
                };
                /**
                 * Sets a region property telling it if it can be rotated by touch
                 * @param {String} region_name Name of the region
                 * @param {Boolean} value True/False if the region can be rotated
                 * @return {Void}
                 */
                Template.SetCanRotate = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetCanRotate(' + region_name + ', ' + value + ');');
                };
                /**
                 * Sets the top left point of the region in x axis
                 * @param {String} region_name Name of the region
                 * @param {Number} value Value of the top left corner of the region in pixels in the x axis
                 * @return {Void}
                 */
                Template.SetLeft = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetLeft(' + region_name + ',' + value + ');');
                };
                /**
                 * Set the top left point of the region in the Y axis
                 * @param {String} region_name Name of the region
                 * @param {Number} value Value of the top left corner of the region in pixels in the y axis
                 * @return {Void}
                 */
                Template.SetTop = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetTop(' + region_name + ',' + value + ');');
                };
                /**
                 * Sets the regions width in pixels
                 * @param {String} region_name Name of the region
                 * @param {Number} value Value of the width of the region in pixels
                 * @return {Void}
                 */
                Template.SetWidth = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetWidth(' + region_name + ',' + value + ');');
                };
                /**
                 * Sets the regions height in pixels
                 * @param {String} region_name Name of the region
                 * @param {Number} value Value of the height of the region in pixels
                 * @return {Void}
                 */
                Template.SetHeight = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetHeight(' + region_name + ',' + value + ');');
                };
                /**
                 * Sets a regions angle in degrees
                 * @param {String} region_name Name of the region
                 * @param {Number} value Angle of the region in degrees
                 * @return {Void}
                 */
                Template.SetAngle = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetAngle(' + region_name + ', ' + value + ');');
                };
                /**
                 * Sets a regions X coordinante
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearLeft = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearLeft(' + region_name + ');');
                };
                /**
                 * Resets a regions Y coordinante
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearTop = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearTop(' + region_name + ');');
                };
                /**
                 * Resets the width of the region back to the stored original
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearWidth = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearWidth(' + region_name + ');');
                };
                /**
                 * Resets the regions height
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearHeight = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearHeight(' + region_name + ');');
                };
                /**
                 * Resets a regions angle
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearAngle = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearAngle(' + region_name + ');');
                };
                /**
                 * Sets a regions Z-Index
                 * @param {String} region_name Name of the region
                 * @param {Number} value Number of the regions z-index
                 * @return {Void}
                 */
                Template.SetZIndex = function (region_name, value) {
                    fwi_core_js_1.fwi.RunScript('Template.SetZIndex(' + region_name + ', ' + value + ');');
                };
                /**
                 * Resets the Z-Index
                 * @param {String} region_name Name of the region
                 * @return {Void}
                 */
                Template.ClearZIndex = function (region_name) {
                    fwi_core_js_1.fwi.RunScript('Template.ClearZIndex(' + region_name + ');');
                };
                /**
                 * Sets a regions linear velocity
                 * @param {String} region_name Name of the region
                 * @param {Number} Vx Velocity of the region in the x axis
                 * @param {Number} Vy Velocity of the region in the y axis
                 * @return {Void}
                 */
                Template.SetLinearVelocity = function (region_name, Vx, Vy) {
                    if (Vx === void 0) { Vx = '*'; }
                    if (Vy === void 0) { Vy = '*'; }
                    fwi_core_js_1.fwi.RunScript('Template.SetLinearVelocity(' + region_name + ', ' + Vx + ', ' + Vy + ');');
                };
                /**
                 * Sets a region's angular velocity or rotation
                 * @param {String} region_name Name of the region
                 * @param {Number} omega Number of degrees per a second
                 * @return {Void}
                 */
                Template.SetAngularVelocity = function (region_name, omega) {
                    fwi_core_js_1.fwi.RunScript('Template.SetAngularVelocity(' + region_name + ', ' + omega + ');');
                };
                return Template;
            }());
            exports_7("Template", Template);
        }
    };
});
