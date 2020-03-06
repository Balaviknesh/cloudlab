import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
        .setTitle('cloudlab-api')
        .setDescription('cloudlab-api')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/swagger-ui', app, document);

    await app.listen(8080);
}

bootstrap();
