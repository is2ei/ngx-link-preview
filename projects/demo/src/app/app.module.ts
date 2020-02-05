import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLinkPreviewModule } from 'ngx-link-preview';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLinkPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
