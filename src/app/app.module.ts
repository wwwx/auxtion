import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { FilterPipe } from './pipe/filter.pipe'

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
    HomeComponent,
    FilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
