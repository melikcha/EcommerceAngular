import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent {
  articles: Article[]
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
