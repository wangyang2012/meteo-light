import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PrevisionService} from './services/prevision.service';
import {PrevisionComponent} from './component/prevision.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CurrentConditionComponent} from './component/current-condition.component';
import {DayComponent} from './component/day.component';
import {HourComponent} from './component/hour.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevisionComponent,
    CurrentConditionComponent,
    DayComponent,
    HourComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient, PrevisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
