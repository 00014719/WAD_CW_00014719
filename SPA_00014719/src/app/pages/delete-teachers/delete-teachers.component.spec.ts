import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeachersComponent } from './delete-teachers.component';

describe('DeleteTeachersComponent', () => {
  let component: DeleteTeachersComponent;
  let fixture: ComponentFixture<DeleteTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
