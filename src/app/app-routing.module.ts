import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent} from './FrontOffice/all-template-front/all-template-front.component';
import { ListCompetitionComponent } from './BackOffice/list-competition/list-competition.component';
import { AddCompetitionComponent } from './BackOffice/add-competition/add-competition.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { ListCompetitionsComponent } from './FrontOffice/list-competitions/list-competitions.component';
import { AddEventComponent } from './FrontOffice/add-event/add-event.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';

import { AddcourseComponent } from './FrontOffice/addcourse/addcourse.component';
import { ListCourseComponent } from './FrontOffice/list-course/list-course.component';
import { CourseDialogComponent } from './BackOffice/course-dialog/course-dialog.component';
import { ModifCourceComponent } from './FrontOffice/modif-cource/modif-cource.component';
import { AddAnnulationComponent } from './FrontOffice/add-annulation/add-annulation.component';
import { ListeAnnulationComponent } from './BackOffice/liste-annulation/liste-annulation.component';


const routes: Routes = [
  { path:"",
    component: AllTemplateFrontComponent,
    children:[
      {path:'homepage', component: HomeComponent },
      {path:'competitions', component:ListCompetitionsComponent},
      {path:'addevent', component:AddEventComponent},
      {path:'front', component:AddcourseComponent},
      {path:'liste', component:ListCourseComponent},
      { path:'modifier/:courseID', component: ModifCourceComponent },
      { path:'addAnnulation/:courseID', component: AddAnnulationComponent },
    ]
  },
  {
    path:"admin",
    component: AllTemplateBackComponent,
    children: [
      { path: 'list-competition', component: ListCompetitionComponent },
      { path: 'adeventd-competition', component: AddCompetitionComponent },
      { path: 'list-', component: AddCompetitionComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'liste-annulation', component: ListeAnnulationComponent },

    ]
  }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }