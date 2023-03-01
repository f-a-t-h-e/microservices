import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('🚀 AppService ~ handleUserCreated ~ data:', data);
    // you can here email the user for example.
  }
}
