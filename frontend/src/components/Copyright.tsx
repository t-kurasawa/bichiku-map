import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Popover from '@mui/material/Popover';
import CopyrightIcon from '@mui/icons-material/Copyright';
import IconButton from '@mui/material/IconButton';

export default function Copyright(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <IconButton onClick={handleClick}>
        <CopyrightIcon />
      </IconButton>
      みんなで備える防災備蓄マップ / CC BY 4.0 / MIT Licence
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Link color="inherit" href="https://portal.data.metro.tokyo.lg.jp/">
          東京都オープンデータカタログサイト
        </Link>
        {' | '}
        <Link color="inherit" href="https://www.bichiku.metro.tokyo.lg.jp/">
          東京備蓄ナビ
        </Link>
        {' | '}
        <Link color="inherit" href="https://www.openstreetmap.org/">
          OpenStreetMap contributors
        </Link>
      </Popover>
    </Typography>
  );
}
