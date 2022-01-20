import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import theme from 'theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import OpenStreetMap from 'components/OpenStreetMap';

describe('コンポーネントテスト', () => {
  const TestTarget = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <OpenStreetMap />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  test('OpenStreetMap', () => {
    render(<TestTarget />);
    const element = screen.getByText('防災備蓄リスト');
    expect(element).toBeTruthy();
  });
});
