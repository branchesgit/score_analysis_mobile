import IHandleSQL from "./IHandleSQL";

export default abstract class IBaiscTalbe implements IHandleSQL {
    abstract getSql(...rest);

    abstract getBasicTableName(): string;
}
