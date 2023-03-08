import { Box, Stack } from '@mui/material';
import { typeColors } from '../resources/typeColors';

interface PokemonTypesListProps {
  types: string[];
}

export const PokemonTypesList = ({ types = [] }: PokemonTypesListProps) => {
  if (types.length === 0) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1}>
      {types.map(type => (
        <Box
          key={type}
          sx={{
            background: typeColors[type],
            p: 1,
            color: 'white',
          }}
        >
          {type}
        </Box>
      ))}
    </Stack>
  );
};
