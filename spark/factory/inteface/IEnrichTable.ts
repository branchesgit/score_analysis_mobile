import IHandlSQL from "./IHandleSQL";
import IHandleSQL from "./IHandleSQL";

export default abstract class IEnrichTable implements IHandleSQL {

    abstract getSql(...rest);

    abstract getEnrichTableName(): string;
}
