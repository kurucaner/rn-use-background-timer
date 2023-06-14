import { useRef, useState, useEffect, useCallback } from "react";
import { AppState, AppStateStatus } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "./utils/helpers";

interface IProps {
  keepPreviousTime?: boolean;
  onError?: (error: any) => void;
  onBackground?: () => void;
  onActive?: () => void;
}

export const useBackgroundTimer = ({
  keepPreviousTime = false,
  onError = console.error,
  onBackground,
  onActive,
}: IProps = {}): {
  duration: number;
} => {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = useCallback(
    async (nextAppState: AppStateStatus) => {
      if (
        appState.current === "active" &&
        nextAppState.match(/inactive|background/)
      ) {
        onBackground && onBackground();

        await AsyncStorage.setItem("@start_time", new Date().toISOString());
      } else if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        onActive?.();

        try {
          const startTime = await AsyncStorage.getItem("@start_time");
          if (startTime) {
            const now = new Date();
            const elapsedNew = differenceInSeconds(now, new Date(startTime));
            setDuration((prevElapsed) =>
              keepPreviousTime ? prevElapsed + elapsedNew : elapsedNew
            );
          }
        } catch (err) {
          onError(err);
        }
      }

      appState.current = nextAppState;
    },
    [keepPreviousTime, onError, onBackground, onActive]
  );

  return { duration };
};
