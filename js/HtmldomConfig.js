const makeEleMap = {
  box: {
    main: {
      type: 'div',
      parentNode: '',
      childNodes: '',
      attr: {}
    },
    showImg: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    saveTxt: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    tabSel: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    tabPar: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    tabCal: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    tabRef: {
      type: 'div',
      parentNode: 'main',
      attr: {}
    },
    img01: {
      type: 'img',
      parentNode: 'showImg',
      attr: {
        id: 'STJPG',
        src: './images/default.jpg'
      }
    },
    sel01: {
      type: 'select',
      parentNode: 'tabSel',
      attr: {
        id: 'selSTList',
        className: 'selST'
      },
      meth: {
        type: 'change',
        fn: function() {
          Meth.sel01ST();
        }
      }
    },
    sel02: {
      type: 'select',
      parentNode: 'tabSel',
      attr: {
        id: 'sunSTList',
        className: 'selST'
      },
      meth: {
        type: 'change',
        fn: function() {
          Meth.sel02ST();
        }
      }
    }
  },

  lable: {
    lab01: {
      type: 'div',
      parentNode: 'main',
      attr: {
        id: 'labTor',
        innerHTML: '<h2>型钢材质重量查询表</h2>'
      }
    },
    lab02: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '型钢查询种类选项'
      }
    },
    lab03: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '型钢可调整参数列表'
      }
    },
    lab04: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '型钢计算结果'
      }
    },
    lab05: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '型钢截面特性查询结果'
      }
    },
    lab06: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '型钢图型标示'
      }
    },
    lab07: {
      type: 'div',
      parentNode: 'main',
      attr: {
        innerHTML: '历史查询'
      }
    },
    lab08: {
      type: 'div',
      parentNode: 'main',
      attr: {
        id: 'labFoot',
        innerHTML: '- 版本1.60.00 -      - @HiDHong -      - 2018-12 -'
      }
    }
  },

  table: {
    tabPar: {
      prop: {
        type: 'div',
        parentNode: 'tabPar',
        attr: {
          className: 'box-prop',
          columnLabel: 'prop'
        }
      },
      value: {
        type: 'div',
        parentNode: 'tabPar',
        attr: {
          className: 'box-altValue',
          contentEditable: true,
          columnLabel: 'value',
          title: '参数修改后请按回车键执行计算'
        }
       
      },
      unit: {
        type: 'div',
        parentNode: 'tabPar',
        attr: {
          className: 'box-unit',
          columnLabel: 'unit'
        }
      },
    },

    tabCal: {
      prop: {
        type: 'div',
        parentNode: 'tabCal',
        attr: {
          className: 'box-prop',
          columnLabel: 'prop'
        }
      },
      value: {
        type: 'div',
        parentNode: 'tabCal',
        attr: {
          className: 'box-value',
          columnLabel: 'value'
        }
      },
      unit: {
        type: 'div',
        parentNode: 'tabCal',
        attr: {
          className: 'box-unit',
          columnLabel: 'unit'
        }
      }
    },

    tabRef: {
      prop: {
        type: 'div',
        parentNode: 'tabRef',
        attr: {
          className: 'box-prop',
          columnLabel: 'prop'
        }
      },
      value: {
        type: 'div',
        parentNode: 'tabRef',
        attr: {
          className: 'box-value',
          columnLabel: 'value'
        }
      },
      unit: {
        type: 'div',
        parentNode: 'tabRef',
        attr: {
          className: 'box-unit',
          columnLabel: 'unit'
        }
      }
    }

  }
};

makeEleForDiv(makeEleMap);
setSelectNull('selSTList');

function setSelectNull(id) {
  let x = getEle.Id(id);
  x.selectedIndex = 'note';
}


opMap.DivIdLies = function() {
  let listobj = {};
  ['.Calprop', '.Calvalue', '.Calunit', '.Parprop', '.Parvalue', '.Parunit', '.Refprop', '.Refvalue', '.Refunit'].forEach(function(item) {
    let _item = item.slice(1);
    let _meth = _item + 'Meth';
    listobj[_item] = document.querySelectorAll(item);

    

  })
  return listobj;
}();

const Meth = function() {
  //更新user对象内的数据
  function UpdateToUser() {
    let Oc = opMap.opCal,
      Or = opMap.opRef,
      Op = opMap.opPar,
      Odil = opMap.DivIdLies;
    let _shortCode = user.STCode.replace(/[^un|eq|A-Z]/g, '');
    //根据value的key名查找对应prop和unit的key名的值
    for (let key in user.Calvalue) {
      user.Calprop[key] = copy(Oc.prop[key],true);
      user.Calunit[key] = copy(Oc.unit[key],true);
    }
    //根据value的key名查找对应prop和unit的key名的值
    
      for (let key in user.Refvalue) {
        user.Refprop[key] = copy(Or.prop[key],true);
        user.Refunit[key] = copy(Or.unit[key],true);
      }
    

    //根据value的key名查找对应prop和unit的key名的值
    for (let key in user.Parvalue) {
      user.Parprop[key] = copy(Op[_shortCode].prop[key],true);
      user.Parunit[key] = copy(Op[_shortCode].unit[key],true);
    }

    ClearDiv();
    //对页面div显示进行负值
    for (let key in Odil) {
      let n = 0;
      for (let arg in user[key]) {
        if (user[key][arg]) {
          Odil[key][n].innerHTML = copy(user[key][arg],true);
          n++;
        }
      }
    }
    saveTxtToDiv();
  }

  /**
   * [opText description] opText函数根据提供text,div控件id进行赋值
   * @param  {[type]} id   [description] 具体#div text控件id值
   * @param  {[type]} text [description] 要显示的值，可以是数组
   * @return {[type]}      [description]
   */
  function opText(id, text) {
    let temTxt = '';
    let target = getEle.Id(id);
    if (!isArray(text)) {
      if (text) {
        temTxt = text;
      } else {
        temTxt = '';
      }
    } else {
      for (let i = 0; i < text.length; i++) {
        if (isEmpty(text[i]) === false) {
          temTxt += text[i].toString();
        } else {
          temTxt += '';
        }
      }
    }
    if (target.tagName.toLowerCase() === 'div') {
      target.innerText = temTxt;
    }
  };

  function saveTxtToDiv() {
    let save = {
      myDate: '',
      headTxt: '',
      tailTxt: '',
      txtArr: '',
      len: '',
      compareTxt1: '',
      compareTxt2: '',
      resultTxt: '',
      middleTxt: '',
      n: 0,
      isSave: true
    };

    save.myDate = new Date();
    save.txtArr = opMap.saveTxtArr;
    save.len = save.txtArr.length;
    save.headTxt = `--------------
        [${save.myDate.toLocaleTimeString()}]

        ${getOptTxt('selSTList')}
        `;
    save.middleTxt = '型钢尺寸：' + '\n';
    save.tailTxt = '计算结果：' + '\n';

    for (let key in user.Parvalue) {
      if (!user.Parvalue[key]) { save.isSave = false; }
      save.headTxt += String(user.Parvalue[key]) + 'x';
      save.middleTxt += String(user.Parprop[key]) + ': ' + String(user.Parvalue[key]) + ' ' + String(user.Parunit[key]) + '\n';
    }
    save.headTxt = save.headTxt.substring(0, save.headTxt.lastIndexOf('x')) + '\n';

    for (let key in user.Calvalue) {
      save.tailTxt += String(user.Calprop[key]) + ': ' + String(user.Calvalue[key]) + ' ' + String(user.Calunit[key]) + '\n';
    }
    save.resultTxt = save.headTxt + '\n' + save.middleTxt + '\n' + save.tailTxt + '\n';

    save.compareTxt1 = save.resultTxt;
    save.compareTxt2 = save.compareTxt1.substring(save.compareTxt1.indexOf(']'), save.compareTxt1.length);
    for (let i = 0; i < save.len; i++) {
      if (isEmpty(save.txtArr[i]) === false) {
        save.compareTxt2 = save.txtArr[i].toString();
        save.compareTxt2 = save.compareTxt2.substring(save.compareTxt2.indexOf(']'), save.compareTxt2.length);
        if (save.compareTxt1 === save.compareTxt2) {
          save.isSave = false;
        }
      }
    };
    if (save.isSave) {
      for (let k = save.len; k > -1; k--) {
        if (isEmpty(save.txtArr[k]) === false) {
          save.txtArr[k + 1] = copy(save.txtArr[k]);
        }
      }
      save.txtArr[0] = copy(save.resultTxt);
      opText('saveTxt', save.txtArr);
    }
  }
  //清空Div在页面显示内容
  function ClearDiv() {
    let Odil = opMap.DivIdLies;
    for (let key in Odil) {
      for (let nodeLink in Odil[key]) {
        Odil[key][nodeLink].innerHTML = '';
      }
    }
  }


  function sel02ST() {
    let leg, selNum;
    leg = getOptVal('sunSTList');
    
    selNum = getOptVal('selSTList');
    if (selNum == 'note'|| selNum == '') {
      errorLog();
    } else { 
      if (leg == 'note'|| leg == '') {
        errorLog();
      } else {
        let num, selTxt, data, obj = {};
        num = Number(leg);
   
        user = new User();

        user.STCode = obj.STCode = selTxt = initMap.selSTCode[selNum];

        data = copy(initMap[selTxt].data[num], true);


        user.Parvalue = {};
          for (let key in data) {
            user.Parvalue[key] = obj[key] = copy(data[key],true);
          }
    
        ConsoleLogObj(obj);
        CalForObj(obj);
        FindForObj(obj);
        UpdateToUser();
      }
    }
  }

  function errorLog() {
    ClearObjKey(user);
    user = new User();
    ClearDiv();
    console.log('未选择正确型钢型号');
  }  

  ////对给定的obj执行控制台显示内容
  function ConsoleLogObj(obj) {
    let str = (typeof(obj) == 'string') ? obj : JSON.stringify(obj);
    console.log(str);
  }
  //对给定的obj执行计算
  function CalForObj(obj) {

    ClearObjKey(user.Calvalue);
    ClearObjKey(user.Calprop);
    ClearObjKey(user.Calunit);
    user.Calvalue = (CalculateModule(obj)) ? CalculateModule(obj) : {};
  }
  //对给定的obj执行查找
  function FindForObj(obj) {

    ClearObjKey(user.Refvalue);
    ClearObjKey(user.Refprop);
    ClearObjKey(user.Refunit);
    user.Refvalue = (FindSTExData(obj)) ? FindSTExData(obj) : {};
  }

  function sel01ST() {
    let selNum, selImg, selTxt, temTxt;
    selNum = getOptVal('selSTList');
    selTxt = initMap.selSTCode[selNum];
    selImg = getEle.Id('STJPG');
    temTxt = (selTxt) ? selTxt.replace(/[^eq|un|A-Z]/g, '') : '';
    selImg.src = (temTxt) ? `./images/${temTxt}.jpg` : `./images/default.jpg`;
    if (temTxt) {
      makeSelOptForArrTab('sunSTList', initMap[selTxt].selTab, '--请选择具体型号--');
      setSelectNull('sunSTList');      
    } else {
      removeAllOptions('sunSTList');
    }
    
    ClearDiv();
  }

  function altDiv() {

    if (event.keyCode == 13) {
      let arrTxt = getEle.ClassName('box-altValue'),
        temptxt = '',
        n = 0,
        leg, selNum, selTxt, data,
        obj = {};
      for (let key in user.Parvalue) {
        obj[key] = copy(user.Parvalue[key],true);
      }

      delDivBr();

      for (let key in obj) {
        arrTxt[n].innerText = arrTxt[n].innerText.replace(/[^.0-9]/g, '');

        obj[key] = arrTxt[n].innerText;
        n++
      }

      
      obj.STCode = copy(user.STCode,true);

      ConsoleLogObj(obj);

      ClearObjKey(user.Parvalue);

      leg = Number(getOptVal('sunSTList'));
      selNum = getOptVal('selSTList');
      selTxt = initMap.selSTCode[selNum];
      data = copy(initMap[selTxt].data[leg], true);
      for (let key in data) {
        user.Parvalue[key] = copy(obj[key],true);
      }
      CalForObj(obj);
      FindForObj(obj);
      UpdateToUser();
      removeCursorToTextTail(this);
    }
  }


  function keepLastIndex(obj) {
    if (window.getSelection) { //ie11 10 9 ff safari
      obj.focus(); //解决ff不获取焦点无法定位问题
      var range = window.getSelection(); //创建range
      range.selectAllChildren(obj); //range 选择obj下所有子内容
      range.collapseToEnd(); //光标移至最后
    } else if (document.selection) { //ie10 9 8 7 6 5
      var range = document.selection.createRange(); //创建选择对象
      //var range = document.body.createTextRange();
      range.moveToElementText(obj); //range定位到obj
      range.collapse(false); //光标移至最后
      range.select();
    }
  }

  /**
   * [removeCursorToTextTail description] 移动光标至id对象内的文字末尾
   * @param  {[type]} obj [description] id对象或id名称（div,input,textarea）
   * @return {[type]}     [description]
   */
  function removeCursorToTextTail(obj) {
    let sel, tempRange;
    if (typeof obj == 'string') {
      obj = getEle.Id(obj);
    }
    obj.focus();
    if (obj.createTextRange) { //ie
      var rtextRange = obj.createTextRange();
      rtextRange.moveStart('character', obj.value.length);
      rtextRange.collapse(true);
      rtextRange.select();
    } else if (obj.selectionStart) { //chrome "<input>"、"<textarea>"
      obj.selectionStart = obj.value.length;
    } else if (window.getSelection) {

      sel = window.getSelection();
      tempRange = document.createRange();

      tempRange.setStart(obj.firstChild, obj.firstChild.length);

      sel.removeAllRanges();
      sel.addRange(tempRange);
      //obj.focus();
    }
  }

  // 清空对象内一级key内容，保留一级key值
  function ClearObjKey(obj) {
    for (let key in obj) {
      delete obj[key];
    }
  }

  //清除可编辑div中因回车出现的br和div标签
  function delDivBr() {
    let arrTxt = getEle.ClassName('box-altValue'),
      temptxt = '',
      obj;
    for (let i = 0; i < arrTxt.length; i++) {
      obj = arrTxt[i];
      if (!isEmpty(obj.innerHTML)) {
        temptxt = obj.innerHTML;
        temptxt = temptxt.replace(/(\/|\<|\>|div|br)/g, "");
        temptxt = temptxt.replace(/[^.0-9]/g, '');
        obj.innerText = temptxt;
        obj.innerHTML = temptxt;
      }
    }
  }

  return {
    UpdateToUser: UpdateToUser,
    ClearDiv: ClearDiv,
    sel01ST: sel01ST,
    sel02ST: sel02ST,
    altDiv: altDiv,
    CalForObj: CalForObj,
    FindForObj: FindForObj,
    ConsoleLogObj: ConsoleLogObj,
    ClearObjKey: ClearObjKey,
    keepLastIndex: keepLastIndex,
    removeCursorToTextTail: removeCursorToTextTail,
    delDivBr: delDivBr,
    opText: opText,
    saveTxtToDiv: saveTxtToDiv
  }
}();

/**
 * [makealtDivMeth description]追加可编辑Div的回车事件
 * @return {[type]} [description]
 */
(function makealtDivMeth() {
  let altDivArr = getEle.ClassName('box-altValue');
  for (let i = 0; i < altDivArr.length; i++) {
    altDivArr[i].addEventListener('keypress', Meth.altDiv, false);
  }
})();
