import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from '@gamer/search';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
