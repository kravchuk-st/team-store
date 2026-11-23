import { Injectable, computed, signal } from '@angular/core';
import { ImplantDto } from '../models/implant.model';
import { addToCart, calcTotal, clearCart, isInCart, removeFromCart } from '../cart/cart.logic';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items = signal<ImplantDto[]>([]);

  readonly cart = this.items.asReadonly();
  readonly count = computed(() => this.items().length);
  readonly total = computed(() => calcTotal(this.items()));

  add(item: ImplantDto): void {
    this.items.set(addToCart(this.items(), item));
  }

  remove(id: string): void {
    this.items.set(removeFromCart(this.items(), id));
  }

  clear(): void {
    this.items.set(clearCart());
  }

  has(id: string): boolean {
    return isInCart(this.items(), id);
  }
}
