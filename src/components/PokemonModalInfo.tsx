import { Avatar, Box, Modal, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { pokemonSlice } from '../store/reducers/PokemonSlice';
import { PokemonTypesList } from './PokemonTypesList';
import { getTypeNamesFromPokemon } from '../helpers/pokemon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  border: '1px solid #ccc',
  boxShadow: 6,
  p: 4,
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const PokemonModalInfo = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, modalContent } = useAppSelector(
    state => state.pokemonReducer,
  );
  const { closePokemonsModal } = pokemonSlice.actions;

  const close = () => {
    dispatch(closePokemonsModal());
  };

  if (!modalContent) {
    return null;
  }

  const frontImage = modalContent?.sprites.front_default;

  return (
    <Modal open={isModalOpen} onClose={close}>
      <Box sx={style}>
        <Stack alignItems="center" spacing={1}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textTransform: 'capitalize' }}
          >
            {modalContent.name}
          </Typography>
          {frontImage && (
            <Avatar src={frontImage} sx={{ width: 180, height: 180 }} />
          )}
          <PokemonTypesList types={getTypeNamesFromPokemon(modalContent)} />
          {modalContent?.weight && (
            <Typography>Weight: {modalContent.weight}</Typography>
          )}
          {modalContent?.height && (
            <Typography>Height: {modalContent.height}</Typography>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};
