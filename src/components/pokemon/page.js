import React from 'react'
import Pokemon from './pokemon'
import Search from './search'

export default class Page extends React.Component {
    state = {
        searchString: '',
        pokemonIds: [],
        error: null
    }

    render() {
        return (
            <li>
                <Pokemon pokemon={this.state.pokemon} />
            </li>
        )
    }
}