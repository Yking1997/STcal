function copyArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
};
/**
 * [objDeepCopy description]深拷贝复杂的对象和数组混合数据
 * @param  {[type]} source [description] 拷贝的对象
 * @return {[type]}        [description] 深拷贝的对象
 */
function objDeepCopy(source) {
  let sourceCopy = source instanceof Array ? [] : {};
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}

//判断对象是不是空
function isEmpty(mixed_let) {
  let key;
  if (mixed_let === '' || mixed_let === 0 || mixed_let === '0' || mixed_let === null || mixed_let === false || typeof mixed_let === 'undefined') {
    return true;
  }
  if (typeof mixed_let == 'object') {
    for (key in mixed_let) {
      return false;
    }
    return true;
  }
  return false;
}

//判断某个对象是不是数组
function isArray(obj) {
  return obj && (typeof obj === 'object') && (obj.constructor == Array);
};

//eleNum变量初始值为0，用来统计数组元素个数
let eleNum = 0;
let ptxt = '';
//递归计算某个数组元素是不是下一维数组，如果是，则继续递归下去；如果不是，统计元素个数。
function recursion(obj) {
  if (isArray(obj)) {
    for (let j = 0; j < obj.length; j++) {
      if (!isArray(obj[j])) {
        ptxt += '[' + j + ']' + obj[j] + '\n';
        eleNum++;
        continue;
      }
      recursion(obj[j]);
    }
  } else {
    eleNum++;
  }
};
//arr为要计算数组元素个数的一维或多维数组，通过调用递归函数recursion返回数组元素个数
function getArrNElementNum(arr) {
  if (arr == null) {
    return 0;
  }
  recursion(arr);
  return eleNum;
};


//whatType作为判断变量具体类型的辅助模块
const whatType = (function() {
  let class2type = {};
  ["Null", "Undefined", "Number", "Boolean", "String", "object", "function", "Array", "RegExp", "getArrNElementNum"].forEach(function(item) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  })

  function isType(obj, type) {
    return getType(obj) === type;
  }

  function getType(obj) {
    return class2type[Object.prototype.toString.call(obj)] || "object";
  }
  return {
    isType: isType,
    getType: getType
  }
})();
//复制/深度复制数组
function copy(obj, isdeep=false ) {
  //如果obj不是对象，那么直接返回值就可以了
  if (obj === null || typeof obj !== "object") {
    return obj;
  }　　　　 //定义需要的局部变脸，根据obj的类型来调整target的类型
  let i, target = whatType.isType(obj, "array") ? [] : {},
    value, valuetype;
  for (i in obj) {
    value = obj[i];
    valueType = whatType.getType(value);　　　　　　　 //只有在明确执行深复制，并且当前的value是数组或对象的情况下才执行递归复制
    if (isdeep && (valueType === "array" || valueType === "object")) {
      target[i] = copy(value);
    } else {
      target[i] = value;
    }
  }
  return target;
}


//减少document.getElement...的代码,简化为getEle.Id,Name,TagName,ClassName
const getEle = function() {
  function Id(id) {
    return document.getElementById(id);
  }

  function Name(name) {
    return document.getElementsByName(name);
  }

  function TagName(tagName) {
    return document.getElementsByTagName(tagName);
  }

  function ClassName(className) {
    return document.getElementsByClassName(className);
  }
  return {
    Id: Id,
    Name: Name,
    TagName: TagName,
    ClassName: ClassName
  }
}();
/**
 * creEle作为简化createElement...语法简写
 */
const creEle = function() {
  function Div() {
    return document.createElement('div');
  }

  function Input() {
    return document.createElement('input');
  }

  function A() {
    return document.createElement('a');
  }

  function Style() {
    return document.createElement('style');
  }

  function Select() {
    return document.createElement("select");
  }

  function Img() {
    return document.createElement("img");
  }
  return {
    Div: Div,
    Input: Input,
    A: A,
    Style: Style,
    Select: Select,
    Img: Img
  }
}();

const appChild = function appendChild(parent, child) {
  return document.parent.appendChild(child);
};

const remoChild = function removeChild(id){
  return id.parentNode.removeChild(id);
};




/*对象复制暂时无用*/
function objCopy(obj) {
  let res = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
  return res;
}


function varType(n) {
        var typeStr = Object.prototype.toString.call(n);
        //var typeOfName = (typeof n);
        var typeName = '';
        switch (typeStr){
            case '[object String]':
                typeName = 'string';
                break;
            case '[object Number]':
                typeName = 'number';
                break;
            case '[object Boolean]':
                typeName = 'boolean';
                break;
            case '[object Undefined]':
                typeName = 'undefined';
                break;

            case '[object Object]':
                if (typeof(n) == 'function' ) {
                  typeName = 'function';
                } else {
                  typeName = 'object';
                }
                break;
            case '[object Array]':
                typeName = 'array';
                break;
            case '[object Null]':
                typeName = 'null';
                break;
            case '[object RegExp]':
                typeName = 'RegExp';
                break;

            case '[object Symbol]':
                typeName = 'symbol';
                break;
            case '[object JSON]':
                typeName = 'json';
                break;
            case '[object Math]':
                typeName = 'math';
                break;

            default:
                typeName = 'object';
        }

        return typeName;
    };
