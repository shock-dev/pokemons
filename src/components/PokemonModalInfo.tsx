import { Avatar, Box, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { pokemonSlice } from '../store/reducers/PokemonSlice';
import { PokemonTypesList } from './PokemonTypesList';
import { getTypeNamesFromPokemon } from '../helpers/pokemon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
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

  return (
    <Modal open={isModalOpen} onClose={close}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalContent?.name}
        </Typography>
        {modalContent?.sprites.front_default && (
          <Avatar
            src={modalContent.sprites.front_default}
            sx={{ width: 150, height: 150 }}
          />
        )}
        <PokemonTypesList types={getTypeNamesFromPokemon(modalContent)} />
      </Box>
    </Modal>
  );
};
