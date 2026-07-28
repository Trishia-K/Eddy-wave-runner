import { Body, Controller, Get, Post } from "@nestjs/common";
import { TestimonialsService } from "./testimonials.service";

@Controller("testimonials")
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  findAll() {
    return this.testimonialsService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; rating: number; review: string }) {
    return this.testimonialsService.create(body);
  }
}
