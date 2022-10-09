import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicModeComponent } from "./classic-mode/classic-mode.component";
import { RangeModeComponent } from "./range-mode/range-mode.component";

const routes: Routes = [
  { path: 'classic', component: ClassicModeComponent },
  { path: 'range', component: RangeModeComponent },
  { path: '', redirectTo: 'classic', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
