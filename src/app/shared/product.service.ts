import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(
      1,
      '第一个商品',
      109.88,
      3.5,
      '这是第一个商品，是我在学习慕课网Angular入门实战创建的',
      ['电子产品', '硬件设备']
    ),
    new Product(
      2,
      '第二个商品',
      199.88,
      2,
      '这是第二个商品，是我在学习慕课网Angular入门实战创建的',
      ['硬件设备']
    ),
    new Product(
      3,
      '第三个商品',
      170.88,
      4.2,
      '这是第三个商品，是我在学习慕课网Angular入门实战创建的',
      ['电子产品', '硬件设备']
    ),
    new Product(
      4,
      '第四个商品',
      88.88,
      2.5,
      '这是第四个商品，是我在学习慕课网Angular入门实战创建的',
      ['硬件设备']
    ),
    new Product(
      5,
      '第五个商品',
      190.88,
      4.8,
      '这是第五个商品，是我在学习慕课网Angular入门实战创建的',
      ['硬件设备']
    ),
    new Product(
      6,
      '第六个商品',
      139.88,
      3,
      '这是第六个商品，是我在学习慕课网Angular入门实战创建的',
      ['电子产品', '硬件设备']
    )
  ]

  private comments: Comment[] = [
    new Comment(1, 1, '2018-09-20 19:09:35', 'Mark', 3.3, 'very good.'),
    new Comment(2, 1, '2018-06-03 13:09:38', 'Mark', 4.3, 'teast very good.'),
    new Comment(3, 1, '2018-05-13 15:09:37', 'Mark', 2.3, 'emmm, perfect.'),
    new Comment(4, 2, '2018-10-20 19:09:39', 'Mark', 3.3, 'very good.')
  ]

  constructor() {}

  getProducts() {
    return this.products
  }

  getProduct(id: number): Product {
    return this.products.find(product => {
      return product.id === id
    })
  }

  getComments(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => {
      return comment.productId === id
    })
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
