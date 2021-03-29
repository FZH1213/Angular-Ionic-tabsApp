import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit {
  constructor(public http: HttpClient) {}
  res: Result;
  footIcon=[1,2,3,4]
  ngOnInit() {
    this.http
      .get("http://101.96.128.94:9999/data/product/index.php")
      .subscribe((res: Result) => {
        console.log(res);
        
        this.res = res;
      });
  }
}
interface Result {
  carouselItems: CarouselItems[];
  newArrivalItems: Item[];
  recommendedItems: Item[];
  topSaleItems: Item[];
}
interface CarouselItems {
  cid: string;
  href: string;
  img: string;
  title: string;
}
interface Item {
  details: string;
  href: string;
  pic: string;
  pid: string;
  price: string;
  title: string;
}
