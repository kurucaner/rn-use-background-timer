import { useBackgroundTimer } from "rn-use-background-timer";

export const App = () => {
  const { duration } = useBackgroundTimer();
  return <h1>Hello World!</h1>;
};
