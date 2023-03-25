import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-list-article-table',
  templateUrl: './list-article-table.component.html',
  styleUrls: ['./list-article-table.component.css']
})
export class ListArticleTableComponent {
  articles: Article[]
  p:Article
  constructor(private artserv: ArticleService) { }
  ngOnInit() {
    this.Listart()
  }
  Listart() {
    return this.artserv.getarticles().subscribe(data =>
      this.articles = data), (error: any) => console.log(error)
  }
 
  suppArticle(id:object){
    return this.artserv.DeleteArticle(id).subscribe(data =>{this.Listart()})
  }

}
