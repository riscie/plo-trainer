import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './common/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import { ClassicModeComponent } from './classic-mode/classic-mode.component';
import { RangeModeComponent } from './range-mode/range-mode.component';
import { PercentageInputComponent } from './common/percentage-input/percentage-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassicModeComponent,
    RangeModeComponent,
    PercentageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
