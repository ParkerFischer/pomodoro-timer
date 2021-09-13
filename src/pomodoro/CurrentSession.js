import React from "react";
import percentElapsed from "./PercentElapsed.js";
import CurrentSessionLabel from "./CurrentSessionLabel";
//function that is responsible for deciding if there is a current session in progress and dipslays that sessions progress.
function CurrentSession({
  session,
  secondsToDuration,
  focusDuration,
  breakDuration,
}) {
  if (session === null) {
    return null;
  } else {
    return (
      <div>
        {/* This area only shows when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* message below includes current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {CurrentSessionLabel({ session, focusDuration, breakDuration })}
            </h2>
            {/* message below correctly formats the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentElapsed(
                  session,
                  session?.timeRemaining,
                  focusDuration,
                  breakDuration
                )} // TODO: Increase aria-valuenow as elapsed time increases
                style={{
                  width: `${percentElapsed(
                    session,
                    session?.timeRemaining,
                    focusDuration,
                    breakDuration
                  )}%`,
                }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSession;
