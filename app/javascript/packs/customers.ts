import "hello_angular/polyfills";

import { Component, NgModule    } from "@angular/core";
import { BrowserModule          } from "@angular/platform-browser";
import { FormsModule            } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule              } from "@angular/http";
import { CustomerSearchComponent } from "CustomerSearchComponent";


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ CustomerSearchComponent ],
  bootstrap:    [ CustomerSearchComponent ]
})

export class CustomerAppModule { }

platformBrowserDynamic().bootstrapModule(CustomerAppModule);

