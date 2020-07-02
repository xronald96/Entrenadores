import { TrainersComponent } from "./components/trainers/trainers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/trainer", pathMatch: "full" }, // redirect to `first-component`
  { path: "trainer", component: TrainersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
