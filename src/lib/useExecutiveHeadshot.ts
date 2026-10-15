import defaultHeadshot from '../assets/images/shafiq_about_portrait_1790861662502.jpg';

const EVENT_NAME = 'nexis_headshot_updated';

// Purge any stale localStorage keys from previous AI image tests or uploads
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
  return defaultHeadshot || '/images/shafiq_rahman_headshot.jpg';
}

export function setExecutiveHeadshot(_urlOrBase64: string) {
  // Headshot is locked to Shafiq Rahman's official portrait
}

export function resetExecutiveHeadshot() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('nexis_custom_headshot_v2');
    } catch (e) {}
  }
}

export function useExecutiveHeadshot(): string {
  return defaultHeadshot || '/images/shafiq_rahman_headshot.jpg';
}
