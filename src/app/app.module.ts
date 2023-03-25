import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListearticlesComponent } from './articles/listearticles/listearticles.component';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';
import { InsertscategorieComponent } from './scategorie/insertscategorie/insertscategorie.component';
import { ListescategorieComponent } from './scategorie/listescategorie/listescategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListArticleTableComponent } from './articles/list-article-table/list-article-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListecategoriesComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListearticlesComponent,
    InsertarticleComponent,
    ModifarticleComponent,
    ModifscategorieComponent,
    InsertscategorieComponent,
    ListescategorieComponent,
    ListarticlescardComponent,
    ListArticleTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
