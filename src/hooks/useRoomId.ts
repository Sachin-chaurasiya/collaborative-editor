import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useRoomId = () => {
  const searchParams = useSearchParams();

  const [roomId, setRoomId] = useState<string | null>(
    searchParams.get("roomId")
  );

  useEffect(() => {
    setRoomId(searchParams.get("roomId"));
  }, [searchParams]);

  return roomId;
};
