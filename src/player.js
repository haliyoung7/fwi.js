const FWI = require('./fwi_core.js');

export class Player{
  constructor() {

  }

  /**
   * Retrieves the value for a single CM variable.
   * @param {String} name A variable name to collect
   * @return {Number|String} An appropriately casted value from the variable
   */
  static GetVariable(name) {
    return FWI.MarkupValue('{&var:' + name + '}');
  }

  /**
   * Retrieves values for multiple CM variables.
   * @param {Array} nameArray An array of variable names to collect
   * @return {Array} An array of values that correspond to the requested variables
   */
  static GetManyVariables(nameArray) {
      const values = [];
      for (let [k,v] of nameArray.entries()) {
        values.push(FWI.MarkupValue('{&var:' + v + '}'));
      }
      return values;
  }

  /**
   * Sets a single variable back in CM.
   * @param {String} name The name of the variable to set
   * @param {String} value The value of the variable to set
   * @return {Void}
   */
  static SetVariable(name, value) {
      FWI.RunScript('Player.SetVariable(' + name + ', ' + value + ');');
  }

  /**
   * Sets multiple variables back in CM.
   * @param {Object} keyValueDict An object that defines key/value pairs to use
   * @return {Void}
   */
  static SetManyVariables(keyValueDict) {
      for (let [k, v] of keyValueDict) {
        FWI.RunScript('Player.SetVariable(' + k + ',' + v + ');');
      };
  }

  /**
   * Sets the language of the build.
   * @param {String} languageCode The language code to use
   * @return {Void}
   */
  static SetLanguage(languageCode) {
      FWI.RunScript('Player.SetLanguage(' + languageCode + ');');
  }

  /**
   * Sets the language of the build.
   * @param {String} languageCode The language code to use
   * @return {Void}
   */
  static ToggleVariable(name) {
      FWI.RunScript('Player.ToggleVariable(' + name + ');');
  }

  /**
   * Plays a template
   * @param {String} name The name of the template to play
   * @param {String|Int} templateIndex The position of the desired template instance in the network overview
   * @return {Void}
   */
  static PlayTemplate(name, templateIndex) {
      FWI.RunScript('Player.PlayTemplate(' + name + (templateIndex ? ', ' + templateIndex : '') + ');');
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

    FWI.RunScript(command);

  }

  /*
   * Resets the idle timer
   * @return {Void}
   */
  static ResetIdleTimer() {
    FWI.RunScript('Player.ResetIdleTimer();');
  }

  /*
   * Restarts the player
   * @return {Void}
   */
  static Restart() {
    FWI.RunScript('Player.Restart();');
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
    };

    command += ');';

    FWI.RunScript(command);
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
    };

    for (let [k,v] of o) {
      command = (k != 'msg' ? (command + ',' + k + '=' + v) : '');
    };

    command += ');';

    FWI.RunScript(command);
  }

  /*
   * Unsets a variable
   * @param {String} name Variable name you wish to clear
   * @return {Void}
   */
  static UnsetVariable(name) {
    FWI.RunScript('Player.UnsetVariable(' + name + ');');
  }

}