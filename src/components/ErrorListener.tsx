"use client";

import { useErrorListener } from "@liveblocks/react/suspense";

import React from "react";

import styles from "./ErrorListener.module.css";
import { Loading } from "./Loading";

const ErrorListener = () => {
  const [error, setError] = React.useState<string | undefined>();

  useErrorListener((error) => {
    switch (error.code) {
      case -1:
        // Authentication error
        break;

      case 4001:
        // Could not connect because you don't have access to this room
        setError("You don't have access to this room");

        break;

      case 4005:
        // Could not connect because room was full
        break;

      case 4006:
        // The room ID has changed, get the new room ID (use this for redirecting)
        break;

      default:
        // Unexpected error
        break;
    }
  });

  return error ? (
    <div className={styles.container}>
      <div className={styles.error}>{error}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default ErrorListener;
