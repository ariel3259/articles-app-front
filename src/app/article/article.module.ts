import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ArticleService } from './article.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ArticleFormComponent,
    ArticleComponent,
  ],
  providers: [
    ArticleService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    NgbAlertModule
  ]
})
export class ArticleModule { }
