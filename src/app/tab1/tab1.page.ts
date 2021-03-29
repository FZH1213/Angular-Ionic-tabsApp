import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public router:NavController) {}
  goDetail(){
    this.router.navigateForward(["/detail",{name:'fuzhihui3',age:27}])
  }

}
