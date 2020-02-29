import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemLineComponent } from './order-item-line.component';

describe('OrderItemLineComponent', () => {
  let component: OrderItemLineComponent;
  let fixture: ComponentFixture<OrderItemLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
