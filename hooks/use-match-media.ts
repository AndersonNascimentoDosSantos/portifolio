/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react';

export const useMatchMedia = (query: string, matchImmediate = true) => {
  const [match, setMatch] = useState(false);

  const handleOnChange = useCallback((event: MediaQueryListEvent) => {
    setMatch(event.matches);
  }, []);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }

    const matchMedia = window.matchMedia(query);

    if (matchImmediate && matchMedia.matches) {
      setMatch(true);
    }

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleOnChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleOnChange);
      }
    };
  }, [handleOnChange, matchImmediate, query]);

  return match;
};
