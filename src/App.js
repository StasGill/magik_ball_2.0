import React, { useState } from "react";
import "./App.css";
import wish from "./wish";
import { CSSTransition } from "react-transition-group";
import audio from "./audio/magic.mp3";

const initialState = {
  newWish: "",
  warning: false,
};

function App() {
  const [state, setState] = useState({ ...initialState });

  let audios = new Audio(audio);

  const magic = () => {
    if (state.warning) {
      setState({
        newWish: ["Приходи завтра за новым предвидиньем"],
        warning: true,
      });
    } else {
      const random = Math.floor(Math.random() * 81);
      setState({ newWish: [wish[random]], warning: true });
      audios.play();
    }
  };

  return (
    <div className="ballContainer " onClick={magic}>
      <CSSTransition in={true} timeout={300} classNames="alert" appear>
        <p className="ballTeazer">Magic!</p>
      </CSSTransition>

      <p className="ballWish">{state.newWish}</p>

      {state.warning && ""}
    </div>
  );
}

export default App;
