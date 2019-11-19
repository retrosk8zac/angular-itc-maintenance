import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContractsService {
  items = [];
  contractNumber;

  constructor(
    private http: HttpClient,
    //contract info
    private id: number,
    private title: string,
    private customer: string,
    private status: string,
    private description: string,
    private open_date: Date,
    private building: string,
    private contract_number: string,
    private requests: Number[],
    private comments: String[]
  ) {}
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
  getNewContractNumber() {
    //need to figure out routing with db here to return highest number
    return 199;
  }
  insertNewContract() {
    //http.post(insert contract)
    return true;
  }
}
