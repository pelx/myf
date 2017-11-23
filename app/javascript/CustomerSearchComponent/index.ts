import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import template    from "./template.html";

@Component({
 selector: 'customer-search',
 template: template
})

class CustomerSearchComponent {
  customers;
  keywords: string;
  http: Http;
  
   constructor( http: Http) {
     this.http      = http;
     }
   
   search($event) {
     this.keywords = $event;
     if (this.keywords.length < 3) {
       return;
     } 
    this.http.get("/customers.json?keywords=" + this.keywords) 
        .subscribe( 
          data => this.customers = data.json().customers, 
          err => console.log(err) );                                
   
    }
  }
  
export { CustomerSearchComponent };
