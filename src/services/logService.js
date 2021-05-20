function init() {
  // Raven.config(
  //   "https://08e0a9a02d2146d6a61c37510e5b34ae@o618581.ingest.sentry.io/5751233",
  //   {
  //     release: "1-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error)
}

export default {
  init,
  log,
};
