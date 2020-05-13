export const GA_TRACKING_ID = 'UA-166395039-1';

declare global {
  interface Window {
    gtag: (event: string, action: string, value: any) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = (action: string , category: string, label: string, value: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}