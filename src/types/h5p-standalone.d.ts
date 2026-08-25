declare module 'h5p-standalone' {
  export interface H5POptions {
    h5pJsonPath: string;
    frameJs?: string;
    frameCss?: string;
    librariesPath?: string;
    contentUserData?: unknown;
    user?: {
      name?: string;
      mail?: string;
    };
    [key: string]: unknown;
  }

  export class H5P {
    constructor(element: HTMLElement | null, options: H5POptions);
  }
}
