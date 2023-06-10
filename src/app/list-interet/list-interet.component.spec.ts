import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInteretComponent } from './list-interet.component';

describe('ListInteretComponent', () => {
  let component: ListInteretComponent;
  let fixture: ComponentFixture<ListInteretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInteretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
