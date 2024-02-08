'use client';

import React, {useState, useEffect} from 'react';
import '../styles/cursor.css';

const FollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
  const handleMouseMove = (e: MouseEvent): void => {
    setCursorPosition({x: e.pageX, y: e.pageY});
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
        top: cursorPosition.y - 250,
        left: cursorPosition.x - 250,
      }}
    ></div>
  );
};

export default FollowCursor;
