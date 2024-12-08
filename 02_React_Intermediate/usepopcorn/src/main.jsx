import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Appv1 from "./Appv1";
import "./index.css";
// import App from './App.jsx'

// import StarRating from "./Components/StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} Stars</p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={10} size={24} color="red" className="test" />
    <Test /> */}
    <Appv1 />
  </StrictMode>
);
