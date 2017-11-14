import { fwi } from "./fwi_core";
import { TextFormatVariable } from "./models/TextFormatVariable"

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
export class Player {

  constructor() { }

  /**
   * Retrieves the value for a single CM variable.
   *
   * @static
   * @param {string} name A variable name to collect
   * @returns {string} An appropriately casted value from the variable
   * @memberof Player
   */
  static GetVariable(name: string): string {
    return fwi.MarkupValue('{&var:' + name + '}') != '' ? fwi.MarkupValue('{&var:' + name + '}') : false;
  };

  /**
   * Retrieves the value for a single CM font variable.
   *
   * @static
   * @param {string} name A variable name to collect
   * @returns {TextFormatVariable} Dictionary of the font json
   * @memberof Player
   */
  static GetFontVariable(name: string): TextFormatVariable {
    const font_var = Player.GetVariable(name);
    return JSON.parse(font_var) as TextFormatVariable;
  }


  /**
   * Retrieves values for multiple CM variables.
   *
   * @static
   * @param {string[]} nameArray An array of variable names to collect
   * @returns {string[]} An array of values that correspond to the requested variables
   * @memberof Player
   */
  static GetManyVariables(nameArray: string[]): string[] {
    const values: string[] = [];
    for (let [k, v] of nameArray.entries()) {
      values.push(fwi.MarkupValue('{&var:' + v + '}'));
    }
    return values;
  }

  /**
   * Sets  single variable back in CM.
   *
   * @static
   * @param {string} name The name of the variable to set
   * @param {*} value The value of the variable to set
   * @memberof Player
   */
  static SetVariable(name: string, value: any): void {
    fwi.RunScript('Player.SetVariable(' + name + ', ' + value.toString() + ');');
  }

  /**
   * Sets a single font variable back in CM.
   *
   * @static
   * @param {string} name The name of the variable to set
   * @param {TextFormatVariable} value The font dictionary object
   * @param {string} prefix App prefix if applicable
   * @memberof Player
   */
  static SetFontVariable(name: string, value: TextFormatVariable, prefix: string): void {
    Player.SetVariable(name, JSON.stringify(value).ReplaceIllegalChars(prefix));
  }

  /**
   * Sets multiple variables back in CM.
   *
   * @static
   * @param {{ [s: string]: string; }} keyValueDict An object that defines key/value pairs to use
   * @memberof Player
   */
  static SetManyVariables(keyValueDict: { [s: string]: string; }): void {
    Object.keys(keyValueDict).forEach((key) => {
      let value = keyValueDict[key];
      fwi.RunScript('Player.SetVariable(' + key + ',' + value + ');');
    })
  }

  /**
   * Creates a new dictionary with a font variable tempalte
   *
   * @static
   * @returns {TextFormatVariable} Font dictionary template
   * @memberof Player
   */
  static CreateFontVariable(): TextFormatVariable {
    const tfv: TextFormatVariable = new TextFormatVariable()
    return tfv;
  }

  /**
   * Sets the language of the build.
   * @param {String} languageCode The language code to use
   * @return {Void}
   */
  static SetLanguage(languageCode: string): void {
      fwi.RunScript('Player.SetLanguage(' + languageCode + ');');
  }

  /**
   * Sets the language of the build.
   * @param {String} name The language code to use
   * @return {Void}
   */
  static ToggleVariable(name: string): void  {
      fwi.RunScript('Player.ToggleVariable(' + name + ');');
  }

  /**
   * Plays a template
   *
   * @static
   * @param {string} name The name of the template to play
   * @param {number} templateIndex The position of the desired template instance in the network overview
   * @memberof Player
   */
  static PlayTemplate(name: string, templateIndex: number): void {
      fwi.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex.toString() : '') + ');');
  }

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
  static ResetIdleTimer(): void {
    fwi.RunScript('Player.ResetIdleTimer();');
  }

  /**
   * Restarts the player
   * @return {Void}
   */
  static Restart(): void {
    fwi.RunScript('Player.Restart();');
  }

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
  static UnsetVariable(name: string): void {
    fwi.RunScript('Player.UnsetVariable(' + name + ');');
  }

}