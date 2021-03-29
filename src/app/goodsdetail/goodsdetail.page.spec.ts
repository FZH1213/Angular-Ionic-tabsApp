import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodsdetailPage } from './goodsdetail.page';

describe('GoodsdetailPage', () => {
  let component: GoodsdetailPage;
  let fixture: ComponentFixture<GoodsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
