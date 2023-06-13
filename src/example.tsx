import React from "react";
import { useBackgroundTimer } from "rn-use-background-timer";

export const App = () => {
  const { duration } = useBackgroundTimer({
    keepPreviousTime: true,
    onActive: () => console.log("active"),
    onBackground: () => console.log("background"),
    onError: () => console.log("error"),
  });
  return <h3>{duration}</h3>;
};
