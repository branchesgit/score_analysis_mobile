import IHandleSQL from "./IHandleSQL";

export default abstract class IFilterTable implements IHandleSQL {
    abstract getFilterTableName(sql: string);

    abstract getSql(...rest);
}
