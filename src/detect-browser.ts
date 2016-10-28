declare var window: any;
declare var document: any;
declare var InstallTrigger;
declare var opr;

// See for reference:
// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

export function getBrowserVendor() {
  let isOpera = (!!window['opr'] && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  if (isOpera) return Browser.Opera;

  let isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) return Browser.Firefox;

  let isIE = /*@cc_on!@*/false || !!document.documentMode;
  if (isIE) return Browser.InternetExplorer;
  
  let isEdge = !isIE && !!window.StyleMedia;
  if (isEdge) return Browser.Edge;

  let isChrome = !!window.chrome && !!window.chrome.webstore;
  if (isChrome) return Browser.Chrome;

  let isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isBlink) return Browser.Blink;

  let isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  // Fix for Safari 10  
  if (!isSafari) {
    isSafari = !isChrome && !isOpera && window.webkitAudioContext !== undefined;
  }
  if (isSafari) return Browser.Safari;

  return Browser.Unkown;
}

export enum Browser {
  Unkown,
  Opera,
  Firefox,
  InternetExplorer,
  Edge,
  Chrome,
  Safari,
  Blink
}


