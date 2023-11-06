import { ReportType, data } from "./data";
import { Injectable } from "@nestjs/common/decorators";
import { v4 as uuid } from "uuid";
import { ReportResponseDto } from "./dtos/report.dto";

interface Report {amount: number, source: string}

interface updateReport {
  amount?: number,
  source?: string
}

@Injectable()
export class AppService {

  getAllReportsService(type: ReportType): ReportResponseDto[] {
    return data.report
    .filter((report) => report.type === type)
    .map((report) => new ReportResponseDto(report)); //convert the reposrt list to ReportReponseDTO
  }

  getReportByIdService(type: ReportType, id: string): ReportResponseDto {
    const report =  data.report
    .filter((report) => report.type === type)
    .find((report) => report.id == id)

    if (!report) return;

    return new ReportResponseDto(report);
  }

  createReportService(type: ReportType, body: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)
    return new ReportResponseDto(newReport);
  }
  updateReportService(type: ReportType, id: string, body: updateReport): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id == id)

    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    const new_data = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    }
    data.report[reportIndex] = new_data
    return new ReportResponseDto(data.report[reportIndex])
  }


}