import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCodesHomeComponent } from './green-codes-home.component';

describe('GreenCodesHomeComponent', () => {
  let component: GreenCodesHomeComponent;
  let fixture: ComponentFixture<GreenCodesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenCodesHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCodesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
