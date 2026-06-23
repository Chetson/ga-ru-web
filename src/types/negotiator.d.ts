declare module 'negotiator' {
  interface Headers {
    [key: string]: string | undefined;
  }

  interface RequestLike {
    headers: Headers;
  }

  class Negotiator {
    constructor(request: RequestLike);
    languages(available?: string[]): string[];
    mediaTypes(available?: string[]): string[];
    encodings(available?: string[]): string[];
    charsets(available?: string[]): string[];
  }

  export = Negotiator;
}
