import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListescategorieComponent } from './listescategorie.component';

describe('ListescategorieComponent', () => {
  let component: ListescategorieComponent;
  let fixture: ComponentFixture<ListescategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListescategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListescategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
