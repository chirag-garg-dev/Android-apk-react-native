import '@testing-library/jest-dom'
import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { act, fireEvent, render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Hello from './Hello';

test('renders correctly', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

