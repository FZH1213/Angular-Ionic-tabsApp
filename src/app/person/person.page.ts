import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  uname:""
  upwd=""
  doLogin(){
    let url="http://101.96.128.94:9999/data/user/login.php"
    let body=`uname=${this.uname}&password=${this.upwd}`
    const headers=new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"})
    
    let options={
      headers
    }
    this.http.post(url,body,options).subscribe((res:Result)=>{
      console.log(res);
      if(res.code==200){
        this.alert.create({header:"登录成功",buttons:["确定"]}).then((res)=>res.present())
      }else{
        this.alert.create({header:"登录失败",buttons:["确定"]}).then((res)=>res.present())
        
      }

    })
  }

  constructor(public http:HttpClient,public alert:AlertController) { }

  ngOnInit() {
  }

}
interface Result{
  code:number
  msg:string
}
