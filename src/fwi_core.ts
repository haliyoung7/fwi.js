import "./string";
/**
 * Load the FWI Javascript base depending on if you are using a browser or windows player.
 */
export const FWI = window.frameElement ? window.frameElement.parentNode.FWI : window.external;