import { useState, useCallback, MouseEvent } from "react";

interface UseResize {
  width: number;
  isDragging: boolean;
  startResizing: (mouseDownEvent: React.MouseEvent<HTMLElement>) => void;
}

function useResize(
  initialSize: number = 350,
  minWidth: number = 250,
  maxWidth: number = 500,
): UseResize {
  const [width, setWidth] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLElement>) => {
      setIsDragging(true);

      const startWidth = width;
      const startX = mouseDownEvent.clientX;

      const doDrag = (mouseMoveEvent: MouseEvent) => {
        const currentX = mouseMoveEvent.clientX;
        const newWidth = startWidth + (currentX - startX);

        if (newWidth < minWidth || newWidth > maxWidth) {
          return;
        }
        setWidth(newWidth);
      };

      const stopDrag = () => {
        setIsDragging(false);
        document.removeEventListener(
          "mousemove",
          doDrag as unknown as EventListener,
        );
        document.removeEventListener("mouseup", stopDrag);
      };

      document.addEventListener(
        "mousemove",
        doDrag as unknown as EventListener,
      );
      document.addEventListener("mouseup", stopDrag);
    },
    [width, minWidth, maxWidth],
  );

  return { width, isDragging, startResizing };
}

export default useResize;
