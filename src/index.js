import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import demo4 from './demo4'
import Demo5 from './demo5'
import './index.css';

function Square(props) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    if (props.highlight) {
        return (
            <button className="square" onClick={props.onClick} style={{ color: 'red' }}>
                {props.value}
            </button>
        );
    } else {
        return (
            <button className="square" onClick={props.onClick} >
                {props.value}
            </button>
        );
    }

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: [a, b, c] };
        }
    }
    return { winner: null, line: [] };
}

class Board extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // }

    renderSquare(i, x, y) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i, x, y)}
                highlight={this.props.winnerline.includes(i)}
            />
        );
    }

    render() {


        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0, 1, 3)}
                    {this.renderSquare(1, 2, 3)}
                    {this.renderSquare(2, 3, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, 1, 2)}
                    {this.renderSquare(4, 2, 2)}
                    {this.renderSquare(5, 3, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, 1, 1)}
                    {this.renderSquare(7, 2, 1)}
                    {this.renderSquare(8, 3, 1)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,

        };
    }

    handleClick(i, x, y) {
        console.log(i, '座標(' + x + ',' + y + ')');
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares).winner || squares[i]) {

            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const location = '(' + x + ',' + y + ')';
        const desc = squares[i] + ' move to' + location;
        this.setState({
            history: history.concat([{
                squares: squares,
                lastStep: desc,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        console.log('jumpTo ' + step);
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2 === 0),
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares).winner;
        const winnerline = calculateWinner(current.squares).line;

        const moves = history.map((step, move) => {

            const desc = step.lastStep ?
                step.lastStep :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, x, y) => this.handleClick(i, x, y)}
                        winnerline={winnerline}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(

    <Router>
        <Demo5>
            <span>hello</span>
            <span>world</span>
        </Demo5>
        <Route path='/demo4/:name' component={demo4} />
        <Route path='/game' component={Game} />
    </Router>,
    document.getElementById('root')
);
