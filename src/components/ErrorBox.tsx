import { Box, Typography } from '@mui/material';

interface ErrorBoxProps {
  message: string;
}

export const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <Box pt={5} px={2}>
      <Typography variant="h4" component="p" sx={{ color: 'red' }}>
        {message}
      </Typography>
    </Box>
  );
};
