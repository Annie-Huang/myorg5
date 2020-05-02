import { async, TestBed } from '@angular/core/testing';
import { UiDatepickerModule } from './ui-datepicker.module';

describe('UiDatepickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiDatepickerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiDatepickerModule).toBeDefined();
  });
});
