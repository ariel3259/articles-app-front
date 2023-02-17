import { Component, OnInit } from '@angular/core';
import { Article } from '../types/Article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  data: Article[] = [];
  keys: string[] = [];
  constructor(
    private readonly articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.data = this.articleService.getAll();
    this.keys = Object.keys(Article.empty());
    console.log(this.keys);
  }

}
