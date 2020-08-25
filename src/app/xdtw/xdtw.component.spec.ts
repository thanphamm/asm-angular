import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdtwComponent } from './xdtw.component';

describe('XdtwComponent', () => {
  let component: XdtwComponent;
  let fixture: ComponentFixture<XdtwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdtwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
