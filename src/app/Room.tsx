"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@liveblocks/react/suspense";
import { ClientSideSuspense } from "@liveblocks/react";
import ErrorListener from "@/components/ErrorListener";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider
      id="local-room"
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<ErrorListener />}>
        {children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
