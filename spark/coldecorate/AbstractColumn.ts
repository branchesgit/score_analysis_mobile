/**
 * 定义返回列名接口；
 */
export default abstract class  AbstractColumn {
    description: string = "Unknown Column";

    abstract getColumnName(): string;
    getDescription(): string {
        return this.description;
    }
}
