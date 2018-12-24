var Importjcs = [
  //'.\\css\\All.css',
  '.\\js\\PublicFunction.js',
  '.\\js\\BaseData.js',
  '.\\js\\InitData.js',
  '.\\js\\OutPutDisplay.js',
  '.\\js\\Interface.js',
  '.\\js\\Cal.js',
  '.\\js\\main.js'
];

function loadJS(url, success) {
  var domScript = document.createElement('script');
  domScript.src = url;
  success = success || function() {};
  domScript.onload = domScript.onreadystatechange = function() {
    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
      success();
      this.onload = this.onreadystatechange = null;
      this.parentNode.removeChild(this);
    }
  }
  document.getElementsByTagName('head')[0].appendChild(domScript);
};

function loadjsToHTML(arr) {
  let txt = '';
  len = arr.length;
  for (let i = 0; i < len; i++) {
	if (i < len-1) {
		txt += `loadJS('${arr[i]}', function(){`;
	} else {
		txt += `loadJS('${arr[i]}', function(){})`;
	}
  }
  for (let j = 0; j < len-1; j++) {
	txt += `});`;
  }
  eval(txt);
};
/*
function loadjsToHTML(arr) {
  let txt;
  for (let i = 0; i < arr.length; i++) {
    txt = arr[i].slice(-3)
    if (txt === '.js') {
      setTimeout(loadJS(arr[i]),25000);
	}
  }
}
*/
loadjsToHTML(Importjcs);
