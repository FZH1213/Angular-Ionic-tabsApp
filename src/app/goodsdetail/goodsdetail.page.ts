import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-goodsdetail',
  templateUrl: './goodsdetail.page.html',
  styleUrls: ['./goodsdetail.page.scss'],
})
export class GoodsdetailPage implements OnInit {

  constructor(public route:ActivatedRoute,public http:HttpClient,public router:NavController) { }
  res:Result
  ngOnInit() {
    let lid=this.route.snapshot.params.lid
    this.http.get("http://101.96.128.94:9999/data/product/details.php?lid="+lid).subscribe((res:Result)=>{
      console.log(res);
      this.res=res
    })
  }
  changeHtml(html:string){
    return html.replace(/src="img/g,'src="http://101.96.128.94:9999/img')
  }

}
interface Result{
  details:any
  family:any
}
interface Details{
  category: string
  cpu: string
  details: string
  disk: string
  family_id: string
  is_onsale: string
  lid:string
  lname: string
  memory: string
  os: string
  picList: Piclist[]
  price: string
  promise: string
  resolution: string
  shelf_time: string
  sold_count: string
  spec: string
  subtitle: string
  title: string
  video_card: string
  video_memory:string
}
interface Piclist{
  laptop_id: string
  lg: string
  md: string
  pid: string
  sm: string
}
interface Family{
  fid: string
  fname: string
  laptopList: LaptopList[]
}
interface LaptopList{
  lid: string
  spec: string
}
