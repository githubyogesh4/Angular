import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsAppComponent } from './Components/forms-binding/sms-app/sms-app.component';
import { FormsModule } from '@angular/forms';
import { ShowPasswordComponent } from './Components/forms-binding/show-password/show-password.component';
import { AmountRangeComponent } from './Components/forms-binding/amount-range/amount-range.component';
import { HobbySwitchComponent } from './Components/Directives/hobby-switch/hobby-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    HobbySwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
