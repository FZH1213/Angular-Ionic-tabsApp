import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public http:HttpClient, public router:NavController, public route:ActivatedRoute,private sanitizer:DomSanitizer) { }
  href:any
  ngOnInit() {
    this.href="http://101.96.128.94:9999/"+this.route.snapshot.params.href
    this.href=this.sanitizer.bypassSecurityTrustResourceUrl(this.href)
    let lid=this.route.snapshot.params.lid
    let pid=this.route.snapshot.params.pid
    this.http.get("http://101.96.128.94:9999/data/product/details.php?lid="+lid).subscribe((res:Result)=>{
      console.log(res);
      this.res=res
    })
    /* this.http.get("http://101.96.128.94:9999/data/product/details.php?lid="+pid).subscribe((res:Result)=>{
      console.log(res);
      this.res=res
    }) */
  }
  res:Result
  
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
