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
    id: "uuid1",
    source: "Salary",
    amount: 40000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id: "uuid2",
    source: "Salary",
    amount: 70000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id: "uuid3",
    source: "Salary",
    amount: 100000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})

data.report.push({
    id: "uuid4",
    source: "Salary",
    amount: 25000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE
})

data.report.push({
    id: "uuid5",
    source: "Salary",
    amount: 7000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE
})