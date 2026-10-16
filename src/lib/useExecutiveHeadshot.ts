import { useState, useEffect } from 'react';
import { SHAFIQ_OFFICIAL_HEADSHOT_DATA_URI } from '../assets/images/shafiqHeadshotBase64';

const STORAGE_KEY = 'shafiq_verified_user_headshot_v2';
const UPDATE_EVENT = 'shafiq_headshot_updated';

// Purge any old stale test keys from previous AI experiments
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('nexis_custom_headshot');
    localStorage.removeItem('nexis_custom_headshot_v2');
    localStorage.removeItem('nexis_custom_headshot_v3');
    localStorage.removeItem('shafiq_headshot');
  } catch (e) {
    // ignore
  }
}

export function getExecutiveHeadshotUrl(): string {
  if (typeof window !== 'undefined') {
    try {
      const custom = localStorage.getItem(STORAGE_KEY);
      if (custom && custom.startsWith('data:image/')) {
        return custom;
      }
    } catch (e) {}
  }
  return SHAFIQ_OFFICIAL_HEADSHOT_DATA_URI;
}

export function setExecutiveHeadshot(dataUriOrUrl: string) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, dataUriOrUrl);
      window.dispatchEvent(new Event(UPDATE_EVENT));
    } catch (e) {}
  }
}

export function resetExecutiveHeadshot() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event(UPDATE_EVENT));
    } catch (e) {}
  }
}

export function useExecutiveHeadshot(): string {
  const [headshot, setHeadshot] = useState<string>(() => getExecutiveHeadshotUrl());

  useEffect(() => {
    const handleUpdate = () => {
      setHeadshot(getExecutiveHeadshotUrl());
    };
    window.addEventListener(UPDATE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(UPDATE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return headshot;
}
