import { Injectable, computed, signal } from '@angular/core';
import { ImplantDto } from '../models/implant.model';
import { addToCart, calcTotal, clearCart, isInCart, removeFromCart } from '../cart/cart.logic';

const CART_STORAGE_KEY = 'implant-shop.cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items = signal<ImplantDto[]>(this.readFromStorage());

  readonly cart = this.items.asReadonly();
  readonly count = computed(() => this.items().length);
  readonly total = computed(() => calcTotal(this.items()));

  add(item: ImplantDto): void {
    this.setItems(addToCart(this.items(), item));
  }

  remove(id: string): void {
    this.setItems(removeFromCart(this.items(), id));
  }

  clear(): void {
    this.setItems(clearCart());
  }

  has(id: string): boolean {
    return isInCart(this.items(), id);
  }

  private setItems(next: ImplantDto[]): void {
    this.items.set(next);
    this.writeToStorage(next);
  }

  private readFromStorage(): ImplantDto[] {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) {
        return [];
      }

      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.filter(isImplantDto);
    } catch {
      return [];
    }
  }

  private writeToStorage(items: readonly ImplantDto[]): void {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error(err);
    }
  }
}

function isImplantDto(value: unknown): value is ImplantDto {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const item = value as Partial<ImplantDto>;
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.price === 'number' &&
    typeof item.category === 'string'
  );
}
