import { Color } from '@material-ui/core';

export const createLinearGradient = (color: Color) => {
  const shades = Object.values(color);
  return `linear-gradient(to right, ${shades
    .map(
      (shade, index) =>
        `${shade} 0 calc(100% * ${index + 1} / ${shades.length})`,
    )
    .join(', ')})`;
};
