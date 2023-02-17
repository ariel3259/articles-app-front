import { Injectable } from '@angular/core';
import { Article } from '../types/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  data: Article[] = [];
  constructor() { }

  getAll(): Article[] {
    return this.data;
  }

  save(article: Article) {
    article.id = this.data.length + 1;
    this.data.push(article);
    return article;
  }
}
