import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/api/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.authService.isAuthed) {
      this.redirectToHome();
    }
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  openSnackbar(message: string, action = "close") {
    this.snackbar.open(message, action, {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 4000
    });
  }

  onSubmit() {
    if (!this.form.invalid) {
      const { username, password } = this.form.value;
      this.authService.login({ username, password }).subscribe(
        res => {
          this.authService.saveAuthToken(res.token);
          this.redirectToHome();
        },
        error => {
          this.openSnackbar(error.error.message);
        }
      );
    }
  }

  redirectToHome() {
    this.router.navigate(["/"]);
  }
}
