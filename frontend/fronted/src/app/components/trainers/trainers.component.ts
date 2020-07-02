import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { AssassignmentService } from "src/app/services/assassignment.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-trainers",
  templateUrl: "./trainers.component.html",
  styleUrls: ["./trainers.component.scss"],
})
export class TrainersComponent implements OnInit {
  trainers = new FormArray([]);
  clients = new FormArray([]);
  idsTrainers = 0;
  idsClients = 0;
  constructor(
    private assassignmentService: AssassignmentService,
    private dialog: MatDialog
  ) {}
  addTraner() {
    const group = new FormGroup({
      id: new FormControl(this.idsTrainers++),
      name: new FormControl(null, [Validators.required]),
      reputation: new FormControl(null, [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0),
      ]),
      available: new FormControl(0, [Validators.required, Validators.min(0)]),
    });

    this.trainers.push(group);
  }
  ngOnInit() {
    this.populatingClients();
  }

  showClients() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.clients,
      width: "590px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  generateAssassignment() {
    this.assassignmentService.assignmentClientsToTrainers({
      trainers: this.trainers.value,
      clients: [],
    });
  }
  populatingClients() {
    let client = new FormGroup({
      id: new FormControl(this.idsClients++),
      name: new FormControl("Ronald", [Validators.required]),
      reputationTrainer: new FormControl(5.6, [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0),
      ]),
    });
    this.clients.push(client);
    let client1 = new FormGroup({
      id: new FormControl(this.idsClients++),
      name: new FormControl("Juan", [Validators.required]),
      reputationTrainer: new FormControl(8.65, [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0),
      ]),
    });
    let client2 = new FormGroup({
      id: new FormControl(this.idsClients++),
      name: new FormControl("Pedro", [Validators.required]),
      reputationTrainer: new FormControl(2.3, [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0),
      ]),
    });
    this.clients.push(client1);
    this.clients.push(client2);
    console.log(this.clients);
  }
}

@Component({
  selector: "modal-component",
  templateUrl: "./model-template.html",
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("muestro data", this.data);
  }

  addClient() {
    let client = new FormGroup({
      id: new FormControl(Math.random()),
      name: new FormControl("", [Validators.required]),
      reputationTrainer: new FormControl(0, [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0),
      ]),
    });
    this.data.push(client);
  }
}
