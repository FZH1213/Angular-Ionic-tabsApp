import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.page.html',
  styleUrls: ['./goods.page.scss'],
})
export class GoodsPage implements OnInit {

  constructor(public http:HttpClient) { }
  url="http://101.96.128.94:9999/data/product/list.php?pno="
  res:Result
  ngOnInit() {
    this.http.get(this.url+1).subscribe((res:Result)=>{
      this.res=res
      console.log(res);
      
    })
  }
  loadData(e){
    let p=this.res.pno+1
    this.http.get(this.url+p).subscribe((res:Result)=>{
      res.data=this.res.data.concat(res.data)
      this.res=res
      e.target.complete()
    })
  }
  doRefresh(e){
    this.http.get(this.url+1).subscribe((res:Result)=>{
      this.res=res
      e.target.complete()
    })
  }

}
interface Result{
  data: ResultData[]
  pageCount: number
  pageSize: number
  pno: number
  recordCount: number
}
interface ResultData{
  is_onsale: string
  lid: string
  pic: string
  price: string
  sold_count: string
  title: string
}
