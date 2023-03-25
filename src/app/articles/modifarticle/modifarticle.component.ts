import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifarticleComponent implements OnInit {
  _id:object;

  article:Article=new Article()
  constructor(private artserv:ArticleService, private router :Router, private route:ActivatedRoute){
    
  }
   ngOnInit() {
    this._id=this.route.snapshot.params['id'];
    this.artserv.GetarticleByID(this._id).subscribe(data=>this.article=data),(error: any) => console.log(error)
  }
  UnArticle(p:object) {
    return this.artserv.GetarticleByID(p).subscribe(data =>
      this.article = data), (error: any) => console.log(error)
  }
  
  Modifierarticle=()=>{
    return this.artserv.ModifierArticle(this._id,this.article).subscribe(data=>this.router.navigate(['larticles']))
  }

/*ajoutarticle=()=>{
    return this.artserv.AddArticle(this.article).subscribe (data=>this.router.navigate(['/larticles']))
    }
    Getarticle(id:object): Observable <Article>
  {
   return this.http.get<Article>(this.baseurl+'/' +id)
  }
ModifierArticle(id:object,art:Article):Observable<Article>
{
  return this.http.put<Article>(this.baseurl + '/' + id,art)
}
    */
}
