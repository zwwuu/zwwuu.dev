import "~/styles/globals.css";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

import seo from "~/lib/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  event(metric.name, {
    event_category: metric.label === "web-vital" ? "Web Vitals" : "custom metric",
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value), // values must be integers
    event_label: metric.id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}
