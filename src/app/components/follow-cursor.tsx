'use client';

import React, { useState, useEffect } from 'react';
import '../styles/cursor.css';

const FollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent): void => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="follow-cursor"
      style={{
        position: 'fixed',
        top: cursorPosition.y - 150,
        left: cursorPosition.x - 150,
      }}
    ></div>
  );
};

export default FollowCursor;
