"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fwi_core_1 = require("./fwi_core");
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
     *
     * @static
     * @param {string} name A variable name to collect
     * @returns {string} An appropriately casted value from the variable
     * @memberof Player
     */
    Player.GetVariable = function (name) {
        return fwi_core_1.FWI.MarkupValue('{&var:' + name + '}') != '' ? fwi_core_1.FWI.MarkupValue('{&var:' + name + '}') : false;
    };
    ;
    /**
     * Retrieves the value for a single CM font variable.
     *
     * @static
     * @param {string} name A variable name to collect
     * @returns {*} Dictionary of the font json
     * @memberof Player
     */
    Player.GetFontVariable = function (name) {
        var font_var = Player.GetVariable(name);
        return JSON.parse(font_var);
    };
    // /**
    //  * Retrieves values for multiple CM variables.
    //  *
    //  * @static
    //  * @param {string[]} nameArray An array of variable names to collect
    //  * @returns {string[]} An array of values that correspond to the requested variables
    //  * @memberof Player
    //  */
    // static GetManyVariables(nameArray: string[]): string[] {
    //   const values = [];
    //   for (let [k,v] of nameArray.entries()) {
    //     values.push(FWI.MarkupValue('{&var:' + v + '}'));
    //   }
    //   return values;
    // }
    /**
     * Sets  single variable back in CM.
     *
     * @static
     * @param {string} name The name of the variable to set
     * @param {*} value The value of the variable to set
     * @memberof Player
     */
    Player.SetVariable = function (name, value) {
        fwi_core_1.FWI.RunScript('Player.SetVariable(' + name + ', ' + value.toString() + ');');
    };
    /**
     * Sets a single font variable back in CM.
     *
     * @static
     * @param {string} name The name of the variable to set
     * @param {*} value The font dictionary object
     * @param {string} prefix App prefix if applicable
     * @memberof Player
     */
    Player.SetFontVariable = function (name, value, prefix) {
        Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars(prefix));
    };
    // /**
    //  * Sets multiple variables back in CM.
    //  * @param {Object} keyValueDict An object that defines key/value pairs to use
    //  * @return {Void}
    //  */
    // static SetManyVariables(keyValueDict) {
    //   for (let [k, v] of keyValueDict) {
    //     FWI.RunScript('Player.SetVariable(' + k + ',' + v + ');');
    //   };
    // }
    /**
     * Creates a new dictionary with a font variable tempalte
     *
     * @static
     * @returns {object} Font dictionary template
     * @memberof Player
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
                type: null,
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
        fwi_core_1.FWI.RunScript('Player.SetLanguage(' + languageCode + ');');
    };
    /**
     * Sets the language of the build.
     * @param {String} name The language code to use
     * @return {Void}
     */
    Player.ToggleVariable = function (name) {
        fwi_core_1.FWI.RunScript('Player.ToggleVariable(' + name + ');');
    };
    /**
     * Plays a template
     * @param {String} name The name of the template to play
     * @param {String|Int} templateIndex The position of the desired template instance in the network overview
     * @return {Void}
     */
    Player.PlayTemplate = function (name, templateIndex) {
        fwi_core_1.FWI.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex.toString() : '') + ');');
    };
    // /**
    //  * Runs a shell command
    //  * @param {String} command_name The main command, sometimes includes folder path
    //  * @param {Array} arg_array Array of args to be submitted to the command
    //  * @return {Void}
    //  */
    // static Command(command_name, arg_array) {
    //   let command = 'Player.Command(' + command_name;
    //   for (let [k,v] of arg_array.entries()) {
    //     command = command + ', ' + v;
    //   }
    //   command += ');';
    //   FWI.RunScript(command);
    // }
    /**
     * Resets the idle timer
     * @return {Void}
     */
    Player.ResetIdleTimer = function () {
        fwi_core_1.FWI.RunScript('Player.ResetIdleTimer();');
    };
    /**
     * Restarts the player
     * @return {Void}
     */
    Player.Restart = function () {
        fwi_core_1.FWI.RunScript('Player.Restart();');
    };
    // /**
    //  * Sends mail
    //  * @param {Obj} o Object that contains all paramters from wiki
    //  * {
    //  *   to: string dest_address
    //  *   cc: string cc_address,
    //  *   bcc: string bcc_address,
    //  *   subject: string subject,
    //  *   from: string sender_address,
    //  *   body: string main_message,
    //  *   host: string smpt_host,
    //  *   username: string smpt_username,
    //  *   password: strign smpt_password
    //  * }
    //  * @return {Void}
    //  */
    // static SendMail(o) {
    //   let command = 'Player.SendMail(';
    //   for (let [k,v] of o) {
    //     command = command + ',' + k + '=' + v;
    //   };
    //   command += ');';
    //   FWI.RunScript(command);
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
        fwi_core_1.FWI.RunScript('Player.UnsetVariable(' + name + ');');
    };
    return Player;
}());
exports.Player = Player;
