import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Pokemon } from 'pokenode-ts';
import { PokemonTypesList } from './PokemonTypesList';
import { getTypeNamesFromPokemon } from '../helpers/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onInfo: () => void;
}

export const PokemonCard = ({ pokemon, onInfo }: PokemonCardProps) => {
  const frontImgUrl = pokemon?.sprites?.front_default;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {frontImgUrl && (
          <Avatar src={frontImgUrl} sx={{ width: 150, height: 150 }} />
        )}
        <Typography
          sx={{ fontSize: 16, textTransform: 'capitalize', fontWeight: 'bold' }}
          gutterBottom
        >
          {pokemon.id}.{pokemon.name}
        </Typography>
        <PokemonTypesList types={getTypeNamesFromPokemon(pokemon)} />
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={onInfo}>
          Info
        </Button>
      </CardActions>
    </Card>
  );
};
