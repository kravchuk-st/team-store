import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
})
export class About {
  readonly team = [
    {
      name: 'Pavel Hetsman',
      role: 'Frontend (Angular)',
      work: 'Идея / дизайн, каталог, корзина, сервисы UI, бизнес-логика, стили.',
    },
    {
      name: 'Stanislav Kravchuk',
      role: 'Backend / DevOps',
      work: 'JSON с товарами, DTO-контракты, чистые функции, unit-тесты, деплой, доска задач.',
    },
  ] as const;
}
