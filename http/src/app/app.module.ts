import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    // SimpleHttpComponent,
    // MoreHttpRequestsComponent,
    // YouTubeSearchComponent,
    // SearchResultComponent,
    // SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    // youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
