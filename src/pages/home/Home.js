import React, { useState } from "react";
import "./Home.css";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
function Home() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const handleCount = () => {
    dispatch(increment());
  };
  return (
    <div>
      <h1>This is the Home page</h1>
      <p>{count}</p>
      <Button onClick={handleCount} variant={"contained"}>
        Add
      </Button>
    </div>
  );
}

export default Home;
