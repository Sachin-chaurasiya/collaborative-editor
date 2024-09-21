"use client";

import React from "react";
import styles from "./ConnectToRoom.module.css";

import { useRouter } from "next/navigation";

const ConnectToRoom = () => {
  const router = useRouter();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const connectToRoom = async () => {
    const roomId = inputRef.current?.value;
    if (roomId && roomId.length > 0) {
      await (async () => router.push(`/room?roomId=${roomId}`))();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Connect to a room</h1>
      <p>Connect to a room to start collaborating with others.</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Room ID"
        className={styles.input}
      />
      <button className={styles.button} onClick={connectToRoom}>
        Connect
      </button>
    </div>
  );
};

export default ConnectToRoom;
