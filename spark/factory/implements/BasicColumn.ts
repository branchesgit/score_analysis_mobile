import IBasicColumn from "../interface/IBasicColumn";

export default class BasicColumn implements IBasicColumn {

    getBasicColumns(): string[] | any[] {
        const columns = [
            ["Student_GradeID", "Student_Grade"],
            "User_SchoolID",
            "User_UserID",
            "User_UserName",
            "Student_Name",
            "Student_gender",
            "subjChoice_adoptedComb"
        ];

        return columns;
    }
}
