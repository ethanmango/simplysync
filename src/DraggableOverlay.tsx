// src/DraggableOverlay.tsx
import React, { useState, useEffect, useRef } from 'react';

const DraggableOverlay: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && boxRef.current) {
      let newLeft = e.clientX - offset.x;
      let newTop = e.clientY - offset.y;

      // Boundary checks
      if (newLeft < 0) {
        newLeft = 0;
      } else if (newLeft + boxRef.current.offsetWidth > window.innerWidth) {
        newLeft = window.innerWidth - boxRef.current.offsetWidth;
      }

      if (newTop < 0) {
        newTop = 0;
      } else if (newTop + boxRef.current.offsetHeight > window.innerHeight) {
        newTop = window.innerHeight - boxRef.current.offsetHeight;
      }

      boxRef.current.style.left = `${newLeft}px`;
      boxRef.current.style.top = `${newTop}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      style={{
        position: 'fixed',
        top: '50px',
        left: '50px',
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        cursor: 'move',
        zIndex: 9999, // Ensure it's on top
      }}
    />
  );
};

export default DraggableOverlay;