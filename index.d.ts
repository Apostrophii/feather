interface IconData {
  [key: string]: any;
  toString: () => string;
  toSvg: (attrs?: Object) => string;
}

interface Feather {
  icons: { [name: string]: IconData };
  replace: (attrs?: Object) => void;
}

export const f: Feather;
