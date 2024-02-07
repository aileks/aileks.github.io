'use client';
import React, { useState, useEffect } from 'react';
import '../styles/cursor.css';

const FollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, []);

  return (
    <div className="follow-cursor-container" onMouseMove={handleMouseMove}>
      <div
        className="follow-cursor"
        style={{
          top: cursorPosition.y - 350,
          left: cursorPosition.x - 695,
        }}
      ></div>
    </div>
  );
};

export default FollowCursor;
