import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanligiaovienComponent } from './quanligiaovien.component';

describe('QuanligiaovienComponent', () => {
  let component: QuanligiaovienComponent;
  let fixture: ComponentFixture<QuanligiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuanligiaovienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanligiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
