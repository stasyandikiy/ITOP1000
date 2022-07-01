import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { BlockInfoComponent } from './container/block-info/block-info.component';
import { BlockArrowComponent } from './container/block-arrow/block-arrow.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversionComponent,
    ContainerComponent,
    BlockInfoComponent,
    BlockArrowComponent 
  ],
  imports: [
  BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
