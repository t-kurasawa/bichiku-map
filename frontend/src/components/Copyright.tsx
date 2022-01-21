import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        みんなで備える備蓄マップ
      </Link>
      {' | '}
      <Link color="inherit" href="https://www.bichiku.metro.tokyo.lg.jp/">
        東京備蓄ナビ
      </Link>
      {' | '}
      <Link
        color="inherit"
        href="https://github.com/code4fukui/fukui-bichiku-navi/"
      >
        福井備蓄ナビ
      </Link>
      {' | '}
      <Link color="inherit" href="https://www.openstreetmap.org/">
        OpenStreetMap contributors
      </Link>
    </Typography>
  );
}
