import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  declarations: [HomeComponent, DialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [DialogComponent]
})
export class HomeModule {}
