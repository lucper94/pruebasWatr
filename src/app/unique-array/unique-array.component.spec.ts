import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueArrayComponent } from './unique-array.component';

describe('UniqueArrayComponent', () => {
  let component: UniqueArrayComponent;
  let fixture: ComponentFixture<UniqueArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
