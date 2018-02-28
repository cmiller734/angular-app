import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DisplayBtnComponent } from './display-btn/display-btn.component';

@NgModule({
  declarations: [
    AppComponent, //register new components
    ServerComponent, ServersComponent, DisplayBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] //responsible for telling Angular which component to recognize in index.html
})
export class AppModule { }
