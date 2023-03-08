import { Grid } from '@mui/material';
import { SkeletonCard } from './Skeleton';
import * as React from 'react';
import { cardGridSizes } from './PokemonList';

interface SkeletonListProps {
  count: number;
}

export const SkeletonList = ({ count }: SkeletonListProps) => {
  return (
    <>
      {new Array(count).fill(null).map((s, index) => (
        <Grid key={index} item {...cardGridSizes}>
          <SkeletonCard />
        </Grid>
      ))}
    </>
  );
};
