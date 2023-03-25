import { Component } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-listescategorie',
  templateUrl: './listescategorie.component.html',
  styleUrls: ['./listescategorie.component.css']
})
export class ListescategorieComponent {
  souscategorie: Scategorie[];
  constructor(private catserv:ScategorieService){}
    ngOnInit(){
      return this.catserv.getscategorie().subscribe(data =>
        this.souscategorie=data),(err:any)=>console.log(err)

    }

  }

  


