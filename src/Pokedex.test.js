import { render, screen, fireEvent } from '@testing-library/react';
import Pokedex from './pokedex'

jest.mock('./ViewportOnly', () => ({
  __esModule: true,
  default: ({ children }) => children
}))

function buildPokemon(attributes) {
  return {
    img: '',
    num: '001',
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    height: '0.71 m',
    weight: '6.9 kg',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    ...attributes
  }
}

describe('pokedex', () => {
  it('sorts by number by default', () => {
    const pokemon = [
      buildPokemon({
        name: 'Mew',
        num: '151',
      }),
      buildPokemon({
        name: 'Charizard',
        num: '006',
      })
    ]

    render(<Pokedex pokemon={pokemon} />)
    const rows = screen.getAllByTestId('row')
    expect(rows[0]).toHaveTextContent('Charizard')
    expect(rows[1]).toHaveTextContent('Mew')
  })

  it('can sort by name', () => {
    const pokemon = [
      buildPokemon({
        name: 'Zubat',
      }),
      buildPokemon({
        name: 'Abra',
      })
    ]

    render(<Pokedex pokemon={pokemon} />)
    fireEvent.click(screen.getByText(/name/i))

    const rows = screen.getAllByTestId('row')
    expect(rows[0]).toHaveTextContent('Abra')
    expect(rows[1]).toHaveTextContent('Zubat')
  })
})

test('sorts data by defaultKey', () => {
  const mock = jest.fn
  render(<SortableTable>
    { mock(sorted, headerProps) }
    </SortableTable>
  )
  expect(mock).toHaveBeenCalledWith(expected, expectedHeaderProps)
})