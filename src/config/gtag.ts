export const GA_TRACKING_ID : string = "G-G29HHFRFLQ" 



declare global {
    interface Window {
      gtag: (
        command: string,
        trackingId: string,
        config: { [key: string]: any }
      ) => void;
    }
  }


// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url : any) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  }) 
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action , category, label, value } : any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}