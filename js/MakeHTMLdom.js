/**
 * [makeEleForDiv description] 根据对象数据创见Div
 * @param  {[type]} objDivData [description] div对象数据 {box:对象容器, lable:对象标题, table:数据表格}
 * @return {[type]}            [description]
 */
function makeEleForDiv(
    objDivData,
    initMap = initMap || {},
    opMap = opMap || {}
) {
    let obj = {
        attr: {},
        meth: {},
        type: {},
        parentNode: {}
    };
    let {box: _box, lable: _lable, table: _table} = objDivData;

    for (let key in _box) {
        obj = objToDtor(_box[key], key);
        if (obj) {
            makeEleByPDiv(obj.attr, obj.parentNode, obj.type, obj.meth);
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
            len = Object
                .getOwnPropertyNames(_table[key])
                .length;
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
            _name = (name)
                ? String(name)
                : undefined;
        result.parentNode = (obj.parentNode)
            ? obj.parentNode
            : '';
        result.type = (obj.type)
            ? obj.type
            : 'div';
        result.attr = (obj.attr)
            ? obj.attr
            : {};
        result.attr.id = (obj.attr.id)
            ? obj.attr.id
            : _name;
        result.attr.name = (obj.attr.name)
            ? obj.attr.name
            : _name;
        result.attr.className = (obj.attr.className)
            ? obj.attr.className
            : _name;
        result.meth = (obj.meth)
            ? obj.meth
            : '';
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
        }

        if (parentDivId) {
            let par = getEle.Id(parentDivId);
            par.appendChild(obj);
        } else {
            document
                .body
                .appendChild(obj);
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
                    len = Object
                        .getOwnPropertyNames(attr)
                        .length;
                for (let key in attr[j]) {
                    obj[key] = attr[j][key];
                    let str = JSON.stringify(attr[j][key]);
                    console.log(
                        `'obj[key]': obj[${key}] = ${obj[key]}, 'attr[j][key]': attr[${j}][${key}] = ${str}`
                    );
                    if (n == len - 1) {
                        let _name = '',
                            _id = '';
                        _name = String(parentDivId).slice(-3) + String(obj.attr.columnLabel);
                        _id = _name + String(i) + String(j);
                        console.log(`i = ${i}, j = ${j}, _id = ${_id}, _name = ${_name}`);
                        obj.attr.id = _id;
                        let str = JSON.stringify(obj);
                        console.log(str);
                        makeEleByPDiv(obj.attr, obj.parentNode, obj.type);
                        getEle
                            .Id(obj.attr.id)
                            .classList
                            .add(_name);
                    }
                    n++;
                }
            }
        }
    };

    makeSelOptForArrTab('selSTList', initMap.selSTTab, '--请选择型钢种类--');
};

//动态创建select
function createSelect(selid) {
    let myselect = creEle.select();
    myselect.id = selid;
    document
        .body
        .appendChild(myselect);
}

//添加选项option
function addOption(id, txt, val) {
    //根据id查找对象，
    let obj = getEle.Id(id);
    //添加一个选项
    obj.add(new Option(txt, val));

}

//删除所有选项option
function removeAllOptions(id) {
    let obj = getEle.Id(id);
    obj.options.length = 0;
}

//获得选项option的值
function getOptVal(id) {
    let obj = (getEle.Id(id))
        ? getEle.Id(id)
        : '';
    let index = obj.selectedIndex; //序号，取当前选中选项的序号
    let val = obj
        .options[index]
        .value;
    return val;
}

//获得选项option的文本
function getOptTxt(id) {
    let obj = getEle.Id(id);
    let index = obj.selectedIndex; //序号，取当前选中选项的序号
    let val = obj
        .options[index]
        .text;
    return val;
}
//删除select
function removeselect(id) {
    let myselect = getEle.Id(id);
    myselect
        .parentNode
        .removeChild(myselect);
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

function setSelectNull(id) {
    let x = getEle.Id(id);
    x.selectedIndex = 'note';
}

const Meth = function () {
    //更新user对象内的数据
    function UpdateToUser() {
        let Oc = opMap.Cal,
            Or = opMap.Ref,
            Op = opMap.Par,
            Odil = opMap.DivIdLies,
            isSaveTxtToDiv = true;
        let _shortCode = user
            .STCode
            .replace(/[^un|eq|A-Z]/g, '');
        //根据value的key名查找对应prop和unit的key名的值
        for (let key in user.Calvalue) {
            if (isEmpty(user.Calvalue[key])) {
                isSaveTxtToDiv = false;
            }
            user.Calprop[key] = copy(Oc.prop[key], true);
            user.Calunit[key] = copy(Oc.unit[key], true);
        }
        //根据value的key名查找对应prop和unit的key名的值

        for (let key in user.Refvalue) {
            if (isEmpty(user.Refvalue[key])) {
                isSaveTxtToDiv = false;
            }
            user.Refprop[key] = copy(Or.prop[key], true);
            user.Refunit[key] = copy(Or.unit[key], true);
        }

        //根据value的key名查找对应prop和unit的key名的值
        for (let key in user.Parvalue) {
            if (isEmpty(user.Parvalue[key])) {
                isSaveTxtToDiv = false;
            }
            user.Parprop[key] = copy(Op[_shortCode].prop[key], true);
            user.Parunit[key] = copy(Op[_shortCode].unit[key], true);
        }

        ClearDiv();
        //对页面div显示进行负值
        for (let key in Odil) {
            let n = 0;
            for (let arg in user[key]) {
                if (user[key][arg]) {
                    Odil[key][n].innerHTML = copy(user[key][arg], true);
                    n++;
                }
            }
        }
        if (isSaveTxtToDiv) {
            saveTxtToDiv();
        }
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
            isSave: true
        };

        save.myDate = new Date();
        save.txtArr = opMap.saveTxtArr;
        save.len = save.txtArr.length;
        save.headTxt = `--------------
        [${save
            .myDate
            .toLocaleTimeString()}]

        ${getOptTxt('selSTList')}
        `;
        save.middleTxt = '型钢尺寸：\n';
        save.tailTxt = '计算结果：\n';

        for (let key in user.Parvalue) {

            save.headTxt += String(user.Parvalue[key]) + `×`;
            save.middleTxt += String(user.Parprop[key]) + ': ' + String(user.Parvalue[key]) + ' ' +
                    String(user.Parunit[key]) + '\n';
        }
        save.headTxt = save
            .headTxt
            .substring(0, save.headTxt.lastIndexOf(`×`)) + '\n';

        for (let key in user.Calvalue) {
            save.tailTxt += String(user.Calprop[key]) + ': ' + String(user.Calvalue[key]) + ' ' +
                    String(user.Calunit[key]) + '\n';
        }
        save.resultTxt = save.headTxt + '\n' + save.middleTxt + '\n' + save.tailTxt + '\n';
        //用compareTxt比较，清除重复项
        save.compareTxt1 = save.resultTxt;
        save.compareTxt1 = save
            .compareTxt1
            .substring(save.compareTxt1.indexOf(']'), save.compareTxt1.length);
        for (let i = save.len; i > -1; i--) {
            if (isEmpty(save.txtArr[i]) === false) {
                save.compareTxt2 = save
                    .txtArr[i]
                    .toString();
                save.compareTxt2 = save
                    .compareTxt2
                    .substring(save.compareTxt2.indexOf(']'), save.compareTxt2.length);
                if (save.compareTxt1 === save.compareTxt2) {
                    save
                        .txtArr
                        .splice(i, 1);
                }
            }
        };
        //整理数组，全部向后移一位,空出0键值存入新数据
        for (let k = save.len; k > -1; k--) {
            if (isEmpty(save.txtArr[k]) === false) {
                save.txtArr[k + 1] = copy(save.txtArr[k]);
            }
        }
        save.txtArr[0] = copy(save.resultTxt);
        opText('saveTxt', save.txtArr);

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
        let leg,
            selNum;
        leg = getOptVal('sunSTList');

        selNum = getOptVal('selSTList');
        if (selNum == 'note' || selNum == '') {
            errorLog();
        } else {
            if (leg == 'note' || leg == '') {
                errorLog();
            } else {
                let num,
                    selTxt,
                    data,
                    obj = {};
                num = Number(leg);

                user = new User();

                user.STCode = obj.STCode = selTxt = initMap.selSTCode[selNum];

                data = copy(initMap[selTxt].data[num], true);

                user.Parvalue = {};
                for (let key in data) {
                    user.Parvalue[key] = obj[key] = copy(data[key], true);
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
        let str = (typeof(obj) == 'string')
            ? obj
            : JSON.stringify(obj);
        console.log(str);
    }
    //对给定的obj执行计算
    function CalForObj(obj) {

        ClearObjKey(user.Calvalue);
        ClearObjKey(user.Calprop);
        ClearObjKey(user.Calunit);
        user.Calvalue = (CalculateModule(obj))
            ? CalculateModule(obj)
            : {};
    }
    //对给定的obj执行查找
    function FindForObj(obj) {

        ClearObjKey(user.Refvalue);
        ClearObjKey(user.Refprop);
        ClearObjKey(user.Refunit);
        user.Refvalue = (FindSTExData(obj))
            ? FindSTExData(obj)
            : {};
    }

    function sel01ST() {
        let selNum,
            selImg,
            selTxt,
            temTxt;
        selNum = getOptVal('selSTList');
        selTxt = initMap.selSTCode[selNum];
        selImg = getEle.Id('STJPG');
        temTxt = (selTxt)
            ? selTxt.replace(/[^eq|un|A-Z]/g, '')
            : '';
        selImg.src = (temTxt)
            ? `./images/${temTxt}.jpg`
            : `./images/default.jpg`;
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
                leg,
                selNum,
                selTxt,
                data,
                obj = {};
            for (let key in user.Parvalue) {
                obj[key] = copy(user.Parvalue[key], true);
            }

            delDivBr();

            for (let key in obj) {
                arrTxt[n].innerText = arrTxt[n]
                    .innerText
                    .replace(/[^.0-9]/g, '') || 0;

                obj[key] = arrTxt[n].innerText;
                n++
            }

            obj.STCode = copy(user.STCode, true);

            ConsoleLogObj(obj);

            ClearObjKey(user.Parvalue);

            leg = Number(getOptVal('sunSTList'));
            selNum = getOptVal('selSTList');
            selTxt = initMap.selSTCode[selNum];
            data = copy(initMap[selTxt].data[leg], true);
            for (let key in data) {
                user.Parvalue[key] = copy(obj[key], true);
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
            var range = document
                .selection
                .createRange(); //创建选择对象
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
        let sel,
            tempRange;
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
                temptxt = temptxt.replace(/(\/|\<|\>|div|br)/g, '');
                temptxt = temptxt.replace(/[^.0-9]/g, '');
                temptxt = temptxt.replace(/0*(\d*)/, "$1");
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

//opMap.DivIdLies =
function makeopMapDivIdLies() {
    let listobj = {};
    [
        '.Calprop',
        '.Calvalue',
        '.Calunit',
        '.Parprop',
        '.Parvalue',
        '.Parunit',
        '.Refprop',
        '.Refvalue',
        '.Refunit'
    ].forEach(function (item) {
        let _item = item.slice(1);
        let _meth = _item + 'Meth';
        listobj[_item] = document.querySelectorAll(item);

    })
    return listobj;
};

/**
 * [makealtDivMeth description]追加可编辑Div的回车事件
 * @return {[type]} [description]
 */
function makealtDivMeth() {
    let altDivArr = getEle.ClassName('box-altValue');
    for (let i = 0; i < altDivArr.length; i++) {
        altDivArr[i].addEventListener('keypress', Meth.altDiv, false);
    }
};

function getopMapNumParCalRef(initMap = initMap || {}, opMap = opMap || {}) {
    let par = [],
        cal = [],
        ref = [];
    initMap
        .selSTCode
        .forEach(function (item) {
            if (item) {
                [
                    [
                        par, 'dataPar'
                    ],
                    [
                        ref, 'exDataPar'
                    ],
                    [
                        cal, 'outputPar'
                    ]
                ].forEach(function (lever) {
                    let ele = lever[0],
                        txt = initMap[item][lever[1]];
                    let len = (txt) ? Object.keys(txt).length : 0;
                    ele.push(len);
                })

            }
        })
    par.sort((x, y) => y - x);
    cal.sort((x, y) => y - x);
    ref.sort((x, y) => y - x);
    opMap.tabPar = Number(par[0]);
    opMap.tabCal = Number(cal[0]);
    opMap.tabRef = Number(ref[0]);
};
