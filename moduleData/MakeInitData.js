const MakeInitData = function makeInitDataFrom(baseMap = baseMap || {}) {
    let newMap = Object.create(null);
    let _selSTTab = [],
        _selSTCode = [],
        _data = [],
        //temp = [],
        _selTab = [],
        _baseParent = [],
        _baseChild = [],
        //tempArr = [], key = [], txt, num,
        duplicateSelTab = [];
    let configMap = {
        IBCSreg: /(?:IB|CS)\b/,
        HJreg: /(?:HJ)\b/
    };
    //_selSTTab[0] = 0; _selSTCode[0] = 0; 初始化创建newMap基本结构及解构base数据
    for (let prop in baseMap) {
        let txt,
            temp;
        //
        newMap[prop] = {
            data: {},
            selTab: [],
            exData: {},
            dataPar: copy(baseMap[prop].dataPar, true),
            exDataPar: copy(baseMap[prop].exDataPar, true),
            outputPar: copy(baseMap[prop].output, true)
        };
        //分别加入基本下拉表单项selSTTab数组
        if (baseMap[prop]['chinese']) {
            _selSTTab.push(baseMap[prop]['chinese']);
            _selSTCode.push(prop);
        };
        //分别对baseMap中的各base数据进行解构为data数据
        _data
            ? _data.length = 0
            : _data = [];
        temp
            ? temp.length = 0
            : temp = [];
        _selTab
            ? _selTab.length = 0
            : _selTab = [];
        if (baseMap[prop].base) {
            _data = makeSTData(baseMap[prop].base);
            temp = makeSTTab(makeSTData(baseMap[prop].base));
            if (temp) {
                for (let i = 0, len = temp.length; i < len; i++) {
                    //if (i == 0) {  _selTab[i] = temp[i]; } else {
                    if (configMap.IBCSreg.test(prop)) {
                        txt = temp[i].split('x');
                        temp[i] = (Number(txt[0]) / 10);
                    } else if (configMap.HJreg.test(prop)) {
                        txt = temp[i].replace(/(?:xNaN)/g, '');
                        temp[i] = String(txt);
                    } else {}
                    _selTab[i] = String(baseMap[prop].symbol) + String(temp[i]);
                    //}
                }
            }
        }
        baseMap[prop].data = copy(_data, true);
        newMap[prop].selTab = copy(_selTab, true);
        //整合带_baseParent\cild属性的baseMap数据
        if (baseMap[prop].childMap) {
            _baseParent.push(String(prop));
            _baseChild.push(baseMap[prop].childMap);
        }
        //整合带IB\CS的项目
        if (configMap.IBCSreg.test(prop)) {
            duplicateSelTab.push(String(prop));
        }
    }

    //加工HB的Tab数组（将几个H型T型钢组合起来）
    for (let i = 0; i < _baseParent.length; i++) {
        let txt = _baseParent[i],
            _baseData = [],
            _selTab = [],
            _baseExData = [];
        _baseChild[i].forEach(function (item) {
            _baseData = addArr(_baseData, baseMap[item].data);
            _selTab = addArr(_selTab, newMap[item].selTab);
            _baseExData = addArr(_baseExData, baseMap[item].exData);
        })
        baseMap[txt].data = copy(_baseData, true);
        newMap[txt].selTab = copy(_selTab, true);
        baseMap[txt].exData = copy(_baseExData, true);
    }

    //加工baseMap内的data和exdata数组数据，存入newMap
    for (let prop in baseMap) {
        ['data', 'exData'].forEach(function (item) {
            let res = {},
                tempArr = [],
                key = [],
                txt = item + 'Par';
            if (baseMap[prop][item]) {
                let len = baseMap[prop][item].length;
                for (let i = 0; i < len; i++) {
                    tempArr = baseMap[prop][item][i];
                    if (tempArr) {
                        key = baseMap[prop][txt];
                        res[i] = (addKeyToArr(key, tempArr));
                    } else {
                        res[i] = tempArr;
                    }
                }
                newMap[prop][item] = copy(res, true);
            }
        });
    }

    //加工IB与CS的Tab数组,对名称使用标准号数
    if (duplicateSelTab) {
        duplicateSelTab.forEach(function (item) {
            let temp = [],
                originalArr = [], //复制原数组数据
                noDuplicateStringArr = [], //记录不重复字符串
                replaceCode = 'abcdef'; //预定重复字符串后要增加的区别英文符号
            temp.forEach(function (item) {
                if (!(item == originalArr || item == noDuplicateStringArr || item == replaceCode)) {
                    item.pop();
                }
            });

            originalArr = copyArr(newMap[item].selTab, true);

            for (let i = 0, len = originalArr.length; i < len; i++) {
                let txt = String(originalArr[i]);
                //判断txt是否有数据，第一次运行时txt的值是undefined的
                if (txt) {
                    //判断是否与
                    if (txt === String(originalArr[i])) {
                        createArr(txt);
                        temp[txt].push(i);
                    } else {
                        noDuplicateStringArr.push(txt);
                        createArr(txt);
                        temp[txt].push(i);
                    }

                } else {
                    //记录txt值
                    noDuplicateStringArr.push(txt);
                    //创建txt为键值的数组
                    createArr(txt);
                    //向数组存入txt的下标值
                    temp[txt].push(i);
                }
            };

            if (noDuplicateStringArr) {
                let num;
                for (let j = 0, len = noDuplicateStringArr.length; j < len; j++) {
                    txt = String(noDuplicateStringArr[j]);
                    //判断txt键值的数组是否有多个下标值
                    if (temp[txt].length > 1) {
                        for (let k = 0; k < temp[txt].length; k++) {
                            num = Number(temp[txt][k]);
                            originalArr[num] = String(originalArr[num]) + replaceCode[k];
                        }
                    }
                }
            };
            //创建以txt为key值的新数组
            function createArr(txt) {
                if (!temp[txt]) {
                    temp[txt] = [];
                }
            };
            newMap[item].selTab = copy(originalArr, true);

        })
    }

    //加工标签Tab数组
    function makeSTTab(arr) {
        if (arr) {
            let temparr = copy(arr, true),
                textTableArr = [];
            for (let i = 0; i < temparr.length; i++) {
                //if (i === 0) { textTableArr[i] = 0; } else if (isArray(temparr[i])) {
                if (isArray(temparr[i])) {
                    textTableArr[i] = (temparr[i].join('x'));
                } else {
                    textTableArr[i] = tempArr[i];
                }
            };
            return textTableArr;
        }
    };

    function copyArrNoTail(arr) {
        let res = [];
        for (let i = 0; i < arr.length - 1; i++) {
            res.push(arr[i]);
        }
        return res;
    };

    /** HaddTArr 函数是将第一个数组与第二个数组连接为新的数组 */
    /* headarr : 需要结合的数组头部分
      tailarr : 需要结合的数组尾部分
   */
    function HaddTArr(headarr, tailarr) {
        let res = [],
            txt = '';
        if (headarr.length > 1) {
            // 判断taillarr是数组还是单个变量,单个变量直接复制,数组则要逐项分别复制与头数组组成新数组
            for (let i = 0, len = headarr.length; i < len; i++) {
                res.push(headarr[i]);
            }
        } else {
            txt = Number(headarr);
            res.push(txt);
        }
        if (isArray(tailarr) && tailarr.length > 1) { //
            for (let j = 0, len = tailarr.length; j < len; j++) {
                if (tailarr[j] !== 0) {
                    res.push(tailarr[j]);
                }
            }
        } else {
            txt = Number(tailarr);
            res.push(txt);
        }
        return res;
    };

    //addAltArr函数是将两数组连结合并在一起
    function addArr(arr, addarr) {
        let res = [];
        [arr, addarr].forEach(function (item) {
            if (item && item.length > 1) {
                for (let i = 0, len = item.length; i < len; i++) {
                    //排除数组内容为0的项，每个子数组第一项为0
                    if (item[i]) {
                        res.push(item[i]);
                    }
                }
            }
        });
        //判断新数组第一项是否为0，不为0就增加一项为0. if (res[0]) {  res.splice(0, 0, 0); }
        return res;
    };

    //将arr值压入带key值的数组
    function addKeyToArr(key, arr) {
        let res = {},
            txt1,
            txt2;
        //if (key.length === arr.length) {
        for (let i = 0; i < arr.length; i++) {
            txt1 = String(key[i]);
            txt2 = String(arr[i]);
            res[txt1] = txt2;
        }
        //}
        return res;
    }

    //加工临时数据数组
    function makeSTData(Arr) { //,hoArr
        if (Arr) {
            // 复制原始数组到临时数组temArr
            let temArr = copy(Arr, true),
                newArr = [],
                headArr = [],
                tailArr = [],
                // n为新建数组下标计数，从1开始
                n = 0;
            //newArr[0] = 0;

            for (let i = 0, len = temArr.length; i < len; i++) {
                // 抽取末尾数组数据存入tailArr
                tailArr = temArr[i].slice(-1);
                //判断tailArr的数组内含有单个数据还是多个数据,若是单个数据直接全项复制,若是多个数据需要展开并逐个加工成新数据(如角钢的不同的厚度)
                if (tailArr[0].length > 1 && tailArr[0] !== 'NaN') {
                    // 使用函数复制原始数组（除最末数组）存入headArr
                    headArr = copyArrNoTail(temArr[i]);
                    for (let j = 0, len = tailArr[0].length; j < len; j++) {
                        let temtail = Number(tailArr[0][j]); // 将当前tailArr值存入临时交换变量temtail
                        newArr[n] = HaddTArr(headArr, temtail); // 使用函数复制合并headArr和temtail存入n下标的newArr变量
                        n++;
                    }
                } else {
                    newArr[n] = copy(temArr[i], true);
                    n++;
                }
            }
            return newArr;
        }
    }

    /**
   * [processIB_CSselTab description]加工IB与CS的Tab数组,此两种型钢Tab只取高度参数作型号，不取全体参数作型号显示。
   * @return {[type]} [description]
   */
    newMap.selSTCode = _selSTCode;
    newMap.selSTNum = 0;
    newMap.selSTTab = _selSTTab;
    return newMap;

};

export {MakeInitData};
