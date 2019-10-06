import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product, ProductService, Comment } from '../shared/product.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {
  private product: Product
  private comments: Comment[]

  constructor(
    private routerInfo: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId: number = +this.routerInfo.snapshot.params['productId']
    this.product = this.productService.getProduct(productId)
    this.comments = this.productService.getComments(productId)
  }
}
