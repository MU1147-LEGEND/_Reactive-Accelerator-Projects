import { useState } from "react";
const App = ({ xIsNext, squares, onPlay }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };
    return (
        <div>
            <p>
                {winner
                    ? `Winner is : ${winner}`
                    : `Next Move ${xIsNext ? "X" : "O"}`}
            </p>
            <div className="grid grid-cols-3 w-fit">
                <Square value={squares[0]} handleClick={() => handleClick(0)} />
                <Square value={squares[1]} handleClick={() => handleClick(1)} />
                <Square value={squares[2]} handleClick={() => handleClick(2)} />
                <Square value={squares[3]} handleClick={() => handleClick(3)} />
                <Square value={squares[4]} handleClick={() => handleClick(4)} />
                <Square value={squares[5]} handleClick={() => handleClick(5)} />
                <Square value={squares[6]} handleClick={() => handleClick(6)} />
                <Square value={squares[7]} handleClick={() => handleClick(7)} />
                <Square value={squares[8]} handleClick={() => handleClick(8)} />
            </div>
        </div>
    );
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {}

    return (
        <div>
            <div>
                <App
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <ol>{/* TBD */}</ol>
            </div>
        </div>
    );
};
export default Game;

const Square = ({ value, handleClick }) => {
    return (
        <button
            className="border border-gray-400 h-12 w-12 m-1 text-4xl pb-0.5"
            onClick={() => {
                handleClick();
            }}
        >
            {value}
        </button>
    );
};

const calculateWinner = (squares) => {
    const gameIndex = [
        [0, 1, 2], // উপরের সারি
        [3, 4, 5], // মাঝের সারি
        [6, 7, 8], // নিচের সারি
        [0, 3, 6], // বাম কলাম
        [1, 4, 7], // মাঝের কলাম
        [2, 5, 8], // ডান কলাম
        [0, 4, 8], // ডায়াগোনাল
        [2, 4, 6], // আরেকটা ডায়াগোনাল
    ];

    for (let i = 0; i < gameIndex.length; i++) {
        let [a, b, c] = gameIndex[i];
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};
