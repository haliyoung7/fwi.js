"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./string");
/**
 * Load the FWI Javascript base depending on if you are using a browser or windows player.
 */
exports.FWI = window.frameElement ? window.frameElement.parentNode.FWI : window.external;
