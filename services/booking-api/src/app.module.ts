import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';

// The database connects to a real Postgres instance, which isn't available
// when Jest runs unit/e2e tests (NODE_ENV=test), so it's skipped there.
const databaseImports =
  process.env.NODE_ENV === 'test' ? [] : [DatabaseModule];

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...databaseImports,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
