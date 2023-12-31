import { Controller, Param, Body, Get, Delete, Patch, Post, ParseIntPipe, ParseUUIDPipe, ParseEnumPipe} from "@nestjs/common";
import { ReportType } from "./data";
import { AppService } from "./app.service";
import { CreateReportDTO, ReportResponseDto, UpdateReportDTO } from "./dtos/report.dto";

@Controller("report/:type/")
export class AppController {

  constructor(
    private readonly appService: AppService
  ){}

  @Get()
  getAllREports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto[] {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReportsService(reportType)
  }

  @Get(":id")
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string
  ):ReportResponseDto {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportByIdService(reportType, id)

  }

  @Post()
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Body() body: CreateReportDTO
  ):ReportResponseDto {
    console.log('body', body)
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReportService(reportType, body)

  }
  @Patch(":id")
  updateReportById(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: UpdateReportDTO,
    ): ReportResponseDto {
      console.log('body', body)
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;
    console.log('update calling')
    return this.appService.updateReportService(reportType, id, body)

  }
  @Delete(":id")
  deleteReportById(
    @Param('id') id: string
  ) {
    return {"Deleted Report":1}
  }
}