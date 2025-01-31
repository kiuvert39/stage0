import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTaskInfo(): any {
    return {
      email: 'kliuvertegbe@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/kiuvert39/stage0',
    };
  }
}
