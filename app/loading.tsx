import React from "react";
import Image from "next/image";
import loader from "@/assets/styles/load.gif";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} alt="Loading..." height={160} width={160} />
    </div>
  );
}
