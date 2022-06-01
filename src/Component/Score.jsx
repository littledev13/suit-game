import React from "react";

const Score = (props) => {
  return (
    <div className="score px-2 py-3 w-44 rounded-md border-2 border-amber-700 mt-5">
      <ul className="text-xl flex flex-col justify-center gap-1">
        <li>
          <pre className="text-slate-600 text-2xl font-bold">
            Round : {props.round}
          </pre>
        </li>
        <li>
          <pre className="text-green-600">Win&nbsp;&nbsp;: {props.win}</pre>
        </li>
        <li>
          <pre className="text-red-600">Lose&nbsp;: {props.lose}</pre>
        </li>
      </ul>
    </div>
  );
};

export default Score;
