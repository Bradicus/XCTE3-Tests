import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestslComponent } from './testsl.component';

describe('TestslComponent', () => {
  let component: TestslComponent;
  let fixture: ComponentFixture<TestslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestslComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
