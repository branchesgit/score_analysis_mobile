import IChoiceTotalScore from "./IChoiceTotalScore";
import ITotalScore from "./ITotalScore";
import IHandleSQL from "./IHandleSQL";

export default abstract class IVariousTotalScoreTable implements IHandleSQL {

    abstract createChoiceTotalScore(): IChoiceTotalScore;

    abstract createTotalScore(): ITotalScore;

    abstract getSql(...rest);

    abstract getTotalName(): string;
}
