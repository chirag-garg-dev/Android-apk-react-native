/**
 * @format
 */
import 'react-native';
import React,{Component, useState, useEffect} from 'react';
import {View, Text, Button, TextInput } from 'react-native';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react-native';
import CreateNote from './../app/screens/CreateNote'
import {useDispatch} from 'react-redux';
// import * as notesActions from "./../../../app/actions/notesActions";

const initialState = {}
const mockStore = configureStore()
let wrapper
let store

test('it create a Note', () => {

  const mockSubmit = jest.fn()
  window.alert = jest.fn()

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <CreateNote />
      </Provider>
    )
  })

  //  it('should be called after input is filled', () => {
  //   // input name
  //   wrapper.find('#name').simulate('change', {
  //     target: {
  //       name: 'name',
  //       value: 'laptop'
  //     }
  //   })
  //   // input desc
  //   wrapper.find('#desc').simulate('change', {
  //     target: {
  //       desc: 'desc',
  //       value: 'laptop bekas'
  //     }
  //   })
  //   // input best price
  //   wrapper.find('#best_price').simulate('change', {
  //     target: {
  //       best_price: 'best_price',
  //       value: 'laptop'
  //     }
  //   })
  //   // input discount
  //   wrapper.find('#discount').simulate('change', {
  //     target: {
  //       discount: 'discount',
  //       value: 'laptop'
  //     }
  //   })
  //   // input final price
  //   wrapper.find('#final_price').simulate('change', {
  //     target: {
  //       final_price: 'final_price',
  //       value: 'laptop'
  //     }
  //   })
  // })

 
 

 
  //       .changeText(getByPlaceholderText('Name'),'Chirag');
  // fireEvent.changeText(getByPlaceholderText('Title'),'Garg');
  // fireEvent.changeText(getByPlaceholderText('Description'),'simply alliance');

  // fireEvent.press(getByText('Submit'));

  

});