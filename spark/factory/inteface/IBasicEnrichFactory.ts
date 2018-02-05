import IBasicColumn from "./IBasicColumn";
import IBasicTable from "./IBaiscTable";
import IVariousTotalScoreTable from "./IVariousTotalScoreTable";
import IEnrichTalbe from "./IEnrichTable";

export default interface IBasicEnrichFactory {
    createBasicColumn(): IBasicColumn;

    createBasicSubjsTable(): IBasicTable;

    createVariousTable(): IVariousTotalScoreTable;

    createEnrichTable(): IEnrichTalbe;
}
