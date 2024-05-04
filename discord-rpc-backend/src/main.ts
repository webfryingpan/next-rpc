import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BaseExceptionFilter } from "./exception-filters/base-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalFilters(new BaseExceptionFilter());
  await app.listen(process.env.SERVER_PORT || 3000);
}

bootstrap();
