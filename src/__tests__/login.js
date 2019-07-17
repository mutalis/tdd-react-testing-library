import React from 'react'
import {renderIntoDocument, cleanup} from 'react-testing-library'
import {Login} from '../login'

afterEach(cleanup)

test('calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = renderIntoDocument(
    <Login onSubmit={handleSubmit} />,
  )
  getByLabelText(/username/i).value = 'chuck'
  getByLabelText(/password/i).value = 'norris'
  getByText(/submit/i).click()
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'chuck',
    password: 'norris',
  })
})
