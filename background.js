chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ newTabUrl: chrome.runtime.getURL('index.html') });
});
