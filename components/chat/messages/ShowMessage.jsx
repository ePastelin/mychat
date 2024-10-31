import { useEffect, useState } from "react";
import ShowDocument from "./ShowDocument";
import Image from "next/image";

export default function ShowMessage({ msg }) {
  const [mediaSrc, setMediaSrc] = useState("");

  useEffect(() => {
    if (msg.media) {
      const url = `${API_BASE_URL}/multimedia/${msg.media}`;
      setMediaSrc(url);
    }
  }, [msg.media]);

  if (msg.type === 1)
    return (
      <Image
        src={mediaSrc}
        alt="Media"
        className="max-w-xs"
        width={500}
        height={400}
      />
    );

  if (msg.type === 5)
    return (
      <ShowDocument
        filename={msg.filename}
        mimeType={msg.mimeType}
        mediaSrc={mediaSrc}
      />
    );
}
