import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImplantService } from '../../core/services/implant.service';
import { CartService } from '../../core/services/cart.service';
import { ImplantDto } from '../../core/models/implant.model';
import { IMPLANT_CATEGORY_SECTION_TITLES } from '../../core/models/implant.labels';
import { ImplantCard } from './implant-card/implant-card';
import {
  CatalogQuery,
  CatalogSortDir,
  CatalogSortField,
  filterAndSortImplants,
  groupImplantsByCategory,
} from './catalog-query';

@Component({
  selector: 'app-catalog',
  imports: [FormsModule, ImplantCard],
  templateUrl: './catalog.html',
})
export class Catalog {
  private readonly implantService = inject(ImplantService);
  private readonly cartService = inject(CartService);

  readonly categorySectionTitles = IMPLANT_CATEGORY_SECTION_TITLES;

  readonly implants = signal<ImplantDto[]>([]);
  readonly error = signal<string | null>(null);
  readonly loading = signal(true);

  readonly search = signal('');
  readonly sortBy = signal<CatalogSortField | null>(null);
  readonly sortDir = signal<CatalogSortDir>('asc');

  readonly hasActiveFilters = computed(
    () => this.search().trim() !== '' || this.sortBy() !== null || this.sortDir() !== 'asc',
  );

  readonly groupedByCategory = computed(() => this.sortBy() === 'category');

  readonly query = computed<CatalogQuery>(() => ({
    search: this.search(),
    category: 'all',
    sortBy: this.sortBy(),
    sortDir: this.sortDir(),
  }));

  readonly visibleImplants = computed(() =>
    filterAndSortImplants(this.implants(), this.query()),
  );

  readonly categoryGroups = computed(() =>
    groupImplantsByCategory(this.visibleImplants(), this.sortDir()),
  );

  constructor() {
    this.implantService.getAll().subscribe({
      next: (items) => {
        this.implants.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Не удалось загрузить каталог');
        this.loading.set(false);
      },
    });
  }

  onSearch(value: string): void {
    this.search.set(value);
  }

  onSortByChange(value: string): void {
    this.sortBy.set(value === '' ? null : (value as CatalogSortField));
  }

  selectSortDir(dir: CatalogSortDir): void {
    this.sortDir.set(dir);
  }

  resetFilters(): void {
    this.search.set('');
    this.sortBy.set(null);
    this.sortDir.set('asc');
  }

  onAdd(item: ImplantDto): void {
    this.cartService.add(item);
  }

  isInCart(id: string): boolean {
    return this.cartService.has(id);
  }
}
