// docs: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest

function redirectRequest(details) {
    console.debug("Redirecting, details:", details);
    return {
        redirectUrl: details.url.replace("yt3.ggpht.com", "yt4.ggpht.com")
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirectRequest,
    { urls: ["*://yt3.ggpht.com/*"] },
    ["blocking"]
);

console.debug("Add-on loaded");
