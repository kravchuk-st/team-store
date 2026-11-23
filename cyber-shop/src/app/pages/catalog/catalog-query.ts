import { ImplantCategory, ImplantDto } from '../../core/models/implant.model';

export type CatalogSortField = 'price' | 'name' | 'category' | 'type';
export type CatalogSortDir = 'asc' | 'desc';
export type CatalogCategoryFilter = ImplantCategory | 'all';

export interface CatalogQuery {
  search: string;
  category: CatalogCategoryFilter;
  sortBy: CatalogSortField | null;
  sortDir: CatalogSortDir;
}

export function filterAndSortImplants(
  items: readonly ImplantDto[],
  query: CatalogQuery,
): ImplantDto[] {
  const needle = query.search.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesCategory = query.category === 'all' || item.category === query.category;
    if (!matchesCategory) {
      return false;
    }

    if (!needle) {
      return true;
    }

    return (
      item.name.toLowerCase().includes(needle) ||
      item.description.toLowerCase().includes(needle)
    );
  });

  if (!query.sortBy) {
    return filtered;
  }

  const direction = query.sortDir === 'asc' ? 1 : -1;
  const field = query.sortBy;

  return [...filtered].sort((a, b) => {
    const left = sortValue(a, field);
    const right = sortValue(b, field);

    if (left < right) {
      return -1 * direction;
    }
    if (left > right) {
      return 1 * direction;
    }
    return a.id.localeCompare(b.id);
  });
}

function sortValue(item: ImplantDto, field: CatalogSortField): string | number {
  switch (field) {
    case 'price':
      return item.price;
    case 'name':
      return item.name.toLowerCase();
    case 'category':
      return item.category;
    case 'type':
      return item.type.toLowerCase();
  }
}

const CATEGORY_ORDER: ImplantCategory[] = ['head', 'body', 'legs', 'chip'];

export function groupImplantsByCategory(
  items: readonly ImplantDto[],
  sortDir: CatalogSortDir = 'asc',
): { category: ImplantCategory; items: ImplantDto[] }[] {
  const order = sortDir === 'asc' ? CATEGORY_ORDER : [...CATEGORY_ORDER].reverse();

  return order
    .map((category) => ({
      category,
      items: items.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
