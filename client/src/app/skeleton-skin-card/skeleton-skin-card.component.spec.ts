import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSkinCardComponent } from './skeleton-skin-card.component';

describe('SkeletonSkinCardComponent', () => {
  let component: SkeletonSkinCardComponent;
  let fixture: ComponentFixture<SkeletonSkinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonSkinCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonSkinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
