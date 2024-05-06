import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ProfessionalModule } from './professional/professional.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [UserModule, ProfessionalModule, ServiceModule],
})
export class AppModule {}
