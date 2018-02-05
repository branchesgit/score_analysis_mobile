/**
 * 定义列名描述接口类；
 */
import AbstractColumn from "./AbstractColumn";

export default abstract class AbstractDescription extends AbstractColumn {
    abstract getDescription(): string;
}
