import useTictactoe from "../hooks/useTicTakToe";

const Tic_tak_toe = () => {
  const { board, resetGame, handleClick, getStatusMessaage } =
    useTictactoe();
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <div className=" font-semibold">
        {getStatusMessaage()}
        <button onClick={resetGame} className=" border-2  ml-7">
          Reset Game
        </button>
      </div>

      <div className="grid grid-cols-3 mt-2">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              onClick={()=>handleClick(index)}
              disabled={b !== null}
              className=" hover:bg-slate-300 border text-2xl border-black font-semibold bg-slate-200  w-20 h-20"
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tic_tak_toe;
