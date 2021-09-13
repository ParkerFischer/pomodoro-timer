//function to calculate the percentage of time remaining in the session and is passed to the progress bar
function percentElapsed(session, timeRemaining, focusDuration, breakDuration) {
  const focusTime = focusDuration * 60;
  const breakTime = breakDuration * 60;

  const breakDiff = breakTime - timeRemaining;
  const focusDiff = focusTime - timeRemaining;

  if (session.label === "On Break") {
    return (breakDiff / breakTime) * 100;
  } else {
    return (focusDiff / focusTime) * 100;
  }
}

export default percentElapsed;
