import { Formatter } from "./formatter";

export class DefaultFormatter extends Formatter {
    format(source: string): string {
        return source;
    }
}
