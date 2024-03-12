import { Routes } from '@angular/router';
import { ListTeachersComponent } from './pages/list-teachers/list-teachers.component';
import { ListFeedbacksComponent } from './pages/list-feedbacks/list-feedbacks.component';

export const routes: Routes = [
    {path: 'teachers', component: ListTeachersComponent},
    {path: 'feedbacks', component:ListFeedbacksComponent}
];
