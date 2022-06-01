import React from "react";

// export default function Suit() {
//   const [choice, setChoice] = useState("");
//   return (
//     <div className="text-6xl flex justify-center gap-14">
//       <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500 hover:shadow-xl hover:shadow-amber-700">
//         <button
//           className="group-hover:scale-125"
//           onClick={() => setChoice("✌")}
//         >
//           ✌
//         </button>
//       </div>
//       <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500 hover:shadow-xl hover:shadow-amber-700">
//         <button
//           className="group-hover:scale-125"
//           onClick={() => setChoice("👊")}
//         >
//           👊
//         </button>
//       </div>
//       <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500 hover:shadow-xl hover:shadow-amber-700">
//         <button
//           className="group-hover:scale-125"
//           onClick={() => setChoice("🖐")}
//         >
//           🖐
//         </button>
//       </div>
//     </div>
//   );
// }
const Suit = (props) => {
  return (
    <button className="w-56 h-56 bg-amber-500 rounded-full text-6xl hover:bg-amber-200 hover:drop-shadow-2xl  shadow-amber-500 duration-200 transition-all ease-out group">
      <p className="group-hover:scale-125 group-hover:-translate-y-2 duration-150 group-hover:animate-pulse">
        {props.suit}
      </p>
    </button>
  );
};

export default Suit;
