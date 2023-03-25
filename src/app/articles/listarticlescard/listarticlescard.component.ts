import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-listarticlescard',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
  articles: Article[]
  constructor(private artserv: ArticleService) { }
  ngOnInit() {
    this.Listart()
  }
  Listart() {
    return this.artserv.getarticles().subscribe(data =>
      this.articles = data), (error: any) => console.log(error)
  }
}
