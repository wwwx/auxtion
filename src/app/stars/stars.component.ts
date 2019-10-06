import { Component, OnInit, Input } from '@angular/core'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.styl']
})
export class StarsComponent implements OnInit {
  private stars: boolean[]

  @Input()
  private rating = 0

  constructor() {}

  ngOnInit() {
    this.stars = []

    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
  }
}
