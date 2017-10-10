import { Player } from './player';

class Helpers {

    constructor() {

    }

    static poller(var_name, callback, timeout = 50) {

        if (Player.GetVariable(var_name) != 'Undefined') {
            callback();
            Player.SetVariable(var_name, 'Undefined');
        };

        const timeout_function = () => {
            Helpers.poller(var_name, callback, timeout);
        }

        window.setTimeout(timeout_function, timeout);

    }
}

module.exports = Helpers;