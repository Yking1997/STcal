/**
 * [makeEleForDiv description] 根据对象数据创见Div
 * @param  {[type]} objDivData [description] div对象数据 {box:对象容器, lable:对象标题, table:数据表格}
 * @return {[type]}            [description]
 */
function makeEleForDiv(objDivData) {
  let obj = {
    attr: {},
    meth: {},
    type: {},
    parentNode: {}
  };
  let {
    box: _box,
    lable: _lable,
    table: _table
  } = objDivData;

  for (let key in _box) {
    obj = objToDtor(_box[key], key);
    if (obj) {
      makeEleByPDiv(obj.attr, obj.parentNode, obj.type ,obj.meth);
    }
  }

  for (let key in _lable) {
    obj = objToDtor(_lable[key], key);
    if (obj) {
      makeEleByPDiv(obj.attr, obj.parentNode, obj.type, obj.meth);
    }
  }

  for (let key in _table) {
    let n = 0,
      _temp = {},
      len = Object.getOwnPropertyNames(_table[key]).length;
    for (let lever in _table[key]) {
      _temp[n] = objToDtor(_table[key][lever], lever);
      if (n == len - 1) {
        makeTableByPDiv(opMap[key], len, _temp, key);
      }
      n++;
    }

  }

  /**
   * [objDivDtor description] div对象的属性解构
   * @param  {[type]} obj [description] 待解构对象 {type,parentNode,attr{id,name,className,...}}
   * @param  {[type]} name [description] 默认没有id值和className值，使用对象key值
   * @return {[type]}      [description] 返回解构好的对象 {type,parentNode,attr{id,name,className,...}}
   */
  function objToDtor(obj, name) {
    let result = {},
      //  { id: id, name: name, type: type, attr: attr} = prop,
      _name = (name) ? String(name) : undefined;
    result.parentNode = (obj.parentNode) ? obj.parentNode : '';
    result.type = (obj.type) ? obj.type : 'div';
    result.attr = (obj.attr) ? obj.attr : {};
    result.attr.id = (obj.attr.id) ? obj.attr.id : _name;
    result.attr.name = (obj.attr.name) ? obj.attr.name : _name;
    result.attr.className = (obj.attr.className) ? obj.attr.className : _name;
    result.meth = (obj.meth) ? obj.meth : '';
    if (result.meth) {
      result.meth.id = obj.attr.id;
    }
    let str = JSON.stringify(result);
    console.log(str);
    return result;
  };

  /**
   * [makeEleByPDiv description] 创建子DIV
   * @param  {[type]} attr         [description] 创建子DIV的属性及对应值
   * @param  {[type]} parentDivId [description] 父DIV的id值,若无此值则在body下创建新的DIV子值
   * @param  {[type]} eleTagName  [description] 创建类型 div, select, img,
   * @return {[type]}             [description]
   */

  function makeEleByPDiv(attr, parentDivId, eleTagName, meth) {
    let obj;
    if (eleTagName) {
      let tagN = String(eleTagName);
      if (tagN == 'div') {
        obj = creEle.Div();
      } else if (tagN == 'select') {
        obj = creEle.Select();
      } else if (tagN == 'img') {
        obj = creEle.Img();
      }
    }

    if (attr) {
      for (let key in attr) {
        obj[key] = attr[key];
      }
    }

    if (meth) {
     obj.addEventListener(meth.type, meth.fn, false);
     //obj.onchange = meth.fn;
    }

    if (parentDivId) {
      let par = getEle.Id(parentDivId);
      par.appendChild(obj);
    } else {
      document.body.appendChild(obj);
    }


  };

  /**
   * [makeTableByPDiv description] 创建表格形式的Div群
   * @param  {[type]} rows        [description] 表格行数
   * @param  {[type]} columns     [description] 表格列数
   * @param  {[type]} attr        [description] 创建表格Div的属性{其中id,name属性会根据表格的二维位置再行付值}
   * @param  {[type]} parentDivId [description] 表格的父Div的Id
   * @return {[type]}             [description]
   */
  function makeTableByPDiv(rows, columns, attr, parentDivId) {
    let obj = {},
      n = 0;
    let par = getEle.Id(parentDivId);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {

        let n = 0,
          len = Object.getOwnPropertyNames(attr).length;
        for (let key in attr[j]) {
          obj[key] = attr[j][key];
          let str = JSON.stringify(attr[j][key]);
          console.log(`'obj[key]': obj[${key}] = ${obj[key]}, 'attr[j][key]': attr[${j}][${key}] = ${str}`);
          if (n == len - 1) {
            let _name ='', _id='';
            _name = String(parentDivId).slice(-3) + String(obj.attr.columnLabel) ;
            _id = _name + String(i) + String(j);
            console.log(`i = ${i}, j = ${j}, _id = ${_id}, _name = ${_name}`);
            obj.attr.id = _id;
            let str = JSON.stringify(obj);
            console.log(str);
            makeEleByPDiv(obj.attr, obj.parentNode, obj.type);
            getEle.Id(obj.attr.id).classList.add(_name);
          }
          n++;
        }
      }
    }
  };

  makeSelOptForArrTab('selSTList', initMap.selSTTab, '--请选择型钢种类--');
  //makeSelOptForArrTab('selSTList', initMap.selSTTab);
  
};


//动态创建select
function createSelect(selid) {
  let myselect = creEle.select();
  myselect.id = selid;
  document.body.appendChild(myselect);
}

//添加选项option
function addOption(id, txt, val) {
  //根据id查找对象，
  let obj = getEle.Id(id);
  //添加一个选项
  obj.add(new Option(txt, val));
  //obj.fireEvenh("onchange");
}


//删除所有选项option
function removeAllOptions(id) {
  let obj = getEle.Id(id);
  obj.options.length = 0;
}

//获得选项option的值
function getOptVal(id) {
  let obj = (getEle.Id(id)) ? getEle.Id(id) : '';
  let index = (obj.selectedIndex) ? obj.selectedIndex : ''; //序号，取当前选中选项的序号
  let val = (index) ? obj.options[index].value : '';
  return val;
}


//获得选项option的文本
function getOptTxt(id) {
  let obj = getEle.Id(id);
  let index = obj.selectedIndex; //序号，取当前选中选项的序号
  let val = obj.options[index].text;
  return val;
}
//删除select
function removeselect(id) {
  let myselect = getEle.Id(id);
  myselect.parentNode.removeChild(myselect);
}

//display 能显示或隐藏指定id的html元素
function display(id) {
  let traget = getEle.Id(id);
  if (traget.style.display == "none") {
    traget.style.display = "";
  } else {
    traget.style.display = "none";
  }
}
//清空div显示text数组的值
function removetext(arr) {
  let id = copy(arr, true),
    target;
  for (let i = 0; i < id.length; i++) {
    target = getEle.Id(id[i]);
    target.innerText = '';
  }
}

/* makeSelOptForArrTab 函数根据给定selectName,数组,select的标题创建对应select组的option下拉选单内容
   selName : select项名字
   arrTab  : 下拉选单内容的文本数组
   text0   : 下拉选单第一项文本（标题）
 */
function makeSelOptForArrTab(selName, arrTab, text0) {
  let creName = selName.toString(),
    temArr = copy(arrTab, true),
    txt = '';
  //清空所有option，如不清空，第二次运行就有可能会出现残余显示
  removeAllOptions(creName);
  //createselect( creName );
  //addSelOnChange( creName, opAndCalPrm() );
  for (let i = -1; i < temArr.length; i++) {
    if (i === -1) {
      //0值创建成显提示标题，对应数据数组不参与取值
      addOption(creName, text0, 'note');
    } else {
      txt = temArr[i].toString();
      addOption(creName, txt, i);
    }
  }
}
