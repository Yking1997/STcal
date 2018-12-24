window.onload = function() {
  let testObj = {
    //let calST = new CalculateteModule();
    //let calST = CalculateModule();
    AI1: {
      'STCode': 'eqAI',
      'hig': 25,
      'tic': 3
    },
    AI2: {
      STCode: 'unAI',
      hig: 30,
      bre: 20,
      tic: 3
    },
    AI3: {
      STCode: 'eqAI',
      hig: 300,
      tic: 10
    },
    HB: {
      STCode: 'h10HB',
      hig: 100,
      bre: 100,
      dic: 6,
      tic: 8,
      rad: 8
    },
    CS: {
      STCode: 'CS',
      hig: 100,
      bre: 48,
      dic: 5.3,
      tic: 8.5,
      rad: 8.5
    },
    SS: {
      STCode: 'SS',
      dad: 100,
      tic: 8
    },
    error: {
      bre: 0,
      hig: 0
    }
  };

  let testArray = [{
      'STCode': 'cunRT',
      'hig': 40,
      'bre': 20,
      'tic': 3
    },
    {
      STCode: 'h08RB2',
      dad: 100
    }
  ];

  function test(obj) {
    let num = 0;
    for (let key in obj) {
      num++;
      let result, str;
      //if (typeof(obj[key]) === 'object' && obj[key] !== null) {
      //  deelDeployObj(obj[key]);
      document.write('+++++++++++</br>');
      document.write(`对象第${num}次运行</br>`);
      document.write(`程序运行的参数：</br>`);
      str = JSON.stringify(obj[key]);
      document.write(str + '</br>')
      result = CalculateModule(obj[key]);
      str = JSON.stringify(result);
      document.write(`运行第${num}次结果：</br>`);
      document.write(str + '</br>');
      document.write('-----------</br>');
      //  }
    }
  }
  test(testObj);
  test(testArray);
  /**
    function deelDeployObj(obj) {
      let resArr = [],
        temArr = [];
      for (let key in obj) {
        if (typeof(obj[key]) === 'object' && obj[key] !== null) {
          deelDeployObj(obj[key]);
        }
      }
      resArr.push(obj);
      return resArr;
    }

    function isDuplicate(sampleArray, matchDate) {
      let boolenRes = false;
      for(let i = 0, len = sampleArray.length; i < len; i++) {
          if (matchDate == sampleArray[i]) { boolenRes = true;}
        }
      return boolenRes;
    }

    var istype = {
      types: ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
    }

    for (let i = 0, c; c = istype.types[i++];) {
      istype[c] = (function(type) {
        return function(obj) {
          return Object.prototype.toString.call(obj) == "[object " + type + "]";
        }
      })(c);
    }

    function obj2string(o) {
      var r = [];
      if (typeof o === "string") {
        return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
      };
      if (typeof o === "object") {
        if (!o.sort) {
          for (var i in o) {
            r.push(i + ":" + obj2string(o[i]));
          }
          if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
            r.push("toString:" + o.toString.toString());
          }
          r = "{" + r.join() + "}";
        } else {
          for (var i = 0; i < o.length; i++) {
            r.push(obj2string(o[i]))
          }
          r = "[" + r.join() + "]";
        }
        return r;
      };
      if (typeof o === 'undefined') {
        return 'undefined';
      };
      return o.toString();
    }
  */
}
