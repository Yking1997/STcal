/**
 * FindSTExData 查找型钢截面力学数据
 * @param {*} obj 
 */
const FindSTExData = (obj) => {
    let result = {};
    let {STCode, Index, ...findParametric} = obj;
    
    console.log('查找参数obj:');
    console.log(obj);
    console.log();
    
    
    if (!STCode) {
        alert(`[STCode]: ${STCode} 是否输错?`);
        return result;
    } else {
        if (Index) {
            byIndex(Index);
        } else {
            byCalParametric(findParametric)
        }
    }

    function byIndex(indexNum) {
        result = copy(initMap[STCode].exData[indexNum], true) || undefined;
        
        return result;
    }

    function byCalParametric(findParametric) {
        let isFind = false;
        for (let key in initMap[STCode].data) {
            let arg1 = findParametric;
            let arg2 = copy(initMap[STCode].data[key], true);
            if (CompareObj(arg1, arg2)) {

                byIndex(key);

                isFind = true;
            }
        }
        if (!isFind) {
            console.log(`在initMap.${STCode}.Data中没有查询到完全符合参数的数据`);
        }
    }

    /**实际的比较函数：
输入参数就是两个对象， 返回true表示两个对象完全相等，反之不等.
主要想法就是，用getObjKeyPath函数获取到两个对象的属性树，
然后以“叶子节点多的对象作为大树”，
依次取大树的叶子节点路径在小数上的对应值，
一旦取不到或者取到不相等则两个对象肯定不相等。
   * [CompareObj description]
   * @param       {[type]} obj1 [description]
   * @param       {[type]} obj2 [description]
   * @constructor
   */

    function CompareObj(obj1, obj2) {
      let keys1 = getObjKeyPath([], null, obj1),
          keys2 = getObjKeyPath([], null, obj2),
          bigObj = null,
          smallObj = null,
          keys = null;
      if (keys1.length >= keys2.length) {
          bigObj = obj1;
          smallObj = obj2;
          keys = keys1;
      } else {
          bigObj = obj2;
          smallObj = obj1;
          keys = keys2;
      }
      for (let i in keys) {
          let val1 = bigObj;
          let val2 = smallObj;
          
          for (let j in keys[i]) {
              let key = keys[i][j];
              val1 = val1[key];
              val2 = val2[key];
              if (val2 == undefined) {
                  return false;
              }                  
          if (val1 != val2) {
            return false;
          }    
        }        
      }
      return true;
      /** 递归方式将obj的所有树路径规整到二维数组中，
        * 第一维度表示路径个数，第二个维度表示每条路径上的节点
        * 返回的是这个二维数组
      */

      function getObjKeyPath(pathArry, paths, obj) {
          for (let key in obj) {
              let type = obj[key].constructor.name; //获取属性值对应的类型
              if (type == "Object") {
                  if (!paths) {
                      paths = [];
                  }
                  paths.push(key);
                  getObjKeyPath(pathArry, paths, obj[key]);
              } else {
                  if (!paths) {
                      pathArry.push([key]);
                  } else {
                      let arry = paths.concat(); //目的是复制数组
                      arry.push(key);
                      pathArry.push(arry);
                  }
              }
          }
          return pathArry;
      }

    }

    console.log('查找结果result:');
    console.log(result);
    console.log();

    return result;

};

//export default {FindSTExData};

/** FindSTExData 查找型钢截面力学数据
 *
 * 参数.byNameAndIndex(STCode, index)
 *     STCode: 型钢种类
 *     index: 索引项
 *
 * 参数.byCalParametric(obj)
 *     obj: 型钢规格参数{带STCode}
 *
 * 返回result:{}包含查找符合initMap条件的数据
 */
