import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../../types/Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input('articles') article: Article[] = []
  constructor(
    private modalService: NgbModal,
    private readonly articleService: ArticleService
    ) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  save(form: NgForm){
    console.log(form.valid);
  }
}
