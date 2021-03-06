import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import theme from 'theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Template from 'pages/Template';
import OpenStreetMap from 'components/OpenStreetMap';

jest.mock('leaflet');
describe('コンポーネントテスト', () => {
  const TestTarget = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Template>
            <OpenStreetMap />
          </Template>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  test('OpenStreetMap', () => {
    render(<TestTarget />);
    const element = screen.getByText(
      'みんなで備える防災備蓄マップ / CC BY 4.0 / MIT License'
    );
    expect(element).toBeTruthy();
  });
});
