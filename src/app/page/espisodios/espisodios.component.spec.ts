import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspisodiosComponent } from './espisodios.component';

describe('EspisodiosComponent', () => {
  let component: EspisodiosComponent;
  let fixture: ComponentFixture<EspisodiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspisodiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
