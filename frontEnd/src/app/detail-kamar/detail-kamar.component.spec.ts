import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKamarComponent } from './detail-kamar.component';

describe('DetailKamarComponent', () => {
  let component: DetailKamarComponent;
  let fixture: ComponentFixture<DetailKamarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKamarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
