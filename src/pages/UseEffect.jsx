// import { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [hidden, setHidden] = useState(false);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log(count);
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return (
//     <div>
//       <button
//         onClick={() => setHidden((prev) => !prev)}
//         className="btn bnt-primary"
//       >
//         {hidden ? 'show': "hide"}
//       </button>
//       {!hidden &&}
//     </div>
//   );
// };

// export default UseEffect;
