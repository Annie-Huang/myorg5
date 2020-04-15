import { async, TestBed } from '@angular/core/testing';
import { FeatureMainModule } from './feature-main.module';

describe('FeatureMainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureMainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureMainModule).toBeDefined();
  });
});
