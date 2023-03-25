import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { Scategorie } from 'src/app/models/scategorie';

@Component({
  selector: 'app-insertarticle',
  templateUrl: './insertarticle.component.html',
  styleUrls: ['./insertarticle.component.css']
})
export class InsertarticleComponent {
  article=new Article
  scategories:Scategorie[]
  constructor(private artserv:ArticleService,private router:Router,private scatserv:ScategorieService ){}
  ngOnInit(){
    this.loadscategorie()
  }
  loadscategorie(){
    return this.scatserv.getscategorie().subscribe(data =>
      this.scategories= data), (error: any) => console.log(error)

  }
  ajoutproduit=()=>{
    return this.artserv.AddArticle(this.article).subscribe(data=>this.router.navigate(['/larticles']))
    }
   
  ajoutarticle=()=>{
    return this.artserv.AddArticle(this.article).subscribe (data=>this.router.navigate(['/larticles']))
  }
}
