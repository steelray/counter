import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(protected http: HttpClient) {}
  protected getApiUrl(action: string) {
    return environment.apiEndpoint + action;
  }
}
