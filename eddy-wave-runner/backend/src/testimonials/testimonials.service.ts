import { Injectable } from "@nestjs/common";

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
}

@Injectable()
export class TestimonialsService {
  // TODO: replace these with real reviews, or swap this for a database
  // once you're collecting feedback regularly.
  private testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Add a customer name",
      rating: 5,
      review: "Add a real review here once you start collecting feedback.",
    },
  ];

  findAll(): Testimonial[] {
    return this.testimonials;
  }

  create(data: Omit<Testimonial, "id">): Testimonial {
    const testimonial: Testimonial = { ...data, id: crypto.randomUUID() };
    this.testimonials.push(testimonial);
    return testimonial;
  }
}
