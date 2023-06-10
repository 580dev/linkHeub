import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixInteretComponent } from './choix-interet.component';

describe('ChoixInteretComponent', () => {
  let component: ChoixInteretComponent;
  let fixture: ComponentFixture<ChoixInteretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixInteretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
