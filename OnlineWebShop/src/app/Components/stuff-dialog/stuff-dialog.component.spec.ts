import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffDialogComponent } from './stuff-dialog.component';

describe('StuffDialogComponent', () => {
  let component: StuffDialogComponent;
  let fixture: ComponentFixture<StuffDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
