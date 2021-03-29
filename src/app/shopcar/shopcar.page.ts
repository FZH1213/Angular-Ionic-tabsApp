import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopcar',
  templateUrl: './shopcar.page.html',
  styleUrls: ['./shopcar.page.scss'],
})
export class ShopcarPage implements OnInit {

  constructor(public http:HttpClient,public router:NavController) { }
  res:Result
  ngOnInit() {
    let url="http://101.96.128.94:9999/mfresh/data/cart_detail_select.php"
    let body="uid=422"
    let options={headers:new HttpHeaders({
      "content-type":"application/x-www-form-urlencoded"
    })}
    this.http.post(url,body,options).subscribe((res:Result)=>{
      console.log(res);
      
    })
  }

}
interface Result{
  products: any[]
  uid: string
}
interface Products{
  count:string
  did:string
  pic:string
  pid:string
  price:string
  title1:string
}
