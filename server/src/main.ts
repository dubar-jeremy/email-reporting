import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true}));
  const documentSwaggerConfig = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, documentSwaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  const config = app.get<ConfigService>(ConfigService);

  await app.listen(config.get('app.port'));
}
bootstrap();
