/**
 * This method replaces illegal charecters in the font strings so they aren't
 * inturpreted by javascript!
 */


declare interface String {
  ReplaceIllegalChars(prefix: string): string;
  startsWith(prefix: string): boolean;
}