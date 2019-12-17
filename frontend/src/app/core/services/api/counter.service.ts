import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";
import { ICounter } from "../../interface/counter.int";
@Injectable({
  providedIn: "root"
})
export class CounterService extends ApiService {
  getCounter() {
    return this.http.get<ICounter>(this.getApiUrl("/counter"));
  }
  increment() {
    return this.http.post<ICounter>(this.getApiUrl("/counter/increment"), {
      inc: true
    });
  }
}
