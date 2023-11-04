import { Controller, Param, Body, Get, Delete, Patch, Post, ParseIntPipe, ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common";
import { data, ReportType } from "./data";
import { AppService } from "./app.service";

@Controller("report/:type/")
export class AppController {

  constructor(
    private readonly appService: AppService
  ){}

  @Get()
  getAllREports(@Param('type') type: string) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReportsService(reportType)
  }

  @Get(":id")
  getReportById(
    @Param('type') type: string,
    @Param('id', ParseUUIDPipe) id: string
  ) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportByIdService(reportType, id)

  }

  @Post()
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() {amount, source}: { amount: number;source: string }
  ) {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    this.appService.createReportService(reportType,amount, source)

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