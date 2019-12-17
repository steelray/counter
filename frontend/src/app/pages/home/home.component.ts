import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./components/dialog/dialog.component";
import { Subscription, Observable } from "rxjs";
import { ICounter } from "src/app/core/interface/counter.int";
import { CounterService } from "src/app/core/services/api/counter.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  counter$: Observable<ICounter>;
  sub: Subscription = new Subscription();
  constructor(
    private dialog: MatDialog,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.counter$ = this.counterService.getCounter();
  }

  onIncrement(counter) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "640px",
      data: counter
    });

    this.sub.add(
      dialogRef.afterClosed().subscribe(res => {
        if (res && res.increment) {
          this.counter$ = this.counterService.increment();
        }
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
