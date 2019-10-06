import { Component, OnInit } from '@angular/core'
import { ProductService, Product } from '../shared/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts()
  }
}
