import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ICounter } from "src/app/core/interface/counter.int";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICounter
  ) {}

  ngOnInit() {
    // this.data.subscribe(res => console.log(res));
  }

  onCancel() {
    this.dialogRef.close({ increment: false });
  }
  onConfirm() {
    this.dialogRef.close({ increment: true });
  }
}
