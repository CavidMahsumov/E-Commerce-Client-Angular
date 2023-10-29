import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImageProductDialogComponent } from './select-image-product-dialog.component';

describe('SelectImageProductDialogComponent', () => {
  let component: SelectImageProductDialogComponent;
  let fixture: ComponentFixture<SelectImageProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectImageProductDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectImageProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
