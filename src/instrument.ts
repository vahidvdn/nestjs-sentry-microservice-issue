/* eslint-disable @typescript-eslint/no-require-imports */

const Sentry = require('@sentry/nestjs');

// Ensure to call this before requiring any other modules!

const SENTRY_DSN = process.env.SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [
    // Add our Profiling integration
  ],
});
