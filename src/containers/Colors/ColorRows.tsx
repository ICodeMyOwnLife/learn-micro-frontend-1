import React, { FC, memo } from 'react';
import {
  Color,
  TableRow,
  TableCell,
  getLuminance,
  hexToRgb,
} from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import { createLinearGradient } from './utils';

export const ColorRowsComponent: FC<ColorRowsProps> = ({ color, name }) => (
  <>
    <TableRow>
      <TableCell
        align="center"
        colSpan={4}
        style={{
          backgroundImage: createLinearGradient(color),
          color: common.white,
        }}
      >
        {name}
      </TableCell>
    </TableRow>
    {Object.entries(color).map(([index, hex]) => (
      <TableRow key={index}>
        <TableCell
          align="center"
          style={{
            backgroundColor: hex,
            color: getLuminance(hex) > 0.5 ? common.black : common.white,
          }}
        >
          {index}
        </TableCell>
        <TableCell align="center">{hex}</TableCell>
        <TableCell align="center">{hexToRgb(hex)}</TableCell>
        <TableCell align="center">{getLuminance(hex)}</TableCell>
      </TableRow>
    ))}
  </>
);

const ColorRows = memo(ColorRowsComponent);
ColorRows.displayName = 'ColorRows';
export default ColorRows;

export interface ColorRowsProps {
  color: Color;
  name: string;
}
