import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkindexComponent } from './bkindex.component';

describe('BkindexComponent', () => {
  let component: BkindexComponent;
  let fixture: ComponentFixture<BkindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BkindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
