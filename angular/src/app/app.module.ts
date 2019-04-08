import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { BoardGameComponent,DialogDeleteBoardGameComponent } from './board-game/board-game.component';
import { MatButtonModule, MatCardModule, MatGridListModule, MatInputModule,
  MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material';
import { BoardGameEditComponent } from './board-game-edit/board-game-edit.component';
import { DialogNewBoardGameComponent } from './dialog-new-board-game/dialog-new-board-game.component';
import { BoardGameExplorerComponent } from './board-game-explorer/board-game-explorer.component'
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { DialogSearchResultComponent } from './dialog-search-result/dialog-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameListComponent,
    BoardGameComponent,
    MainViewComponent,
    DialogDeleteBoardGameComponent,
    BoardGameEditComponent,
    DialogNewBoardGameComponent,
    BoardGameExplorerComponent,
    DialogSearchResultComponent,
  ],
  entryComponents: [
    DialogDeleteBoardGameComponent,
    DialogNewBoardGameComponent,
    DialogSearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
