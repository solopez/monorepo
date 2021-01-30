import { HttpModule, Module } from '@nestjs/common';
import { ProductController } from '../product/product.controller';
import { ProductService } from '../product/product.service';
import { AppController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductController],
  providers: [ProductService],
})
export class AppModule {}
