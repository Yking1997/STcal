const CalculateModule = (calObj = {}) => {
  let par = new CalParametric();
  for (let key in calObj) {
    par[key] = calObj[key] || 0;
  }
  let result = new CalResult();

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
  
  const calfn = () => {
    return new Map([
      [/^AI$/, () => {
        bre = !_bre ? hig : _bre;
        rad = !_rad ? calradAI(hig, bre) : _rad;    
        checkParameterValidity([hig, bre], [tic], cal.AI);
      }],
      [/^LT$/, () => {
        bre = _bre;
        rad = !_rad ? calradAI(hig, bre) : _rad;    
        checkParameterValidity([hig, bre], [tic], cal.LT);
      }],
      [/^IB$/, () => {
        bre = _bre;
        coe = 0.615;
        rad = _rad;
        amend = PI * rad * 2 / 4 * 8;
        Crad = (rad * rad - tic / 3 * tic / 3);
        checkParameterValidity([hig, bre], [dic, tic], cal.HB);
      }],
      [/^(HB)|(WB)$/, () => {
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
          checkParameterValidity([hig, bre], [dic, tic], cal.HB);
      }],
      [/^CS$/, () => {
        coe = 0.349;
        bre = _bre;
        rad = _rad;
        Crad = rad * rad - tic / 3 * tic / 3;
        amend = PI * rad * 2 / 4 * 4;
        checkParameterValidity([hig, bre], [dic, tic], cal.HB);
      }],
      [/^TB$/, () => {
        coe = 0.4292;
        bre = _bre;
        rad = _rad;
        Crad = rad * rad - tic / 3 * tic / 3;
        amend = PI * rad * 2 / 4 * 4;
        checkParameterValidity([hig, bre], [dic, tic], cal.TB);
      }],
      [/^(CT)|(ZT)$/, () => {
        bre = _bre;
        checkParameterValidity([hig, bre], [ces, tic], cal.CT);
      }],
      [/^RB$/, () => {
        Idad = !tic ? 0 : (dad - 2 * tic);
        checkParameterValidity([dad], [], cal.RB);
      }],
      [/^(SS)|(SP)$/, () => {
        Idad = !tic ? 0 : (dad - 2 * tic);
        checkParameterValidity([dad], [tic], cal.RB);
      }],
      [/^RT$/, () => {
        bre = !_bre ? hig : _bre;
        Rad = calradRT(tic);
        rad = !_rad ? (Rad - tic) : _rad;
        checkParameterValidity([hig, bre], [tic], cal.RT);
      }],
      [/^SSP$/, () => {
        checkParameterValidity([tic], [], cal.SSP);
      }],
    ])
  } 

  const selCalfn = () => {
    let res;
    let action = [...calfn()].filter(([key, value]) => (key.test(`${CalCode}`)));
    action.forEach(([key, value]) => value.call(this))
    return res;
}
  const cal = { 
    AI: () => {
        let Section = (
            tic * (hig + bre - tic) + 0.215 * (rad * rad - 2 * tic / 3 * tic / 3)
        );
        are = Section / 100;
        wg = density * Section / 1000;
        sare = ((hig + bre) * 2 - (tic * 2) - 2 * rad + PI * rad * 2 / 2) / 1000;
        return {are: are, wg: wg, sare: sare}
    },

    LT: () => {
        let Section = (
            hig * dic + tic * (bre - dic) + 0.215 * (rad * rad - 2 * rad / 2 * rad / 2)
        );
        are = Section / 100;
        wg = density * Section / 1000;
        sare = (
            (hig + bre) * 2 - (dic + tic) - (rad + rad / 2) + PI * (rad + rad / 2) * 2 / 4
        ) / 1000 * 1;
        return {are: are, wg: wg, sare: sare}
    },

    HB: () => {
        let Section = (hig * dic + 2 * tic * (bre - dic) + coe * Crad);
        are = Section / 100;
        wg = density * Section / 1000;
        sare = ((hig + bre) * 2 + (bre * 2) - (dic * 2) - (tic * 4) + amend - 12 * rad) / 1000;
        return {are: are, wg: wg, sare: sare}
    },

    TB: () => {
        let Section = (hig * dic + tic * (bre - dic) + coe * Crad);
        are = Section / 100;
        wg = density * Section / 1000;
        sare = ((hig + bre) * 2 - (dic * 1) - (tic * 2) + amend - 6 * rad) / 1000;
        return {are: are, wg: wg, sare: sare}
    },

    CT: () => {
        let Section = (hig + 2 * bre + 2 * ces) * tic;
        are = Section / 100;
        wg = density * Section / 1000;
        sare = ((hig + bre + ces) * 2 - (dic * 2) - (tic * 2)) / 1000;
        return {are: are, wg: wg, sare: sare}
    },

    RB: () => {
        let Section = PI * (dad * dad - Idad * Idad) / 4;
        are = Section / 100;
        wg = !Idad
            ? (0.00617 * dad * dad)
            : (0.02466 * tic * (dad - tic));
        sare = PI * dad / 1000;
        return {are: are, wg: wg, sare: sare}
    },

    RT: () => {
        let Section = (
            hig * bre - (tic * tic * 4 - PI * tic * tic) - ((hig - 2 * tic) * (bre - 2 * tic) - (tic * tic * 4 - PI * tic * tic))
        );
        are = Section / 100;
        wg = density * Section / 1000;
        sare = (2 * (hig - tic + bre - tic) + PI * Rad * 2 / 4 * 4) / 100;
        return {are: are, wg: wg, sare: sare}
    },

    SSP: () => {
        wg2 = density * tic;
        are = tic * 1000 / 100;
        return {are: are, wg2: wg2}
    }
}
const selrad = { 
   eqAI: () => {
    return new Map([
      [/^0$/, 'error_0'],
      [/^([1-9])|(1\d)|(2[1-5])$/, 3.5],
      [/^(2[6-9])|(3[0-6])$/, 4.5],
      [/^(3[7-9])|(4[0-5])$/, 5],
      [/^(4[6-9])|(50)$/, 5.5],
      [/^(5[1-6])$/, 6],
      [/^(5[7-9])|(60)$/, 6.5],
      [/^(6[1-3])$/, 7],
      [/^(6[4-9])|(70)$/, 8],
      [/^(7[1-9])|(80)$/, 9],
      [/^(8[1-9])|(90)$/, 10],
      [/^(9[1-9])|(10[0-9])|(110)$/, 12],
      [/^(11[1-9])|(1[2-4]\d)|(150)$/, 14],
      [/^(15[1-9])|(1[6-7]\d)|(180)$/, 16],
      [/^(18[1-9])|(19\d)|(200)$/, 18],
      [/^(20[1-9])|(21\d)|(220)$/, 21],
      [/^(22[1-9])|(2[3-4]\d)|(250)$/, 24],
      [/^(25[1-9])|(2[6-9]\d)|([3-9]\d{2,})$/, 'error_Max']
    ])
  },

  unAI: () => {
    return new Map([
      [/^0$/, 'error_0'],
      [/^([1-9])|([1-2]\d)|(3[0-2])$/, 3.5],
      [/^(3[3-9])|(40)$/, 4],
      [/^4[1-5]$/, 5],
      [/^(4[6-9])|(50)$/, 5.5],
      [/^5[1-6]$/, 6],
      [/^(5[7-9])|(6[0-3])$/, 7],
      [/^(6[4-9])|(70)$/, 7.5],
      [/^(7[1-9])|(80)$/, 8],
      [/^(8[1-9])|(90)$/, 9],
      [/^(9[1-9])|(10\d)|(110)$/, 10],
      [/^(11[1-9])|(12[0-5])$/, 11],
      [/^(12[6-9])|(1[3-4]\d)|(150)$/, 12],
      [/^(15[1-9])|(160)$/, 13],
      [/^(16[1-9)|(1[7-9]\d)|(200)$/, 14],
      [/^(20[1-9])|(2[1-9]\d)|(300)$/, 15],
      [/^(30[1-9])|(3[1-9]\d)|(4\d{2,})|(500)$/, 20],
      [/^(50[1-9])|(5[1-9]\d)|([6-9]\d{2,})$/, 'error_Max']
    ])
  },

  RT: () => {
    return new Map([
      [/^0$/, 'error_0'],
      [/^[1-3]$/, 1.5],
      [/^[4-6]$/, 2],
      [/^[7-9]|(10)$/, 2.5],
      [/^(1[1-6])$/, 3],
      [/^(1[7-9])|([2-9][0-9])$/, 3.5],
    ])
   }
 }
  const calradAI = (hig, bre) => {
    let res;
    let action = (hig == bre) ? [...selrad.eqAI()].filter(([key,value]) =>(key.test(`${hig}`))) : [...selrad.unAI()].filter(([key,value]) =>(key.test(`${hig}`)));    
    action.forEach(([key, value]) => {res = value});
    return res;
  }

  const calradRT = (tic) => {
    let res;
    let action = [...selrad.RT()].filter(([key,value]) => (key.test(`${tic}`)));
    action.forEach(([key, value]) => {res = tic ? value*tic : value;})
    return res;
  }

  const numToFixed = (obj) => {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = (obj[i]) ? arr[i].toFixed(3) : obj[i];
      }
    } else if (obj) {
      obj = obj.toFixed(3);
    }
    return obj;
  }

  const checkParameterValidity = (extDim, intTic, fn) =>{
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

  result =selCalfn();

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
