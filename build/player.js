"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fwi_core_js_1 = require("./fwi_core.js");
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
var Player = /** @class */ (function () {
    function Player() {
    }
    /**
     * Retrieves the value for a single CM variable.
     * @param {String} name A variable name to collect
     * @return {Number|String} An appropriately casted value from the variable
     */
    Player.GetVariable = function (name) {
        return fwi_core_js_1.FWI.MarkupValue('{&var:' + name + '}') != '' ? fwi_core_js_1.FWI.MarkupValue('{&var:' + name + '}') : false;
    };
    ;
    /**
     * Retrieves the value for a single CM font variable.
     * @param {String} name A variable name to collect
     * @return {Object} Dictionary of the font json
     */
    Player.GetFontVariable = function (name) {
        var font_var = Player.GetVariable(name);
        return JSON.parse(font_var);
    };
    /**
     * Retrieves values for multiple CM variables.
     * @param {Array} nameArray An array of variable names to collect
     * @return {Array} An array of values that correspond to the requested variables
     */
    Player.GetManyVariables = function (nameArray) {
        var values = [];
        for (var _i = 0, _a = nameArray.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            values.push(fwi_core_js_1.FWI.MarkupValue('{&var:' + v + '}'));
        }
        return values;
    };
    /**
     * Sets  single variable back in CM.
     * @param {String} name The name of the variable to set
     * @param {String} value The value of the variable to set
     * @return {Void}
     */
    Player.SetVariable = function (name, value) {
        fwi_core_js_1.FWI.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
    };
    /**
     * Sets a single font variable back in CM.
     * @param {String} name The name of the variable to set
     * @param {Object} value The font dictionary object
     * @return {Void}
     */
    Player.SetFontVariable = function (name, value, prefix) {
        Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars(prefix));
    };
    /**
     * Sets multiple variables back in CM.
     * @param {Object} keyValueDict An object that defines key/value pairs to use
     * @return {Void}
     */
    Player.SetManyVariables = function (keyValueDict) {
        for (var _i = 0, keyValueDict_1 = keyValueDict; _i < keyValueDict_1.length; _i++) {
            var _a = keyValueDict_1[_i], k = _a[0], v = _a[1];
            fwi_core_js_1.FWI.RunScript('Player.SetVariable(' + k + ',' + v + ');');
        }
        ;
    };
    /**
     * Creates a new dictionary with a font variable tempalte
     * @return {Object} Font dictionary template
     */
    Player.CreateFontVariable = function () {
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
    };
    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */
    Player.SetLanguage = function (languageCode) {
        fwi_core_js_1.FWI.RunScript('Player.SetLanguage(' + languageCode + ');');
    };
    /**
     * Sets the language of the build.
     * @param {String} languageCode The language code to use
     * @return {Void}
     */
    Player.ToggleVariable = function (name) {
        fwi_core_js_1.FWI.RunScript('Player.ToggleVariable(' + name + ');');
    };
    /**
     * Plays a template
     * @param {String} name The name of the template to play
     * @param {String|Int} templateIndex The position of the desired template instance in the network overview
     * @return {Void}
     */
    Player.PlayTemplate = function (name, templateIndex) {
        fwi_core_js_1.FWI.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
    };
    /**
     * Runs a shell command
     * @param {String} command_name The main command, sometimes includes folder path
     * @param {Array} arg_array Array of args to be submitted to the command
     * @return {Void}
     */
    Player.Command = function (command_name, arg_array) {
        var command = 'Player.Command(' + command_name;
        for (var _i = 0, _a = arg_array.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            command = command + ', ' + v;
        }
        command += ');';
        fwi_core_js_1.FWI.RunScript(command);
    };
    /**
     * Resets the idle timer
     * @return {Void}
     */
    Player.ResetIdleTimer = function () {
        fwi_core_js_1.FWI.RunScript('Player.ResetIdleTimer();');
    };
    /**
     * Restarts the player
     * @return {Void}
     */
    Player.Restart = function () {
        fwi_core_js_1.FWI.RunScript('Player.Restart();');
    };
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
    Player.SendMail = function (o) {
        var command = 'Player.SendMail(';
        for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
            var _a = o_1[_i], k = _a[0], v = _a[1];
            command = command + ',' + k + '=' + v;
        }
        ;
        command += ');';
        fwi_core_js_1.FWI.RunScript(command);
    };
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
    Player.Speak = function (o) {
        return;
    };
    /**
     * Unsets a variable
     * @param {String} name Variable name you wish to clear
     * @return {Void}
     */
    Player.UnsetVariable = function (name) {
        fwi_core_js_1.FWI.RunScript('Player.UnsetVariable(' + name + ');');
    };
    return Player;
}());
exports.Player = Player;
