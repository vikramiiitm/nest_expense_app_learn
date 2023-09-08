import { Controller, Param, Body, Get, Delete, Patch, Post} from "@nestjs/common";
import { data, ReportType } from "./data";
import { v4 as uuid } from "uuid";

@Controller("report/:type/")
export class AppController {

  @Get()
  getAllREports(@Param('type') type: string) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }

  @Get(":id")
  getReportById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    console.log(id, type, reportType)
    return data.report
    .filter((report) => report.type === reportType)
    .find((report) => report.id === id)
  }

  @Post()
  createReport(
    @Param("type") type: string,
    @Body() {amount, source}: { amount: number;source: string }
  ) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;

    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType
    }
    data.report.push(newReport)
    return reportType
  }
  @Patch(":id")
  updateReportById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    return {"Updated Report": 1}
  }
  @Delete(":id")
  deleteReportById(
    @Param('id') id: string
  ) {
    return {"Deleted Report":1}
  }
}