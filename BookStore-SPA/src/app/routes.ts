import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RegisterbookComponent } from './registerbook/registerbook.component';
import { AuthGuard } from './_guards/auth.guard';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children:[
            {path: 'books', component: BooklistComponent},
            {path: 'registerbook', component: RegisterbookComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];