import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreePage } from './free.page';

describe('FreePage', () => {
  let component: FreePage;
  let fixture: ComponentFixture<FreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
