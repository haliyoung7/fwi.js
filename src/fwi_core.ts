import "./string";
/**
 * Load the FWI Javascript base depending on if you are using a browser or windows player.
 */


export const fwi = window.frameElement ? (window.frameElement.parentNode as any).FWI : window.external;