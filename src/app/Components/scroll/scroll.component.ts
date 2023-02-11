import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {


  ngOnInit(): void {
    const topbtn = document.querySelector<HTMLElement>(".top");
     
    window.onscroll= function(){
      if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        topbtn!.style.display="block"
      }
      else{
        topbtn!.style.display="none"
      }
    }

    topbtn!.onclick = function(){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  }
}
