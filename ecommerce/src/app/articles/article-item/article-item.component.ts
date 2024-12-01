import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {

  public article: Article;

  constructor() {}

  ngOnInit() {
    this.article = {
      name : "Agua Font Vella 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/000127_00_1.jpg",
      price : 0.64,
      isOnSale: true,
      quantityInCart: 0
    }
  }

  addInCart() {
    this.article.quantityInCart++;
  }

  removeInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
