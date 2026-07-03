import * as Sentry from "@sentry/astro";
Sentry.init({
  dsn: "https://a94ea452cb364f628d2867314cf41c55@o4511666771918848.ingest.de.sentry.io/4511670479159376",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});