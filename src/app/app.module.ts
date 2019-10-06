import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { CarouselComponent } from './carousel/carousel.component'
import { ProductComponent } from './product/product.component'
import { StarsComponent } from './stars/stars.component'
import { SearchComponent } from './search/search.component'
import { DetailComponent } from './detail/detail.component'
import { HomeComponent } from './home/home.component'
import { ProductService } from './shared/product.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
