import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'boardgames', component: BoardGameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
