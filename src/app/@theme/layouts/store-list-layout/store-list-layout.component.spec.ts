import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListLayoutComponent } from './store-list-layout.component';

describe('StoreListLayoutComponent', () => {
  let component: StoreListLayoutComponent;
  let fixture: ComponentFixture<StoreListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreListLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
