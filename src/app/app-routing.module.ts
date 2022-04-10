import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TrainingComponent} from './training/training.component';
import {ProjectsComponent} from './projects/projects.component';
import {FullStackComponent} from './training/full-stack/full-stack.component';
import {OfficeComponent} from './training/office/office.component';
import {WordpressComponent} from './training/wordpress/wordpress.component';
import {HtmlCssComponent} from './training/html-css/html-css.component';
import {BootstrapComponent} from './training/bootstrap/bootstrap.component';
import {JavascriptComponent} from './training/javascript/javascript.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'full-stack', component: TrainingComponent},
  { path: 'html-css', component: HtmlCssComponent},
  { path: 'javascript', component: JavascriptComponent},
  { path: 'bootstrap', component: BootstrapComponent},
  { path: 'wordpress', component: WordpressComponent},
  { path: 'mysql', component: TrainingComponent},
  { path: 'office-workspace', component: OfficeComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
