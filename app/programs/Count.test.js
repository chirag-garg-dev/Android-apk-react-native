// import 'react-native';
// import React from 'react';
// import Count from './Count';

// import { render, screen } from '@testing-library/react';
// // import UserEvent from '@testing-library/user-event';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<Count />);
// });




/**
 * @format
 */
import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import 'react-native';
import Count from './Count';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  renderer.create(<Count />);
});









// describe('Testing App Component', () => {
//   test('counter is incremented on increment button click', () => {
//    renderer.create(<Count />);

//     const counter = screen.getByTestId('count');
//     const incrementBtn = screen.getByText('Increment');

//     // UserEvent.click(incrementBtn);
//     // UserEvent.click(incrementBtn);

//     expect(counter.textContent).toEqual('2');
//   });

// });

// import renderer from 'react-test-renderer';
// import Count from './Count';

// it('changes the class when hovered', () => {
//     renderer.create(<Count />);
  
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

