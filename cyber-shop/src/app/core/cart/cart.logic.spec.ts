import { applyPromo, calcTotal } from './cart.logic';
import { ImplantDto } from '../models/implant.model';

function item(partial: Partial<ImplantDto> & Pick<ImplantDto, 'id' | 'price'>): ImplantDto {
  return {
    name: partial.name ?? partial.id,
    description: '',
    category: 'chip',
    type: 'C',
    compatibleTypes: [],
    imageUrl: '',
    incompatibleWith: [],
    recommendedWith: [],
    ...partial,
  };
}

describe('calcTotal', () => {
  it('returns 0 for empty cart', () => {
    expect(calcTotal([])).toBe(0);
  });

  it('sums item prices', () => {
    const cart = [item({ id: 'a', price: 100 }), item({ id: 'b', price: 250 })];
    expect(calcTotal(cart)).toBe(350);
  });
});

describe('applyPromo', () => {
  it('applies NEURAL10 as 10% off', () => {
    expect(applyPromo(1000, 'NEURAL10')).toBe(900);
  });

  it('keeps total for unknown code', () => {
    expect(applyPromo(1000, 'WRONG')).toBe(1000);
  });
});

