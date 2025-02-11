export type Store = {
  id: string;
  name: string;
  city: string;
  state: string;
  kiosk: boolean;
};

/** The pilot stores for kiosk mode. The full list lives in the commerce API. */
export const STORES: Store[] = [
  { id: '0412', name: 'Riverside Commons', city: 'Dayton', state: 'OH', kiosk: true },
  { id: '0417', name: 'Market Street', city: 'Columbus', state: 'OH', kiosk: true },
  { id: '0533', name: 'Northgate Plaza', city: 'Indianapolis', state: 'IN', kiosk: true },
  { id: '0548', name: 'Clearwater Crossing', city: 'Louisville', state: 'KY', kiosk: false },
  { id: '0601', name: 'Pike & Main', city: 'Cincinnati', state: 'OH', kiosk: true },
];

export function findStore(id: string | undefined | null): Store | undefined {
  return STORES.find((s) => s.id === id);
}
