import React, { PureComponent } from 'react'

export default class Pokemon extends PureComponent {
    render() {
        return (
            <div>
                <button
                    style={
                        {
                            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`})`
                        }}
                />
                <p>{this.props.pokemon.name}</p>
            </div>
        )
    }
}