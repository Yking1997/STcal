const CalculateModule = function calculateModule(calObj) {
  console.log('调用函数引用的参数calObj:')
  console.log(calObj);
  console.log();
  let par = new CalParametric();
  for (let key in calObj) {
    par[key] = calObj[key] || 0;
  }

  let result = new CalResult();
  result = calProcess(par);
  console.log('计算结果result:');
  console.log(result);
  console.log();
  return result;

  function calProcess(par) {
    console.log('计算使用参数par:');
    console.log(par);
    console.log();
    let are, wg, sare, wg2,
      PI = 3.1415,
      density = Number(par.dinsity) || 7.85,
      STCode = par.STCode || 0,
      hig = Number(par.hig) || 0,
      _bre = Number(par.bre) || 0,
      dic = Number(par.dic) || 0,
      tic = Number(par.tic) || 0,
      _rad = Number(par.rad) || 0,
      ces = Number(par.ces) || 0,
      dad = Number(par.dad) || 0,
      bre, rad, Rad, coe, amend, has_rad, Crad, Section,
      Error_Paris0 = '你输入数据有误，请重新输入大于0的数值。';
      Error_ParisTicBig = '你输入的厚度有误，请不要输入大于型钢外尺寸的数值！';
    let CalCode = (STCode) ? STCode.replace(/[^A-Z]/g, '') : alert('错误：缺少型钢类型参数[STCode]');
    switch (CalCode) {
      case 'AI':
        bre = !_bre ? hig : _bre;
        rad = !_rad ? radAI() : _rad;
        checkParameterValidity([hig, bre], [tic], calAI);        
        break;
      case 'LT':
        bre = _bre;
        rad = !_rad ? radAI() : _rad;
        checkParameterValidity([hig, bre], [tic], calLT);
        break;
      case 'IB':
        bre = _bre;
        coe = 0.615;
        rad = _rad;
        amend = PI * rad * 2 / 4 * 8;
        Crad = (rad * rad - tic / 3 * tic / 3);
        checkParameterValidity([hig, bre], [dic, tic], calHB);
        break;
      case 'HB':
      case 'WB':
        bre = _bre;
        coe = 0.8584;
        rad = _rad;
        if (rad && (rad.toString() !== 'NaN')) {
          amend = PI * rad * 2 / 4 * 8;
          has_rad = true;
        } else {
          amend = 0;
          has_rad = false;
        }
        Crad = (has_rad) ? (rad * rad - tic / 3 * tic / 3) : 0;
        checkParameterValidity([hig, bre], [dic, tic], calHB);
        break;
      case 'CS':
        coe = 0.349;
        bre = _bre;
        rad = _rad;
        Crad = rad * rad - tic / 3 * tic / 3;
        amend = PI * rad * 2 / 4 * 4;
        checkParameterValidity([hig, bre], [dic, tic], calHB);
        break;
      case 'TB':
        coe = 0.4292;
        bre = _bre;
        rad = _rad;
        Crad = rad * rad - tic / 3 * tic / 3;
        amend = PI * rad * 2 / 4 * 4;
        checkParameterValidity([hig, bre], [dic, tic], calTB);
        break;
      case 'CT':
      case 'ZT':
        bre = _bre;
        checkParameterValidity([hig, bre], [ces, tic], calCT);
        break;
      case 'RB':
        Idad = !tic ? 0 : (dad - 2 * tic);
        checkParameterValidity([dad], [], calRB);
        break;
      case 'SS':
      case 'SP':
        Idad = !tic ? 0 : (dad - 2 * tic);
        checkParameterValidity([dad], [tic], calRB);
        break;
      case 'RT':
        bre = !_bre ? hig : _bre;
        Rad = radRT();
        rad = !_rad ? (Rad - tic) : _rad;
        checkParameterValidity([hig, bre], [tic], calRT);
        break;
      case 'SSP':
      checkParameterValidity([tic], [], calSSP);
        break;
    }

    function calAI() {
      Section = (tic * (hig + bre - tic) + 0.215 * (rad * rad - 2 * tic / 3 * tic / 3));
      are = Section / 100;
      wg = density * Section / 1000;
      sare = ((hig + bre) * 2 -  (tic * 2) - 2 * rad + PI * rad * 2 / 2) / 1000;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calLT() {
      Section = (hig * dic + tic * (bre - dic) + 0.215 * (rad * rad - 2 * rad / 2 * rad / 2));
      are =  Section / 100;
      wg = density * Section / 1000;
      sare = ((hig + bre) * 2 -  (dic + tic) -( rad + rad / 2) + PI * (rad + rad / 2) * 2 / 4) / 1000 * 1;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calHB() {
      Section = (hig * dic + 2 * tic * (bre - dic) + coe * Crad);
      are =  Section / 100;
      wg = density * Section / 1000;
      sare = ((hig + bre) * 2 + (bre * 2) - (dic * 2) - (tic * 4) + amend - 12 * rad) / 1000;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calTB() {
      Section = (hig * dic + tic * (bre - dic) + coe * Crad);
      are = Section / 100;
      wg = density * Section / 1000;
      sare = ((hig + bre) * 2 - (dic * 1) - (tic * 2) + amend - 6 * rad) / 1000;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calCT() {
      Section = (hig + 2 * bre + 2 * ces) * tic;
      are =  Section / 100;
      wg = density * Section / 1000;
      sare = ((hig + bre + ces) * 2 - (dic * 2) - (tic * 2)) / 1000;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calRB() {
      Section = PI * (dad * dad - Idad * Idad) / 4;
      are = Section / 100;
      wg = !Idad ? (0.00617 * dad * dad) : (0.02466 * tic * (dad - tic));
      sare = PI * dad / 1000;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calRT() {
      Section = (hig * bre - (tic * tic * 4 - PI * tic * tic) - ((hig - 2 * tic) * (bre - 2 * tic) - (tic * tic * 4 - PI * tic * tic)));
      are =  Section / 100;
        wg = density * Section / 1000;
        sare = (2 * (hig - tic + bre - tic) + PI * Rad * 2 / 4 * 4) / 100;
      return {
        are: are,
        wg: wg,
        sare: sare
      }
    }

    function calSSP() {
      wg2 = density * tic;
      are = tic * 1000 / 100;
      return {
        are: are,
        wg2: wg2
      }
    }
    //radAI 角钢内半径取值函数
    function radAI() {
      let r,
        h = hig;
      //叛断等边还是不等边角钢
      if (hig == bre) {
        if (h && h <= 25) {
          r = 3.5;
        } else if (h <= 36) {
          r = 4.5;
        } else if (h <= 45) {
          r = 5;
        } else if (h <= 50) {
          r = 5.5;
        } else if (h <= 56) {
          r = 6;
        } else if (h <= 60) {
          r = 6.5;
        } else if (h <= 63) {
          r = 7;
        } else if (h <= 70) {
          r = 8;
        } else if (h <= 80) {
          r = 9;
        } else if (h <= 90) {
          r = 10;
        } else if (h <= 110) {
          r = 12;
        } else if (h <= 150) {
          r = 14;
        } else if (h <= 180) {
          r = 16;
        } else if (h <= 200) {
          r = 18;
        } else if (h <= 220) {
          r = 21;
        } else if (h <= 250) {
          r = 24;
        } else {
          //throw new error("等边角钢边长" + h + ">250,规格超出本计算程序计算上限");
          alert("等边角钢边长" + h + ">250,规格超出本计算程序计算上限");
        }
      } else {
        if (h && h <= 32) {
          r = 3.5;
        } else if (h <= 40) {
          r = 4;
        } else if (h <= 45) {
          r = 5;
        } else if (h <= 50) {
          r = 5.5;
        } else if (h <= 56) {
          r = 6;
        } else if (h <= 63) {
          r = 7;
        } else if (h <= 70) {
          r = 7.5;
        } else if (h <= 80) {
          r = 8;
        } else if (h <= 90) {
          r = 9;
        } else if (h <= 110) {
          r = 10;
        } else if (h <= 125) {
          r = 11;
        } else if (h <= 150) {
          r = 12;
        } else if (h <= 160) {
          r = 13;
        } else if (h <= 200) {
          r = 14;
        } else if (h <= 300) {
          r = 15;
        } else if (h <= 500) {
          r = 20;
        } else {
          //throw new error("不等边角钢长边长" + h + ">200,规格超出本计算程序计算上限");
          alert("不等边角钢(或L型钢)长边长" + h + ">500,规格超出本计算程序计算上限");
        }
      }
      return r;
    }
    //方管和矩形管的圆角
    function radRT() {
      let r,
        t = tic;
      switch (true) {
        case t <= 3:
          r = 1.5 * t;
          break;
        case t <= 6:
          r = 2 * t;
          break;
        case t <= 10:
          r = 2.5 * t;
          break;
        case t <= 16:
          r = 3 * t;
          break;
        case t > 16:
          r = 3.5 * t;
          break;
      }
      return r;
    }
    //输出数据保留小数，其中toFixed()函数决定保留几位小数
    function numToFixed(obj) {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          obj[i] = (obj[i]) ? arr[i].toFixed(3) : obj[i];
        }
      } else if (obj) {
        obj = obj.toFixed(3);
      }
      return obj;
    }

    function checkParameterValidity(extDim, intTic, fn){
      //extDim = extDim || [];
      //intTic = intTic || [];
      //fn = fn || function(){};
      let paris0 = false,
          parisTicBig = false;
      for (let key1 in extDim) {
        if (!Number(extDim[key1])) {
          paris0 = true;          
        }
        if (!isEmpty(intTic)&&(!paris0)) {
          for (let key2 in intTic) {
            if (!Number(intTic[key2])) {
              paris0 = true;              
            } else if (Number(intTic[key2]) >= Number(extDim[key1])) {
              parisTicBig = true;              
            }
          }
        }        
      }
      if (paris0) {
        alert(Error_Paris0);        
      } else if (parisTicBig) {
        alert(Error_ParisTicBig);        
      } else {
        fn();
      }
    }

    if (CalCode == 'SSP') {
      return {
        are: numToFixed(are),
        wg2: numToFixed(wg2)
      }
    } else {
      return {
        are: numToFixed(are),
        wg1: numToFixed(wg),
        sare: numToFixed(sare)
      }
    }

  }
}

//export default {CalculateModule};

/** CalculateModule 型钢重量、截面积、表面积计算模块
 *  calObj 输入参数：对象{}，包含以下格式数据
 *  {
 *    density: density; //必需有，判定型钢密度，
 *    STCode: STCode; //必需有，判定型钢种类，选择相应的计算公式
 *    hig: hig, //高度，可选
 *    bre: bre, //宽度，可选
 *    dic: dic, //腰厚，可选
 *    tic: tic, //边厚度，可选
 *    rad: rad, //内弧度，可选
 *    ces: ces, //突出高度，可选
 *    dad: dad  //直径，可选
 *  }
 *  result 输出结果：对象{}，包含以下格式数据
 *  {
 *    STCode ：STCode, //型钢种类
 *    are: are, //截面面积
 *    wg: wg, //重量
 *    sare: sare //外表面积（不含截面积）
 *  }
 */
