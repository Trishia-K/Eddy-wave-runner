import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";

import { TestimonialsModule } from "./testimonials/testimonials.module";

@Module({
  imports: [ContactModule,  TestimonialsModule],
})
export class AppModule {}
