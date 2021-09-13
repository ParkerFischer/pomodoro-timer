import React from "react";
import { minutesToDuration } from "../utils/duration";

//function that will change the lebal for the session dependent on what type the current session is and how much is remaining.
function CurrentSessionLabel({ session, focusDuration, breakDuration }) {
  if (session?.label === "On Break") {
    return (
      <>
        {session?.label} for {minutesToDuration(breakDuration)} minutes
      </>
    );
  } else {
    return (
      <>
        {session?.label} for {minutesToDuration(focusDuration)} minutes
      </>
    );
  }
}

export default CurrentSessionLabel;
