import React from 'react';
// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument;
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId("count").textContent).toContain("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increase = screen.getByText("+");
  fireEvent.click(increase);
  fireEvent.click(increase);
  expect(screen.getByTestId("count").textContent).toContain("2");
  fireEvent.click(increase);
  expect(screen.getByTestId("count").textContent).toContain("3");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrease = screen.getByText("-");
  fireEvent.click(decrease);
  fireEvent.click(decrease);
  expect(screen.getByTestId("count").textContent).toContain("-2");
  fireEvent.click(decrease);
  expect(screen.getByTestId("count").textContent).toContain("-3");
});
