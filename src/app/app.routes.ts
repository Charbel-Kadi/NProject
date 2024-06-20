import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {path: 'players', loadChildren: () => import('./players/players.component').then(m => m.PlayersComponent) },
    {path: 'teams', loadChildren: () => import('./teams/teams.component').then(m => m.TeamsComponent)},
    {path: '',redirectTo: '/players', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRouting {}
