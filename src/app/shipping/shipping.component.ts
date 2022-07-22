import { CartService } from "./../cart.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ShippingPrice } from "../types/shippingPrice";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<ShippingPrice[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
