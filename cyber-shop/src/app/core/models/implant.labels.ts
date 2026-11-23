import { ImplantCategory } from './implant.model';

export const IMPLANT_CATEGORY_LABELS: Record<ImplantCategory, string> = {
  head: 'Голова',
  body: 'Тело',
  legs: 'Ноги',
  chip: 'Усилители чипа',
};

export const IMPLANT_CATEGORY_SECTION_TITLES: Record<ImplantCategory, string> = {
  head: 'Для головы',
  body: 'Для тела',
  legs: 'Для ног',
  chip: 'Для усилителей чипа',
};

export const IMPLANT_CATEGORIES = Object.keys(IMPLANT_CATEGORY_LABELS) as ImplantCategory[];
