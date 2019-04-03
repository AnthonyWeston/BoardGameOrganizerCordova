import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { BoardGameEditComponent } from './board-game-edit/board-game-edit.component';
import { BoardGameExplorerComponent } from './board-game-explorer/board-game-explorer.component';


const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'boardgames', component: BoardGameListComponent, pathMatch: 'full' },
  { path: 'boardgames/:id', component: BoardGameListComponent, pathMatch: 'full' },
  { path: 'boardgames/:id/edit', component: BoardGameEditComponent, pathMatch: 'full' },
  { path: 'explore', component: BoardGameExplorerComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
