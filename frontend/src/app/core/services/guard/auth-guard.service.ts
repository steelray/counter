import { Injectable } from "@angular/core";
import { AuthService } from "../api/auth.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthed) {
      this.router.navigate(["auth/login"]);
      return false;
    }
    return true;
  }
}
