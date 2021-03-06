import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import theme from 'theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';

jest.mock('leaflet');
describe('画面テスト', () => {
  const TestTarget = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  test('Dashboard', () => {
    render(<TestTarget />);
    const element = screen.getByText('みんなで備える防災備蓄マップ');
    expect(element).toBeTruthy();
  });
});
