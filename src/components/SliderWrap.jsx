import { useRef, useCallback, useEffect, useState } from 'react';

function SliderWrap({ value, max, onChange }) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const getValueFromPosition = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return value;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return Math.round(ratio * max);
  }, [max, value]);

  const handlePointerDown = useCallback((e) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    const newVal = getValueFromPosition(e.clientX);
    onChange(newVal);
  }, [getValueFromPosition, onChange]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const newVal = getValueFromPosition(e.clientX);
    onChange(newVal);
  }, [getValueFromPosition, onChange]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const fillPercent = max > 0 ? (value / max) * 100 : 0;

  const handleLessSell = useCallback(() => {
    onChange(value - 1);
  }, [value, onChange]);

  const handleMoreSell = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  return (
    <div className="slider-wrap" id="slider-wrap">
      {/* Custom range slider */}
      <div
        className="rangeslider rangeslider--horizontal"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Hard sell intensity"
        tabIndex={0}
        id="hard-sell-slider"
      >
        <div className="rangeslider__fill" style={{ width: `${fillPercent}%` }} />
        <div className="rangeslider__handle" style={{ left: `calc(${fillPercent}% - 0.5em)` }} />
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
