import React, { FC, memo } from 'react';
import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@material-ui/core/colors';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Color,
  TableBody,
} from '@material-ui/core';
import ColorRows from './ColorRows';

function createColors<TName extends string>(colors: Record<TName, Color>) {
  return colors;
}

const colors = createColors({
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
});

export const ColorsComponent: FC = () => (
  <div>
    <h3>COLORS {process.env.REACT_APP_MF_CODE}</h3>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align="center">Index</TableCell>
          <TableCell align="center">Hex</TableCell>
          <TableCell align="center">RGB</TableCell>
          <TableCell align="center">Luminance</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(colors).map(([name, color]) => (
          <ColorRows color={color} key={name} name={name} />
        ))}
      </TableBody>
    </Table>
  </div>
);

const Colors = memo(ColorsComponent);
Colors.displayName = 'Colors';
export default Colors;
