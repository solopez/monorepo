import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolButtonComponent } from './sol-button.component';

describe('SolButtonComponent', () => {
  let component: SolButtonComponent;
  let fixture: ComponentFixture<SolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
