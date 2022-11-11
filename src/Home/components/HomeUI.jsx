import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { Grid } from "@material-ui/core";

const HomeUI = (props) => {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    chargePositions();
  }, []);

  const chargePositions = () => {
    const positions = [];

    const row = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
      7: "G",
      8: "H",
      9: "I",
      10: "J",
      11: "K",
      12: "L",
      13: "M",
      14: "N",
    };
    for (let i = 1; i < 15; i++) {
      for (let j = 1; j <= 16; j++) {
        const position = { row: row[i], col: j, busy: false };
        positions.push(position);
      }
    }
    setStands(positions);
  };

  const handleClickPosition = (position) => {
    /* position.busy = true; */

    /* setStands(...position, position ) */
  };

  const handleClick = (position) => {
    return position.busy = true
  }

  console.log(stands);

  return (
    <div>
      <h1>ESTOY EN VISTA HOME</h1>
      <Grid xs={6}>
        {stands.map((pos) => (
          <Button
            disableElevation
            startIcon={<EventSeatIcon />}
            onClick={() => {
                handleClickPosition(pos)
                handleClick(pos)
            }
                
            }
            color={pos.busy ? "primary" : "secondary"}
          >
            {pos.row}
            {pos.col}
          </Button>
        ))}
      </Grid>
    </div>
  );
};

export default HomeUI;
