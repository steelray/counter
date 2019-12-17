import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./core/services/guard/auth-guard.service";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
