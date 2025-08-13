(function(global) {
  function makeHrnUrl(text, type = "text/plain") {
    const base64 = btoa(unescape(encodeURIComponent(text)));
    return `https://hrn-vercel.vercel.app/api?type=${encodeURIComponent(type)}&data=${encodeURIComponent(base64)}`;
  }

  // export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = makeHrnUrl; // Node.js
  } else {
    global.makeHrnUrl = makeHrnUrl; // Browser
  }
})(this);
