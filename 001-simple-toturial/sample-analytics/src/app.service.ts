import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log(
      '🚀 ~ file: app.service.ts:12 ~ AppService ~ handleUserCreated ~ data:',
      data,
    );
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
