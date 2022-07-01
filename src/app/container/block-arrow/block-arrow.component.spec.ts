import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockArrowComponent } from './block-arrow.component';

describe('BlockArrowComponent', () => {
  let component: BlockArrowComponent;
  let fixture: ComponentFixture<BlockArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
