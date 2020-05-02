import { async, TestBed } from '@angular/core/testing';
import { StorybookModule } from './storybook.module';

describe('StorybookModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorybookModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StorybookModule).toBeDefined();
  });
});
