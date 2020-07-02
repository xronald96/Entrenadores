import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TooltipModule } from 'ng2-tooltip-directive';
import {
  TrainersComponent,
  ModalComponent,
} from "./components/trainers/trainers.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResultViewComponent } from "./components/result-view/result-view.component";

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    ModalComponent,
    ResultViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,TooltipModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
