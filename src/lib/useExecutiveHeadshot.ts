import { useState, useEffect } from 'react';
import defaultHeadshot from '../assets/images/shafiq_about_portrait_1790861662502.jpg';

const STORAGE_KEY = 'nexis_custom_headshot_v2';
const EVENT_NAME = 'nexis_headshot_updated';

export function getExecutiveHeadshotUrl(): string {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem(STORAGE_KEY);
    if (custom) return custom;
  }
  return defaultHeadshot;
}

export function setExecutiveHeadshot(urlOrBase64: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, urlOrBase64);
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

export function resetExecutiveHeadshot() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

export function useExecutiveHeadshot() {
  const [headshot, setHeadshot] = useState<string>(() => getExecutiveHeadshotUrl());

  useEffect(() => {
    const handleUpdate = () => {
      setHeadshot(getExecutiveHeadshotUrl());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return headshot;
}
