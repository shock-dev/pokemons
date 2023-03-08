import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Container>
        <Typography variant="h5" component="div">
          Pokemons
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>
);
