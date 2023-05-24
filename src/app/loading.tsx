import React from "react";
import spinner from "./spinner.svg";
import Image from "next/image";
export default function loading() {
  return (
    <div className="flex justify-center">
      <Image height={32} width={32} priority alt="... " src={spinner} />
    </div>
  );
}
