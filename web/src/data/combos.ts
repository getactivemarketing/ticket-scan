import index from './combos.generated.json';

export interface Combo {
  city: string;
  category: string;
  eventCount: number;
}

/** Every city × category combo with enough real inventory to deserve a page. */
export function getComboList(): Combo[] {
  return index.combos as Combo[];
}

export function isCombo(city: string, category: string): boolean {
  return getComboList().some((c) => c.city === city && c.category === category);
}

/** Qualifying categories for one city, strongest inventory first. */
export function combosForCity(city: string): Combo[] {
  return getComboList().filter((c) => c.city === city);
}

/** Qualifying cities for one category, strongest inventory first. */
export function combosForCategory(category: string): Combo[] {
  return getComboList().filter((c) => c.category === category);
}

export const comboIndexGeneratedAt: string = index.generatedAt;
