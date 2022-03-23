import { render, screen } from '@testing-library/react';
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';

test('renderizar título home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Usuários/i);
  expect(linkElement).toBeInTheDocument();
});

test('renderizar titulo da página de tarefas', () => {
  render(<Tasks />);
  const linkElement = screen.getByText(/Tarefas/i);
  expect(linkElement).toBeInTheDocument();
});
