window.onload = function() {
  let testObj = {
    //let calST = new CalculateteModule();
    //let calST = CalculateModule();
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
          fn: //function onchange(event) {
            function sel01ST() {
              let selNum, selImg, selTxt, temTxt;
              selNum = getOptVal('selSTList');
              selTxt = initMap.selSTCode[selNum];
              selImg = getEle.Id('STJPG');
              temTxt = (selTxt) ? selTxt.replace(/[^eq|un|A-Z]/g, '') : '';
              selImg.src = (temTxt) ? `./images/${temTxt}.jpg` : `./images/default.jpg`;
              if (temTxt) {
                makeSelOptForArrTab('sunSTList', initMap[selTxt].selTab, '--请选择型号--');
              }
              ClearDiv();
            }
          //}
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
          fn: function sunST() {
            let leg, selNum, selTxt, data, exdata, obj = {};
            leg = Number(getOptVal('sunSTList'));
            selNum = getOptVal('selSTList');
            user = new User();
            user.STCode = obj.STCode = selTxt = initMap.selSTCode[selNum];

            data = copy(initMap[selTxt].data[leg], true);
            if (initMap[selTxt].exData) {
              if (leg <= initMap[selTxt].exData.length) {
                exdata = copy(initMap[selTxt].exData[leg], true);
              }
            } else {
              exdata = '';
            }

            user.Parvalue = {};
            for (let key in data) {
              user.Parvalue[key] = obj[key] = data[key];
            }

            let str = JSON.stringify(obj);
            console.log(str);
            user.Calvalue = {};
            user.Calvalue = CalculateModule(obj);
            user.Refvalue = {};
            user.Refvalue = FindSTExData(obj);
            UpdateToUser();
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
          innerHTML: '- 版本1.60.00 -      - @HiDHong -      - 2018-08 -'
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
            columnLabel: 'value'
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




  makeEleForDiv(testObj);

  function defineProperty(obj, attr, meth) {
    var val;
    if (meth) {
      Object.defineProperty(obj, attr, {
        get: function() {
          return val;
        },
        set: function(newValue) {
          if (newValue === val) {
            return;
          }
          val = newValue;
          if (typeof eval(meth) === "function") {
            eval(meth)();
          }
        }
      })
    } else {
      Object.defineProperty(obj, attr, {
        get: function() {
          return val;
        },
        set: function(newValue) {
          if (newValue === val) {
            return;
          }
          val = newValue;

          //document.getElementById("input").value = newValue;
          //document.getElementById("show").innerHTML = newValue;

        }
      })
    }

  };



  //defineProperty(user, 'STCode');

  function ParvalueMeth() {
    let obj = {};
    obj.STCode = (user.STCode) ? user.STCode : '';
    for (let key in user.Parvalue) {
      obj[key] = user.Parvalue[key];
    }
    user.Calvalue = {};
    user.Calvalue = CalculateModule(obj);
    user.Refvalue = {};
    user.Refvalue = FindSTExData(obj);
  }


  //document.getElementById("input").addEventListener("keyup", function(e) {
  //  obj.txt = e.target.value;
  //})
  function CalvalueMeth() {};

  function RefvalueMeth() {};

  function ParpropMeth() {};

  function CalpropMeth() {};

  function RefpropMeth() {};

  function ParunitMeth() {};

  function CalunitMeth() {};

  function RefunitMeth() {};

  function UpdateToUser() {
    let _shortCode = user.STCode.replace(/[^un|eq|A-Z]/g, '');
    let Ucv = user.Calvalue,
      Ucp = user.Calprop,
      Ucu = user.Calunit,
      Urv = user.Refvalue,
      Urp = user.Refprop,
      Uru = user.Refunit,
      Upv = user.Parvalue,
      Upp = user.Parprop,
      Upu = user.Parunit,
      Oc = opMap.opCal,
      Or = opMap.opRef,
      Op = opMap.opPar,
      Odil = opMap.DivIdLies;

    for (let key in Ucv) {
      Ucp[key] = Oc.prop[key];
      Ucu[key] = Oc.unit[key];
    }

    for (let key in Urv) {
      Urp[key] = Or.prop[key];
      Uru[key] = Or.unit[key];
    }

    for (let key in Upv) {
      Upp[key] = Op[_shortCode].prop[key];
      Upu[key] = Op[_shortCode].unit[key];
    }

    ClearDiv();

    for (let key in Odil) {
      let n = 0;
      for (let arg in user[key]) {
        if (user[key][arg]) {
          Odil[key][n].innerHTML = user[key][arg];
          n++;
        }
      }
    }

  }

  function ClearDiv() {
    let Odil = opMap.DivIdLies;
    for (let key in Odil) {
      for (let nodeLink in Odil[key]) {
        Odil[key][nodeLink].innerHTML = '';
      }
    }
  }

}
