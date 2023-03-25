import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';



@Component({
  selector: 'app-insertcategorie',
  templateUrl: './insertcategorie.component.html',
  styleUrls: ['./insertcategorie.component.css']
})
export class InsertcategorieComponent {
  article:Article
  constructor(private artserv:ArticleService){}

}
