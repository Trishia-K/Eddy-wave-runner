"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialsService = void 0;
const common_1 = require("@nestjs/common");
let TestimonialsService = class TestimonialsService {
    constructor() {
        this.testimonials = [
            {
                id: "1",
                name: "Add a customer name",
                rating: 5,
                review: "Add a real review here once you start collecting feedback.",
            },
        ];
    }
    findAll() {
        return this.testimonials;
    }
    create(data) {
        const testimonial = { ...data, id: crypto.randomUUID() };
        this.testimonials.push(testimonial);
        return testimonial;
    }
};
exports.TestimonialsService = TestimonialsService;
exports.TestimonialsService = TestimonialsService = __decorate([
    (0, common_1.Injectable)()
], TestimonialsService);
