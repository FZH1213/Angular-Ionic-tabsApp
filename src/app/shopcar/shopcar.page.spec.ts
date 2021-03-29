import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopcarPage } from './shopcar.page';

describe('ShopcarPage', () => {
  let component: ShopcarPage;
  let fixture: ComponentFixture<ShopcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
