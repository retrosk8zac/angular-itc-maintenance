import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractsService } from "../contracts.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

@Component({
  selector: "app-contract-new",
  templateUrl: "./contract-new.component.html",
  styleUrls: ["./contract-new.component.css"]
})
export class ContractNewComponent implements OnInit {
  ContractsService;
  //contract info
  id;
  contract_number;

  contractForm = new FormGroup({
    title: new FormControl(""),
    customer: new FormControl(""),
    status: new FormControl("Active"),
    description: new FormControl(""),
    open_date: new FormControl(date),

    building: new FormGroup({
      building_name: new FormControl(""),
      address: new FormControl("")
    })
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this.id = this.ContractsService.getNewContractNumber()
  }

  onSubmit() {
    console.log(this.contractForm.value);
    window.alert(this.contractForm.value.title + " Contract Submitted");
    //submit aka insert new contract
    //create request for new contract the insert
  }
}
