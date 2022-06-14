/**
 * @format
 */
import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import 'react-native';
import Home from '../app/screens/Home';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
});
