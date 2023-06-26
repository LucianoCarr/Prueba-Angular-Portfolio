import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'skills', component:SkillsComponent},
  {path:'about', component:AboutComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
