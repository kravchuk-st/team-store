import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
})
export class Cart {
  private readonly cartService = inject(CartService);

  readonly items = this.cartService.cart;
  readonly total = this.cartService.total;
  readonly isEmpty = computed(() => this.cartService.count() === 0);

  remove(id: string): void {
    this.cartService.remove(id);
  }

  clear(): void {
    this.cartService.clear();
  }
}
