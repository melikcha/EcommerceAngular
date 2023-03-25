import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ListArticleTableComponent } from './articles/list-article-table/list-article-table.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListearticlesComponent } from './articles/listearticles/listearticles.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { ListescategorieComponent } from './scategorie/listescategorie/listescategorie.component';

const routes: Routes = [
  {path:"larticles",component:ListearticlesComponent},
  {path:"lcategories",component:ListecategoriesComponent},
  {path:"lscategories",component:ListescategorieComponent},
  {path:"listartcard",component:ListarticlescardComponent},
  {path:"insertArt",component:InsertarticleComponent},
  {path:"listArticleTable",component:ListArticleTableComponent},
  {path:"editarticle/:id",component:ModifarticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
