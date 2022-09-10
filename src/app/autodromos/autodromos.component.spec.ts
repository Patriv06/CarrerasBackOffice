import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodromosComponent } from './autodromos.component';

describe('AutodromosComponent', () => {
  let component: AutodromosComponent;
  let fixture: ComponentFixture<AutodromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutodromosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutodromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
