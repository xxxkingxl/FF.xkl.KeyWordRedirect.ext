const MARKER = "?_xkl-kw=";

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const i = details.url.indexOf(MARKER);
    if (i === -1) return {};
    return { redirectUrl: details.url.slice(0, i) };
  },
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);
