import { render, screen } from '@testing-library/react';
import Stockpile from 'components/Stockpile';

import { ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import theme from 'theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('コンポーネントテスト', () => {
  const TestTarget = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Stockpile />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  test('Stockpile', () => {
    render(<TestTarget />);
    const element = screen.getByText('防災備蓄リスト');
    expect(element).toBeTruthy();
  });
});
