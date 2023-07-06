export const FILTERS = ['oceanic', 'vintage', 'rosetint'] as const;
export type Filter = (typeof FILTERS)[number];

export const CanvasSize = {
  width: 448,
  height: 448,
} as const;
