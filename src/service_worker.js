function handleClick() {
    console.debug("Requesting permissions")
    chrome.permissions.request({
        origins: [
            "*://*.youtube.com/*",
            "*://yt3.ggpht.com/*"
        ]
    })
}

chrome.action.onClicked.addListener(handleClick);

console.debug("Add-on loaded");
