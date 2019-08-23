import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { BlogModule } from './blog/blog.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FooterModule,
      HeaderModule,
      BlogModule,
      SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
