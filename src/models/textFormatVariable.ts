import { IFontOptions } from "../interfaces/ITextFormatVariable"

export class TextFormatVariable implements IFontOptions {

    constructor(
        public fontFamily: string = 'Arial',
        public fontSize: number = 9.000000E+00,
        public fontStretch: null = null,
        public fontStyle: null = null,
        public fontWeight: null = null,
        public textDecoration: null = null,
        public fontColor: string = '#FF000000',
        public textAlignment: string = 'TopLeft',
        public textAutoSize: boolean = false,
        public textSizeBehavior: string = 'Fixed',
        public fontLeading: number = 0,
        public frame: object = {
            type: null,
            backgroundColor: "#00424242",
            borderColor: "#008BD5B5"
        }
    ) {

    }
}