import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { applyPromo, isValidPromo } from '../../core/cart/cart.logic';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, RouterLink],
  templateUrl: './checkout.html',
})
export class Checkout {
  private readonly cartService = inject(CartService);

  readonly promoCode = signal('');
  readonly appliedCode = signal('');

  readonly subtotal = this.cartService.total;
  readonly isEmpty = computed(() => this.cartService.count() === 0);

  readonly discountApplied = computed(() => isValidPromo(this.appliedCode()));

  readonly total = computed(() => applyPromo(this.subtotal(), this.appliedCode()));

  onPromoInput(value: string): void {
    this.promoCode.set(value);
  }

  apply(): void {
    this.appliedCode.set(this.promoCode().trim());
  }
}
