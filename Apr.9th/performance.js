console.log(Date.now() - performance.timing.navigationStart)


var t = performance.timing;
var pageloadtime = t.loadEventStart - t.navigationStart;
var dns = t.domainLookupEnd - t.domainLookupStart;
var tcp = t.connectEnd - t.connectStart;
var ttfb = t.responseStart - t.navigationStart;