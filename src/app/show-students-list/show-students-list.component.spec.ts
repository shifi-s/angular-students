import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentsListComponent } from './show-students-list.component';

describe('ShowStudentsListComponent', () => {
  let component: ShowStudentsListComponent;
  let fixture: ComponentFixture<ShowStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStudentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
