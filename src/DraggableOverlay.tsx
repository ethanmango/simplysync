// src/components/DraggableOverlay.tsx
import React, { useRef } from 'react';
import { useDrag } from 'react-use-gesture';

const DraggableOverlay: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const bind = useDrag(({ offset: [x, y] }) => {
    if (overlayRef.current) {
      overlayRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  });

  return (
    <div
      ref={overlayRef}
      {...bind()}
      className="fixed top-0 left-0 bg-white bg-opacity-50 border border-gray-300 p-4 cursor-move shadow-lg"
      style={{ zIndex: 9999 }}
    >
      Draggable Overlay
    </div>
  );
};

export default DraggableOverlay;
