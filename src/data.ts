import { UUID } from "crypto";
import { v4 as uuid } from "uuid";

export const data: Data = {
        report: []
}

export enum ReportType {
    INCOME= "income",
    EXPENSE= "expense"
}

// let's use interface to type objects
interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
}


data.report.push({
    id: uuid(),
    source: "Salary",
    amount: 40000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id: uuid(),
    source: "Salary",
    amount: 70000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id:uuid(),
    source: "Salary",
    amount: 100000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id: uuid(),
    source: "Salary",
    amount: 25000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE
})