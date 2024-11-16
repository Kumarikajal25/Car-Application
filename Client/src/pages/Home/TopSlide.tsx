import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { useState, useEffect } from "react";

const TopSlide = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener("mousemove", updateCursorPosition);
    } else {
      window.removeEventListener("mousemove", updateCursorPosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [isHovering]);

  return (
    <div className="relative flex items-center justify-center flex-col gap-2 max-h-full w-full">
      {/* Floating Car Image */}
      <img src="./car3.jpg" className="w-1/2 animate-floating" alt="Car" />
      {/* <div className=" flex object-contain   w-1/2">
      <video
        autoPlay
        muted
        loop
        className="  object-cover  "
        alt="Car"
      >
        <source src="./car6.mp4" type="video/mp4" />
      </video>

      </div> */}
     
      {/* Hoverable Text */}
      <div
        className="h-[30rem] flex items-center justify-center absolute"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <TextHoverEffect text="BMW" />
      </div>

      {/* Custom Cursor */}
     {isHovering && (
  <div
    className={`fixed w-10 h-10 bg-orange-600 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2`}
    style={{
      top: `${cursorPosition.y}px`,
      left: `${cursorPosition.x}px`,
    }}
  />
)}

    </div>
  );
};

export default TopSlide;
