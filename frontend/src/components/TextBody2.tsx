import React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function TextBody2(props: TitleProps) {
  return (
    <Typography
      component="span"
      variant="body2"
      color="text.secondary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
