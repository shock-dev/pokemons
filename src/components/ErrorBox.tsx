import { Box, Typography } from '@mui/material';

interface ErrorBoxProps {
  message: string;
}

export const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <Box sx={{ textAlign: 'center' }} py={3}>
      <Typography sx={{ color: 'red' }} variant="h6">
        {message}
      </Typography>
    </Box>
  );
};
