import { Routes } from '@angular/router';
import { ListTeachersComponent } from './pages/list-teachers/list-teachers.component';
import { ListFeedbacksComponent } from './pages/list-feedbacks/list-feedbacks.component';
import { CreateTeachersComponent } from './pages/create-teachers/create-teachers.component';
import { UpdateTeachersComponent } from './pages/update-teachers/update-teachers.component';
import { DeleteTeachersComponent } from './pages/delete-teachers/delete-teachers.component';
import { CreateFeedbacksComponent } from './pages/create-feedbacks/create-feedbacks.component';
import { UpdateFeedbacksComponent } from './pages/update-feedbacks/update-feedbacks.component';
import { DeleteFeedbacksComponent } from './pages/delete-feedbacks/delete-feedbacks.component';

export const routes: Routes = [
    {path: 'teachers', component: ListTeachersComponent},
    {path: 'feedbacks', component: ListFeedbacksComponent},
    {path: 'createTeacher', component: CreateTeachersComponent},
    {path: 'editTeacher/:id', component: UpdateTeachersComponent},
    {path: 'deleteTeacher/:id', component: DeleteTeachersComponent},
    {path: 'createFeedback', component: CreateFeedbacksComponent},
    {path: 'editFeedback/:id', component: UpdateFeedbacksComponent},
    {path: 'deleteFeedback/:id', component: DeleteFeedbacksComponent},
];
