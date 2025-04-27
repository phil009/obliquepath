"use client";

import Typewriter from "typewriter-effect";

interface TypewriterEffectProps {
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterComplete?: number;
}

export function TypewriterEffect({
  className = "gradient-text",
  typingSpeed = 50,
  deletingSpeed = 40,
  delayAfterComplete = 1000,
}: TypewriterEffectProps) {
  return (
    <h1 className={className}>
      <Typewriter
        options={{
          delay: typingSpeed,
          deleteSpeed: deletingSpeed,
          cursor: "_",
          cursorClassName: "gradient-text",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Automate. ")
            .pauseFor(delayAfterComplete)
            .typeString("Accelerate. ")
            .pauseFor(delayAfterComplete)
            .typeString("Transform.")
            .start();
        }}
      />
    </h1>
  );
}
