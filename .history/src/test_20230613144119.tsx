import { useBackgroundTimer } from "rn-use-background-timer";

export const App = () => {
  const { duration } = useBackgroundTimer({
    keepPreviousTimer: true,
    onActive: () => console.log("active"),
    onBackground: () => console.log("background"),
  });
  return <h1>Hello World!</h1>;
};
