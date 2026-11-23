export type ImplantCategory = 'head' | 'body' | 'legs' | 'chip';

export type ImplantType = string;

export interface ImplantDto {
  id: string;
  name: string;
  description: string;
  category: ImplantCategory;
  type: ImplantType;
  compatibleTypes: ImplantType[];
  price: number;
  imageUrl: string;
  incompatibleWith: string[];
  recommendedWith: string[];
}
