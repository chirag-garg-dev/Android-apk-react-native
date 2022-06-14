import '@testing-library/jest-dom'
import * as React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import { act, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Login from '../app/login'

const fakeUserResponse = {token: 'fake_user_token'}
const server = setupServer(
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  
})
afterAll(() => server.close())

test('allows the user to login successfully', async () => {
  render(<Login />)

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: 'norris'},
  })
})

//   fireEvent.click(screen.getByText(/submit/i))

//   // // just like a manual tester, we'll instruct our test to wait for the alert
//   // // to show up before continuing with our assertions.
//   // const alert = await screen.findByRole('alert')

//   // // .toHaveTextContent() comes from jest-dom's assertions
//   // // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
//   // // but jest-dom will give you better error messages which is why it's recommended
//   // expect(alert).toHaveTextContent(/congrats/i)
//   // expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
// })

// import '@testing-library/jest-dom'
// import * as React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'

// import { act, fireEvent, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";



// import Login from '../app/login'

// import renderer from 'react-test-renderer';

// describe('when valid email was filled', () => {
//     render(<Login />)
//   // beforeEach(() => {
//   //   subscribe = jest.fn();
//   //   wrapper = mount(<LogIn subscribe={subscribe}/>);
//   // });

//   describe('and when form was submitted', () => {
//     beforeEach(() => {
//       wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'root@email.com'}});
//       wrapper.find('#submit').simulate('submit');
//     });

//     it('should subscribe to the news with correct email', () => {
//       expect(subscribe).toHaveBeenCalledWith({email: 'root@email.com'});
//     });
//   });
// });