/**
let data = {};
let target = null;

class Dep {
  constructor (){
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
      console.log(`depend was pushed: ${subscribers}`);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub());
    let str = JSON.stringify(subscribers);
    console.log(`notify is run: ${str}`);
  }
};

Object.keys(data).forEach(key => {
  let internalValue = data[key];

  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },
    set(newValue) {
      internalValue = newVal;
      dep.notify();
    }
  })
});

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
};

// 以下为示例
data = { price: 5, quantity:2};
watcher(() => {
  data.total = data.price *data.quantity;
});
// 以上为示例
*/

var EventTarget = function() {
  this._listener = {};
};

EventTarget.prototype = {
  constructor: this,
  addEvent: function(type, fn) {
    if (typeof type === "string" && typeof fn === "function") {
      if (typeof this._listener[type] === "undefined") {
        this._listener[type] = [fn];
      } else {
        this._listener[type].push(fn);
      }
    }
    return this;
  },
  addEvents: function(obj) {
    obj = typeof obj === "object" ? obj : {};
    var type;
    for (type in obj) {
      if (type && typeof obj[type] === "function") {
        this.addEvent(type, obj[type]);
      }
    }
    return this;
  },
  fireEvent: function(type) {
    if (type && this._listener[type]) {
      var events = {
        type: type,
        target: this
      };

      for (var length = this._listener[type].length, start = 0; start < length; start += 1) {
        this._listener[type][start].call(this, events);
      }
    }
    return this;
  },
  fireEvents: function(array) {
    if (array instanceof Array) {
      for (var i = 0, length = array.length; i < length; i += 1) {
        this.fireEvent(array[i]);
      }
    }
    return this;
  },
  removeEvent: function(type, key) {
    var listeners = this._listener[type];
    if (listeners instanceof Array) {
      if (typeof key === "function") {
        for (var i = 0, length = listeners.length; i < length; i += 1) {
          if (listeners[i] === key) {
            listeners.splice(i, 1);
            break;
          }
        }
      } else if (key instanceof Array) {
        for (var lis = 0, lenkey = key.length; lis < lenkey; lis += 1) {
          this.removeEvent(type, key[lenkey]);
        }
      } else {
        delete this._listener[type];
      }
    }
    return this;
  },
  removeEvents: function(params) {
    if (params instanceof Array) {
      for (var i = 0, length = params.length; i < length; i += 1) {
        this.removeEvent(params[i]);
      }
    } else if (typeof params === "object") {
      for (var type in params) {
        this.removeEvent(type, params[type]);
      }
    }
    return this;
  }
};


function observe (obj, vm) {
  Object.keys(obj).forEach(function (key) {
    defineReactive(vm, key, obj[key]);
  })
}

function defineReactive (obj, key, val) {
  var dep = new Dep();

  Object.defineProperty(obj, key, {
    get: function () {
      // 添加订阅者 watcher 到主题对象 Dep
      if (Dep.target) dep.addSub(Dep.target);
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal;
      // 作为发布者发出通知
      dep.notify();
    }
  });
}

function nodeToFragment (node, vm) {
  var flag = document.createDocumentFragment();
  var child;
  // 许多同学反应看不懂这一段，这里有必要解释一下
  // 首先，所有表达式必然会返回一个值，赋值表达式亦不例外
  // 理解了上面这一点，就能理解 while (child = node.firstChild) 这种用法
  // 其次，appendChild 方法有个隐蔽的地方，就是调用以后 child 会从原来 DOM 中移除
  // 所以，第二次循环时，node.firstChild 已经不再是之前的第一个子元素了
  while (child = node.firstChild) {
    compile(child, vm);
    flag.appendChild(child); // 将子节点劫持到文档片段中
  }

  return flag
}

function compile (node, vm) {
  var reg = /\{\{(.*)\}\}/;
  // 节点类型为元素
  if (node.nodeType === 1) {
    var attr = node.attributes;
    // 解析属性
    for (var i = 0; i < attr.length; i++) {
      if (attr[i].nodeName == 'v-model') {
        var name = attr[i].nodeValue; // 获取 v-model 绑定的属性名
        node.addEventListener('input', function (e) {
          // 给相应的 data 属性赋值，进而触发该属性的 set 方法
          vm[name] = e.target.value;
        });
        node.value = vm[name]; // 将 data 的值赋给该 node
        node.removeAttribute('v-model');
      }
    };

    new Watcher(vm, node, name, 'input');
  }
  // 节点类型为 text
  if (node.nodeType === 3) {
    if (reg.test(node.nodeValue)) {
      var name = RegExp.$1; // 获取匹配到的字符串
      name = name.trim();

      new Watcher(vm, node, name, 'text');
    }
  }
}

function Watcher (vm, node, name, nodeType) {
  Dep.target = this;
  this.name = name;
  this.node = node;
  this.vm = vm;
  this.nodeType = nodeType;
  this.update();
  Dep.target = null;
}

Watcher.prototype = {
  update: function () {
    this.get();
    if (this.nodeType == 'text') {
      this.node.nodeValue = this.value;
    }
    if (this.nodeType == 'input') {
      this.node.value = this.value;
    }
  },
  // 获取 data 中的属性值
  get: function () {
    this.value = this.vm[this.name]; // 触发相应属性的 get
  }
}

function Dep () {
  this.subs = []
}

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },

  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  }
}

function Vue (options) {
  this.data = options.data;
  var data = this.data;

  observe(data, this);

  var id = options.el;
  var dom = nodeToFragment(document.getElementById(id), this);

  // 编译完成后，将 dom 返回到 app 中
  document.getElementById(id).appendChild(dom);
}
