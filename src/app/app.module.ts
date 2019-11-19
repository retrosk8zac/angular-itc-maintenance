import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { TechsOnCallComponent } from "./techs-on-call/techs-on-call.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { CreateNewComponent } from "./create-new/create-new.component";
import { ContractNewComponent } from "./contract-new/contract-new.component";
import { ContractsService } from "./contracts.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },
      { path: "create", component: CreateNewComponent },
      { path: "create/new_contract", component: ContractNewComponent },
      { path: "productlist", component: ProductListComponent },
      { path: "Techs", component: TechsOnCallComponent },
      { path: "product/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    TechsOnCallComponent,
    CartComponent,
    ShippingComponent,
    HomepageComponent,
    CreateNewComponent,
    ContractNewComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, ContractsService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
