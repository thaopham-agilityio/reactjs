import { memo } from 'react';

/**
 * Primary UI component for user interaction
 */
export const LoadingIndicator = memo(() => {
  return (
    <div className="loading-indicator">
      <div className="loading"></div>
    </div>
  );
});
