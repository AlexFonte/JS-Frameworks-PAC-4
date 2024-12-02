import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent{

  @Input() public article: Article;
  constructor() {}

  addInCart() {
    this.article.quantityInCart++;
  }

  removeInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
