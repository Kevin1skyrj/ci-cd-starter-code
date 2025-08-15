import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import App from './App';

test('renders Github Actions heading', () => {
  render(<App />);
  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toHaveTextContent(/Github Actions/i)
});

test('contains an h1 element', () => {
  render(<App />);
  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toBeInTheDocument();
});

test('contains an h2 element', () => {
  render(<App />);
  const h2 = screen.getByRole('heading', { level: 2 })
  expect(h2).toBeInTheDocument();
});