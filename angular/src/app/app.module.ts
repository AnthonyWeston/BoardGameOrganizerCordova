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
import { FormsModule} from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    BoardGameListComponent,
    BoardGameComponent,
    MainViewComponent,
    DialogDeleteBoardGameComponent,
  ],
  entryComponents: [
    DialogDeleteBoardGameComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
