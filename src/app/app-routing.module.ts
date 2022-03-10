import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WordComponent } from './components/word/word.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    {
        path: 'search', component: WordComponent
    },
    { path: '**', component: NotfoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }