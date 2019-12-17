import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { ILogin, ILoginResponse } from "../../interface/login.int";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class AuthService extends ApiService {
  private authTokenKeyName = "authToken";
  constructor(
    protected http: HttpClient,
    private cookieService: CookieService
  ) {
    super(http);
  }
  login(params: ILogin) {
    return this.http.post<ILoginResponse>(
      this.getApiUrl("/auth/login"),
      params
    );
  }

  get isAuthed() {
    const token = !!this.authToken;
    return token;
  }

  get authToken() {
    return this.cookieService.get(this.authTokenKeyName);
  }

  saveAuthToken(token) {
    this.cookieService.set(this.authTokenKeyName, token);
  }

  removeAuthToken() {
    this.cookieService.delete(this.authTokenKeyName);
  }
}
