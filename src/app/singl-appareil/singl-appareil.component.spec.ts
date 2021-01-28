import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglAppareilComponent } from './singl-appareil.component';

describe('SinglAppareilComponent', () => {
  let component: SinglAppareilComponent;
  let fixture: ComponentFixture<SinglAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
