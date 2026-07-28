import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";

export interface ContactMessage extends CreateContactDto {
  id: string;
  createdAt: Date;
}

@Injectable()
export class ContactService {
  // In-memory storage to keep this simple to run locally.
  // TODO: swap this array for a real database (e.g. Postgres + Prisma)
  // once you're ready to persist messages beyond a server restart.
  private messages: ContactMessage[] = [];

  create(dto: CreateContactDto): ContactMessage {
    const message: ContactMessage = {
      ...dto,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    this.messages.push(message);

    // TODO: send yourself an email/WhatsApp notification here so you
    // see new messages immediately instead of checking the server.
    console.log("New contact message:", message);

    return message;
  }

  findAll(): ContactMessage[] {
    return this.messages;
  }
}
