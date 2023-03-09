import { Box, Typography } from '@mui/material';

export const EmptyBox = () => {
  return (
    <Box pt={5} px={2}>
      <Typography variant="h4" component="p">
        Покемоны не обнаружены 😳
      </Typography>
    </Box>
  );
};
