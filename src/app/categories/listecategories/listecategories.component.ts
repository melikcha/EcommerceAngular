import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {
  categories: Categorie[]
  constructor(private catserv: CategorieService) { }
  ngOnInit() {
    this.ListCat()
  }
  ListCat() {
    return this.catserv.ListCategories().subscribe(data =>
      this.categories = data),
      (err: any) => console.log(err)
  }


}


