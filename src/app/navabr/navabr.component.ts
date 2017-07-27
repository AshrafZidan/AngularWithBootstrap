import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      'use strict';
      $(window).scroll(function() {
       var navabr = $('.navbar');
       if($(window).scrollTop() >= navabr.height()){
           if(!navabr.hasClass('scrolled')){
              navabr.addClass('scrolled');
           }
         
       }
       else{
          navabr.removeClass('scrolled');
       }
      });

    });
  }

}
