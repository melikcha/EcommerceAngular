import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseurl = "http://localhost:3001/api/articles"

  constructor(private http: HttpClient) { }
  getarticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseurl);
  }
  DeleteArticle(id: object): Observable<Article> {
    return this.http.delete<Article>(this.baseurl + '/' + id);

  }
  AddArticle=(art:Article)=>
  {
    return this.http.post<Article>(this.baseurl,art)
  }
  GetarticleByID(id:object): Observable <Article>
  {
   return this.http.get<Article>(this.baseurl+'/' +id)
  }
ModifierArticle(id:object,art:Article):Observable<Article>
{
  return this.http.put<Article>(this.baseurl + '/' + id,art)
}

  /*AddArticle(art:Article): Observable <Article> {
    return this.http.post<Article>(this.baseurl,art)
}*/
}
