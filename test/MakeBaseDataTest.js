//import * as baseMap form '../data/ceqRT.mjs';
const jsLoadList = {
  one: {
    fileArr: ['ceqRT', 'cunRT', 'fSSP', 'h08CS', 'h08eqAI', 'h08IB', 'h08RB1', 'h08RB2', 'h08unAI', 'h10CT', 'h10HB', 'h10HM', 'h10HN', 'h10HP', 'h10HT', 'h10HW', 'h10SP', 'h10SS', 'h10TB', 'h10TM', 'h10TN', 'h10TW', 'h10W14', 'h10W24', 'h10W36', 'h10W40', 'h10W44', 'h10WB', 'h10ZT', 'h17HB', 'h17HM', 'h17HN', 'h17HT', 'h17HW', 'h17TB', 'h17TM', 'h17TN', 'h17TW', 'h17W14', 'h17W24', 'h17W36a', 'h17W36b', 'h17W40a', 'h17W40b', 'h17W44', 'h17WB', 'heqRT', 'hunRT', 'tSSP', 'opMap'],
    filePath: './data/',
    async: true,
    defer: false,
    waitTime: 0
  },
  two: {
    fileArr: ['PublicFunction'],
    filePath: './js/',
    async: true,
    defer: false,
    waitTime: 0
  },
  three: {
    fileArr: ['MakeInitData'],
    filePath: './js/',
    async: false,
    defer: true,
    waitTime: 15
  },
};

function loadScript(src, async, defer, callback) {
  let script = document.createElement('script'),
    fn = callback || function() {};

  //IE
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        fn();
      }
    };
  } else {
    //其他浏览器
    script.onload = function() {
      fn();
    };
  }
  script.type = 'text/javascript';
  script.async = async;
  script.defer = defer;
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function consolelog(txt) {
  console.log(txt);
}

for (let port in jsLoadList) {
  let obj = jsLoadList[port];
  obj.fileArr.forEach(function(fileName) {
    let _src = "'" + String(obj.filePath) + String(fileName) + '.js' + "'",
      _async = String(obj.async),
      _defer = String(obj.defer),
      _date = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
    let txt = "'" + String(obj.filePath) + String(fileName) + '.js' + ' is onload. At ' + _date + "'";
    setTimeout("loadScript(" + _src + "," + _async  + "," + _defer + ", consolelog(" + txt + "))", jsLoadList[port].waitTime);
  });
}
