import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/api/auth.service";
import { Router } from "@angular/router";

export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.authToken;
    const headers = {};
    if (token) {
      // tslint:disable-next-line:no-string-literal
      headers["Authorization"] = token;
    }

    request = request.clone({
      setHeaders: headers
    });

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 302) {
            // good
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            // not authed
            this.authService.removeAuthToken();
            this.router.navigate(["/auth/login"]);
          } else if (
            error instanceof HttpErrorResponse &&
            error.status === 403
          ) {
            this.router.navigate(["/auth/login"]);
          }
        }
      )
    );
  }
}
