import React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function SubTitle(props: TitleProps) {
  return (
    <Typography
      component="h2"
      variant="subtitle1"
      color="text.primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
