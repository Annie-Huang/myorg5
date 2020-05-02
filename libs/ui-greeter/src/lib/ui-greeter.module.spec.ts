import { async, TestBed } from '@angular/core/testing';
import { UiGreeterModule } from './ui-greeter.module';

describe('UiGreeterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiGreeterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiGreeterModule).toBeDefined();
  });
});
