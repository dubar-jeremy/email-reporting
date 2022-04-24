import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendReporting() {
    await this.mailerService.sendMail({
      to: 'dubar.jeremy@gmail.com',
      subject: 'Welcome to Nice App! Confirm your Email',
      text: 'Hello world?',
    });
  }
}
