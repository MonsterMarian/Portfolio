import { useRef, useCallback, useEffect, useState } from 'react';

function SliderWrap({ value, max, onChange }) {
  const trackRef = useRef(null);
  const handleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const getValueFromPosition = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return value;
    const rect = track.getBoundingClientRect();
    
    // Width of the handle (1.8em) in pixels
    const handleWidth = handleRef.current ? handleRef.current.offsetWidth : 28.8;
    const activeWidth = rect.width - handleWidth;
    
    if (activeWidth <= 0) return 0;
    
    // clientX relative to the active track area (center-to-center)
    const relativeX = clientX - rect.left - handleWidth / 2;
    const ratio = Math.max(0, Math.min(1, relativeX / activeWidth));
    return Math.round(ratio * max);
  }, [max, value]);

  const handlePointerDown = useCallback((e) => {
    // Only handle primary button clicks (left click / touch)
    if (e.button !== 0 && e.button !== undefined) return;
    
    e.preventDefault();
    setIsDragging(true);
    const newVal = getValueFromPosition(e.clientX);
    onChange(newVal);
  }, [getValueFromPosition, onChange]);

  // Manage body class for preventing text selection during drag
  useEffect(() => {
    if (isDragging) {
      document.body.classList.add('is-dragging');
    } else {
      document.body.classList.remove('is-dragging');
    }
    return () => {
      document.body.classList.remove('is-dragging');
    };
  }, [isDragging]);

  // Window pointer event listeners for dragging
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      const newVal = getValueFromPosition(e.clientX);
      onChange(newVal);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, getValueFromPosition, onChange]);

  const handleLessSell = useCallback(() => {
    onChange(value - 1);
  }, [value, onChange]);

  const handleMoreSell = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const ratio = max > 0 ? value / max : 0;
  const fillPercent = ratio * 100;

  return (
    <div className="slider-wrap" id="slider-wrap">
      <div
        className="rangeslider rangeslider--horizontal"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Hard sell intensity"
        tabIndex={0}
        id="hard-sell-slider"
      >
        <div className="rangeslider__fill" style={{ width: `${fillPercent}%` }} />
        <div
          className="rangeslider__handle"
          ref={handleRef}
          style={{ left: `calc(${fillPercent}% - ${ratio * 1.8}em)` }}
        />
      </div>
      <div className="slider__scale">
        <span
          className="js-less-sell"
          onClick={handleLessSell}
          role="button"
          tabIndex={0}
          id="less-sell-btn"
        >
          Méně hrotit
        </span>
        <span
          className="js-more-sell"
          onClick={handleMoreSell}
          role="button"
          tabIndex={0}
          id="more-sell-btn"
        >
          Více hrotit
        </span>
      </div>
    </div>
  );
}

export default SliderWrap;
