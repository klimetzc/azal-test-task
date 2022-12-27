export const getConvertedCurrency = (val: number): string =>
  `${Math.ceil(val * 70)}`.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
