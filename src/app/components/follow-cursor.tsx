'use client';

import { useRef, useEffect } from 'react';
import '../styles/cursor.css';

const FollowCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorVisible = useRef<boolean>(false);
  const cursorEnlarged = useRef<boolean>(false);
  const endX = useRef<number>(0);
  const endY = useRef<number>(0);
  const _x = useRef<number>(0);
  const _y = useRef<number>(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const toggleCursorVisibility = () => {
      if (cursorVisible.current) {
        cursorRef.current!.style.opacity = '1';
      } else {
        cursorRef.current!.style.opacity = '0';
      }
    };

    const toggleCursorSize = () => {
      if (cursorEnlarged.current) {
        cursorRef.current!.style.transform = 'translate(-50%, -50%) scale(0.7)';
      } else {
        cursorRef.current!.style.transform = 'translate(-50%, -50%) scale(0.7)';
      }
    };

    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    };

    const mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
    };

    const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
    };

    const mouseMoveEvent = (e: MouseEvent) => {
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;

      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(animateCursor);
      }
    };

    const animateCursor = () => {
      _x.current += endX.current - _x.current;
      _y.current += endY.current - _y.current;

      cursorRef.current!.style.left = `${_x.current}px`;
      cursorRef.current!.style.top = `${_y.current}px`;

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseover', mouseOverEvent);
    document.addEventListener('mouseout', mouseOutEvent);

    animateCursor();

    return () => {
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseover', mouseOverEvent);
      document.removeEventListener('mouseout', mouseOutEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className={'follow-cursor'} />;
};

// const FollowCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const handleMouseMove = useCallback((e: MouseEvent): void => {
//     setCursorPosition({ x: e.clientX, y: e.clientY });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="follow-cursor"
//       style={{
//         position: 'fixed',
//         transform: `translate(${cursorPosition.x - 550}px, ${cursorPosition.y - 150}px)`,
//       }}
//     ></div>
//   );
// };

export default FollowCursor;
