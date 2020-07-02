import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  action(number: number) : any {
    // TODO write some code here

    return { number }
  }
}
