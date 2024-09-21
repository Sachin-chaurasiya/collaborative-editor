"use client";

import { LiveblocksProvider } from "@liveblocks/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();

  const [roomId, setRoomId] = useState<string | null>(
    searchParams.get("roomId")
  );

  useEffect(() => {
    setRoomId(searchParams.get("roomId"));
  }, [searchParams]);

  return (
    <LiveblocksProvider
      key={roomId}
      authEndpoint={`/api/liveblocks-auth?roomId=${roomId}`}
    >
      {children}
    </LiveblocksProvider>
  );
}
