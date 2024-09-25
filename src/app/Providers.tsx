"use client";

import { useRoomId } from "@/hooks/useRoomId";
import { LiveblocksProvider } from "@liveblocks/react";
import { type PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const roomId = useRoomId();

  return (
    <LiveblocksProvider
      key={roomId}
      authEndpoint={`/api/liveblocks-auth?roomId=${roomId}`}
    >
      {children}
    </LiveblocksProvider>
  );
}
