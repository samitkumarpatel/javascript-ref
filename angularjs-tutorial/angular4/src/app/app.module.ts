import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tutorial6Component } from './tutorial6/tutorial6.component';
import { Tutorial7Component } from './tutorial7/tutorial7.component';
import { Tutorial8Component } from './tutorial8/tutorial8.component';
import { Tutorial9Component } from './tutorial9/tutorial9.component';
import { Tutorial10Component } from './tutorial10.component';
import { Tutorial11Component } from './tutorial11.component';
import { Tutorial12Component } from './tutorial12.component';
import { Tutorial13Component } from './tutorial13.component'
import { Tutorial14Component } from './tutorial14.component'
import { Tutorial14bComponent } from './tutorial14b.component'
import { Tutorial15Component } from './tutorial15.component';
import { Tutorial17Component } from './tutorial17/tutorial17.component';
import { Tutorial18Component } from './tutorial18/tutorial18.component'
@NgModule({
  declarations: [
    AppComponent,
    Tutorial6Component,
    Tutorial7Component,
    Tutorial8Component,
    Tutorial9Component,
    Tutorial10Component,
    Tutorial11Component,
    Tutorial12Component,
    Tutorial13Component,
    Tutorial14Component,
    Tutorial14bComponent,
    Tutorial15Component,
    Tutorial17Component,
    Tutorial18Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
