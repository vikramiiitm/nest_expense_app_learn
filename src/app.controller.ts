import { Controller, Get, Delete, Patch, Post} from "@nestjs/common";

@Controller("report/:type/")
export class AppController {

  @Get()
  getAllREports() {
    return {"reports":1};
  }

  @Get(":id")
  getReportById() {
    return {"reportById": 'id'}
  }

  @Post()
  createReport() {
    return {"Created":1}
  }
  @Patch(":id")
  updateReportById() {
    return {"Updated Report": 1}
  }
  @Delete(":id")
  deleteReportById() {
    return {"Deleted Report":1}
  }
}