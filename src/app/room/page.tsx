"use client";

import { Room } from "@/app/Room";
import { Editor } from "@/components/Editor";

export default function RoomPage() {
  return (
    <main>
      <Room>
        <Editor />
      </Room>
    </main>
  );
}
