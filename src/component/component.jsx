import React from "react";

export default function Component({ name, color }) {
  return (
    <div>
      <h1 style={{ color }} className="text-3xl font-bold underline">
        Hello {name}!
      </h1>
    </div>
  )
}