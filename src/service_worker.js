const requiredPermissions = {
    origins: [
        "*://*.youtube.com/*",
        "*://yt3.ggpht.com/*"
    ]
}

let openedTabs = [];

function handleClick() {
    console.debug("Requesting permissions")
    chrome.permissions.request(requiredPermissions, () => {
        const lastTab = openedTabs.pop()
        chrome.tabs.update(lastTab, {
            url: "https://www.youtube.com",
        });
        chrome.tabs.remove(openedTabs);
        openedTabs.length = 0;
    })
}

function checkPermissions() {
    chrome.permissions.contains(requiredPermissions, (hasPermissions) => {
        if (!hasPermissions) {
            console.debug("Missing permissions")
            chrome.tabs.create({url: "missing_permissions.html", active: true}, (tab) => {;
                openedTabs.push(tab.id);
            });
        }
    });
}

chrome.action.onClicked.addListener(handleClick);
chrome.permissions.onRemoved.addListener(checkPermissions);

console.debug("Extension loaded");
checkPermissions()
