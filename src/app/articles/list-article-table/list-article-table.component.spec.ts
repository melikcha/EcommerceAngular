import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleTableComponent } from './list-article-table.component';

describe('ListArticleTableComponent', () => {
  let component: ListArticleTableComponent;
  let fixture: ComponentFixture<ListArticleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArticleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
