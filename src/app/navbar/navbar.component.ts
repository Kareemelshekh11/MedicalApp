import { Component , OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  constructor(){
    
  }

  ngOnInit(): void {
    $("#navbtn1").click(function(){
      $(".dropdown-menu").fadeToggle();
    });

    $("#navbtn2").click(function(){
      $(".dropdown-menu2").fadeToggle();
    });

    $("#navbtn3").click(function(){
      $(".dropdown-menu3").fadeToggle();
    });
 
  }


}


