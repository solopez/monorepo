import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'games-api';

  app.enableCors();

  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Games API')
    .setDescription('API para gestionar los juegos (búsquedas, detalles, etc.)')
    .setVersion('1.0')
    .addTag('games')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(globalPrefix, app, document);

  const port = process.env.PORT || 3333;

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
