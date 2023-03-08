import { Box } from '@mui/material';
import { typeColors } from '../resourses/typeColors';

interface PokemonTypesListProps {
  types: string[];
}

export const PokemonTypesList = ({ types = [] }: PokemonTypesListProps) => {
  if (types.length === 0) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', gap: '2px' }}>
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
    </Box>
  );
};
