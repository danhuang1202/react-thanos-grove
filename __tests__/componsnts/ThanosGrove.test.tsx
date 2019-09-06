import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ThanosGrove from '@components/ThanosGrove'

let time = Date.now()
jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
  time += 60000
  callback(time)
  return time
})

describe('ThanosGrove', () => {
  it('[sanpshot] before decimation', () => {
    const { container } = render(<ThanosGrove />)

    expect(container).toMatchSnapshot()
  })

  it('[sanpshot] after decimation', () => {
    jest.useFakeTimers()

    const { container, getByTestId } = render(<ThanosGrove />)

    fireEvent.click(getByTestId('grove'))

    jest.advanceTimersByTime(60000)

    expect(container).toMatchSnapshot()

    jest.clearAllTimers()
  })

  it('should call handler function', () => {
    const onDecimation = jest.fn(() => {})
    const onReverse = jest.fn(() => {})

    const { getByTestId } = render(
      <ThanosGrove onDecimation={onDecimation} onReverse={onReverse} />
    )

    fireEvent.click(getByTestId('grove'))
    jest.advanceTimersByTime(60000)

    expect(onDecimation).toHaveBeenCalled()

    fireEvent.click(getByTestId('grove'))
    jest.advanceTimersByTime(60000)

    expect(onReverse).toHaveBeenCalled()
  })
})
