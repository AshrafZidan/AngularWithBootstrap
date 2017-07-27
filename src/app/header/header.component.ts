import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.mobile.component.css'] 
})
export class HeaderComponent implements OnInit {
  content:any[];
  list_info:any[];
  userData:any;
  contactData:any;
  constructor() {
    this.userData={name:"",email:"", password:""};
    this.contactData= {name:'',email:'',subject:"",message:""};
    this.content=[
     { "class":"tab-one", "h3": "Tabs with soft transitioning effect One", "par": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                  bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
                  justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
                  penatibus et magnis dis parturient montes.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
              bibendum laoreet.` },
    { "class":"tab-two", "h3": "Tabs with soft transitioning effect Two","par": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                  bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
                  justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
                  penatibus et magnis dis parturient montes.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
              bibendum laoreet.` },

    { "class":"tab-three","h3": "Tabs with soft transitioning effect One", "par": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                  bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
                  justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
                  penatibus et magnis dis parturient montes.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
              bibendum laoreet.`}
    ];
    this.list_info=[
      {
        "icon":"fa fa-cloud-download fa-2x",
      "h4":"Download","pra":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",

    },
     {
        "icon":"fa fa-cloud-upload fa-2x",
      "h4":"Upload","pra":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",

      }
    ];
   }

  ngOnInit() {
    $(function() {
    $('.tab-switch li').click(function() {
      //add active class
      $(this).addClass('selected').siblings().removeClass('selected');
      //hide all dives
      $(' .tabs .tabs-content div').hide();
      //show conected links
      $('.'+ $(this).data('class')).show();
    });
    });

  }
      setSubmit(value:string)
{
      console.log(value);
}

  

}
