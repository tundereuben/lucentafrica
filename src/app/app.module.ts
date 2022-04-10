import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingComponent } from './training/training.component';
import { FullStackComponent } from './training/full-stack/full-stack.component';
import { OfficeComponent } from './training/office/office.component';
import { WordpressComponent } from './training/wordpress/wordpress.component';
import { HtmlCssComponent } from './training/html-css/html-css.component';
import { JavascriptComponent } from './training/javascript/javascript.component';
import { BootstrapComponent } from './training/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    TrainingComponent,
    FullStackComponent,
    OfficeComponent,
    WordpressComponent,
    HtmlCssComponent,
    JavascriptComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
