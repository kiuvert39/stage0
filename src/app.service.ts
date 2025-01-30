import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTaskInfo(): any {
    return {
      email: 'kliuvertegbe2gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/yourusername/your-repo',
    };
  }
}
