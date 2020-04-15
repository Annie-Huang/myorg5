import { async, TestBed } from '@angular/core/testing';
import { FeatureAboutModule } from './feature-about.module';

describe('FeatureAboutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureAboutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureAboutModule).toBeDefined();
  });
});
