import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomadaLyberdadeComponent } from './pomada-lyberdade.component';

describe('PomadaLyberdadeComponent', () => {
  let component: PomadaLyberdadeComponent;
  let fixture: ComponentFixture<PomadaLyberdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomadaLyberdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomadaLyberdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
