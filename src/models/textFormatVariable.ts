interface IFontFrame {
    type: string | null;
    backgroundColor: string;
    borderColor: string;
}

export interface IFontOptions {
    fontFamily: string;
    fontSize: number;
    fontStretch: string | null;
    fontWeight: string | null;
    textDecoration: string | null;
    fontColor: string;
    textAlignment: string;
    textAutoSize: boolean;
    textSizeBehavior: string;
    fontLeading: number;
    frame: IFontFrame | object | null;
}

