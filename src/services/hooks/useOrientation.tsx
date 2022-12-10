// useOrientation.tsx
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export default function useOrientation(): 'PORTRAIT' | 'LANDSCAPE' {
  // State to hold the connection status
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE'>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );

  useEffect(() => {
    let isMounted = true
    const callback = () => setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    Dimensions.addEventListener('change', () => { isMounted ? callback() : null });

    // return () => {
    //   Dimensions.addEventListener('change', callback).remove()
    // }
    return () => { isMounted = false };
  }, [isPortrait]);

  return orientation;
}