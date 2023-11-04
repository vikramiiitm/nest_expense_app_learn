import { ReportType, data } from "./data";
import { Injectable } from "@nestjs/common/decorators";
import { v4 as uuid } from "uuid";

@Injectable()
export class AppService {

  getAllReportsService(type: ReportType) {
    return data.report.filter((report) => {
      return report.type === type;
    });
  }

  getReportByIdService(type: ReportType, id: string) {
    return data.report
    .filter((report) => report.type === type)
    .find((report) => report.id == id)
  }

  createReportService(type: ReportType, amount: number, source: string) {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type
    }
    data.report.push(newReport)
    return "created" 
  }

}