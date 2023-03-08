import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  filterPokemonsByName,
  getUniqTypeNamesFromPokemonList,
} from '../helpers/pokemon';
import { pokemonSlice } from '../store/reducers/PokemonSlice';
import { typeColors } from '../resources/typeColors';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MultipleSelect = () => {
  const dispatch = useAppDispatch();
  const { pokemons, activeTypes, search } = useAppSelector(
    state => state.pokemonReducer,
  );
  const { setActiveTypes } = pokemonSlice.actions;

  const handleChange = (event: SelectChangeEvent<typeof activeTypes>) => {
    const {
      target: { value },
    } = event;
    dispatch(
      setActiveTypes(typeof value === 'string' ? value.split(',') : value),
    );
  };

  const filteredPokemons = filterPokemonsByName(pokemons, search);

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="multiple-label">Types</InputLabel>
        <Select
          labelId="multiple-label"
          id="multiple"
          multiple
          value={activeTypes}
          onChange={handleChange}
          input={<OutlinedInput label="Types" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {getUniqTypeNamesFromPokemonList(filteredPokemons).map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={activeTypes.indexOf(name) > -1} />
              <ListItemText primary={name} sx={{ color: typeColors[name] }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
