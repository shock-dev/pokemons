import { Skeleton, Stack } from '@mui/material';

export const SkeletonCard = () => (
  <Stack spacing={1} width="100%">
    <Skeleton variant="rounded" height={200} />
    <Skeleton variant="rounded" height={20} />
    <Skeleton variant="rounded" height={30} />
    <Skeleton variant="rounded" width={70} height={30} />
  </Stack>
);
