import { HttpModule, Module } from '@nestjs/common';
import { ProductController } from '../product/product.controller';
import { ProductService } from '../product/product.service';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'gamer-app'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, ProductController],
  providers: [ProductService],
})
export class AppModule {}
