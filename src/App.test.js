import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importa el Router
import Navbar from './components/Navbar';

test('renders the logo and navigation links', () => {
  // Envuelve tu componente en un Router
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
