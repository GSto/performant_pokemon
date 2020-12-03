import { render, screen, fireEvent } from '@testing-library/react';
import Pokedex from './pokedex'

jest.mock('./viewport_only', () => ({
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
  it('sorts by number by default', async () => {
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
    const rows = await screen.getAllByTestId('row')
    expect(rows[0]).toHaveTextContent('Charizard')
    expect(rows[1]).toHaveTextContent('Mew')
  })

  it('can sort by name', async () => {
    const pokemon = [
      buildPokemon({
        name: 'Zubat',
      }),
      buildPokemon({
        name: 'Abra',
      })
    ]

    render(<Pokedex pokemon={pokemon} />)
    fireEvent.click(await screen.getByText(/name/i))

    const rows = await screen.getAllByTestId('row')
    expect(rows[0]).toHaveTextContent('Abra')
    expect(rows[1]).toHaveTextContent('Zubat')
  })
})