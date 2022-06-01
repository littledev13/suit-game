import React from "react";

const Button = (props) => {
  return (
    <button className="px-10 py-6 text-3xl font-bold rounded-2xl uppercase bg-clip-text text-transparent border-4 border-slate-200 | bg-gradient-to-r from-yellow-200 to-yellow-500 | group">
      <p className="group-hover:bg-clip-text group-hover:text-transparent  group-hover:border-slate-200 | group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 | group-hover:scale-125">
        {props.text}
      </p>
    </button>
  );
};

export default Button;
