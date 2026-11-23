import { ImplantDto } from '../models/implant.model';

export function isInCart(cart: readonly ImplantDto[], id: string): boolean {
  return cart.some((item) => item.id === id);
}

export function addToCart(cart: readonly ImplantDto[], item: ImplantDto): ImplantDto[] {
  if (isInCart(cart, item.id)) {
    return [...cart];
  }
  return [...cart, item];
}

export function removeFromCart(cart: readonly ImplantDto[], id: string): ImplantDto[] {
  return cart.filter((item) => item.id !== id);
}

export function clearCart(): ImplantDto[] {
  return [];
}

export function calcTotal(cart: readonly ImplantDto[]): number {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

const PROMO_DISCOUNTS: Record<string, number> = {
  NEURAL10: 0.1,
};

export function applyPromo(total: number, code: string): number {
  if (total <= 0) {
    return 0;
  }

  const normalized = code.trim().toUpperCase();
  const discount = PROMO_DISCOUNTS[normalized];

  if (!discount) {
    return total;
  }

  return Math.round(total * (1 - discount));
}

export function isValidPromo(code: string): boolean {
  return code.trim().toUpperCase() in PROMO_DISCOUNTS;
}
