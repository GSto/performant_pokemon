import { render, screen } from '@testing-library/react';
import Repeat from './repeat';

describe('<Repeat />', () => {
  it('repeats the child based on times prop', async () => {
    const times = 3
    const text = 'hello!'
    render(
      <Repeat times={times}>
        <span>{ text }</span>
      </Repeat>
    )
    const items = await screen.findAllByText(text)

    expect(items).toHaveLength(times)
  })
})