const opMap = {
  //可调参数对应元素名称显示
  opPar: {
    eqAI: {
      prop: {
        hig: '等边长',
        tic: '平均厚度'
      },
      unit: {
        hig: '毫米',
        tic: '毫米'
      }
    },
    unAI: {
      prop: {
        hig: '长边长',
        bre: '短边长',
        tic: '平均厚度'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        tic: '毫米'
      }
    },
    LT: {
      prop: {
        hig: '长边长',
        bre: '短边长',
        dic: '长边厚度',
        tic: '短边厚度'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米', 
        tic: '毫米'
      }
    },
    IB: {
      prop: {
        hig: '高度',
        bre: '翼宽度',
        dic: '腰厚',
        tic: '翼厚',
        rad: '内圆弧半径',
        rad1: '翼圆弧半径'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米',
        tic: '毫米',
        rad: '毫米',
        rad1: '毫米'
      }
    },
    CS: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        dic: '腰厚度',
        tic: '平均腿厚度',
        rad: '内圆弧半径',
        rad1: '腿端圆弧半径'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米',
        tic: '毫米',
        rad: '毫米',
        rad1: '毫米'
      }
    },
    HB: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        dic: '腰厚',
        tic: '平均腿厚',
        rad: '内圆弧半径'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米',
        tic: '毫米',
        rad: '毫米'
      }
    },
    TB: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        dic: '腰厚',
        tic: '平均腿厚',
        rad: '内圆弧半径'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米',
        tic: '毫米',
        rad: '毫米'
      }
    },
    WB: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        dic: '腰厚',
        tic: '平均腿厚',
        rad: '内圆弧半径'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        dic: '毫米',
        tic: '毫米',
        rad: '毫米'
      }
    },
    CT: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        ces: '边突高',
        tic: '平均厚度'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        ces: '毫米',
        tic: '毫米'
      }
    },
    ZT: {
      prop: {
        hig: '高度',
        bre: '腿宽度',
        ces: '边突高',
        tic: '平均厚度'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        ces: '毫米',
        tic: '毫米'
      }
    },
    RB: {
      prop: {
        dad: '直径'
      },
      unit: {
        dad: '毫米'
      }
    },
    SS: {
      prop: {
        dad: '直径',
        tic: '管壁厚度'
      },
      unit: {
        dad: '毫米',
        tic: '毫米'
      }
    },
    SP: {
      prop: {
        dad: '直径',
        tic: '管壁厚度'
      },
      unit: {
        dad: '毫米',
        tic: '毫米'
      }
    },
    eqRT: {
      prop: {
        hig: '等边长',
        tic: '管壁厚度'
      },
      unit: {
        hig: '毫米',
        tic: '毫米'
      }
    },
    unRT: {
      prop: {
        hig: '长边长',
        bre: '短边长',
        tic: '管壁厚度'
      },
      unit: {
        hig: '毫米',
        bre: '毫米',
        tic: '毫米'
      }
    },
    SSP: {
      prop: {
        tic: '平均厚度'
      },
      unit: {
        tic: '毫米'
      }
    }
  },
  //查询结构对应的名称显示
  opRef: {
    prop: {
      wg1: '重量',
      are: '截面面积',
      Sare: '外表面积',
      Ix: '惯性矩Ix',
      Ix0: '惯性矩Ix0',
      Ix1: '惯性矩Ix1',
      Iy: '惯性矩Iy',
      Iy0: '惯性矩Iy0',
      Iy1: '惯性矩Iy1',
      Iυ: '惯性矩Iu',
      ix: '回转半径ix',
      ix0: '回转半径ix0',
      ix1: '回转半径ix1',
      iy: '回转半径iy',
      iy0: '回转半径iy0',
      iυ: '回转半径iu',
      rx: '惯性半径rx',
      ry: '惯性半径ry',
      Wx: '截面模数Wx',
      Wx0: '截面模数Wx0',
      Wy: '截面模数Wy',
      Wy0: '截面模数Wy0',
      Wymax: 'Wymax',
      Wymin: 'Wymin',
      Wυ: '截面模数Wυ',
      Sx: '面积矩Sx',
      Sy: '面积矩Sy',
      It: '惯性矩It',
      Ct: '惯性半径Ct',
      Cx: '重心Cx',
      X0: '重心距离x0',
      Y0: '重心距离y0',
      Z0: '重心距离z0',
      ty: 'ty',
      wg2: '重量',
      tanα: 'tanα'
    },
    unit: {
      wg1: 'kg/m',
      are: 'cm^2',
      Sare: 'm^2/m',
      Ix: 'cm^4',
      Ix0: 'cm^4',
      Ix1: 'cm^4',
      Iy: 'cm^4',
      Iy0: 'cm^4',
      Iy1: 'cm^4',
      Iυ: 'cm^4',
      ix: 'cm',
      ix0: 'cm',
      ix1: 'cm',
      iy: 'cm',
      iy0: 'cm',
      iυ: 'cm',
      rx: 'cm',
      ry: 'cm',
      Wx: 'cm^3',
      Wx0: 'cm^3',
      Wy: 'cm^3',
      Wy0: 'cm^3',
      Wymax: 'cm^3',
      Wymin: 'cm^3',
      Wυ: 'cm^3',
      Sx: 'cm^3',
      Sy: 'cm^3',
      It: 'cm^4',
      Ct: 'cm^4',
      Cx: 'cm',
      X0: 'cm',
      Y0: 'cm',
      Z0: 'cm',
      ty: 'cm',
      wg2: 'kg/m^2',
      tanα: '系数'
    }
  },
  //计算结果对应名称显示
  opCal: {
    prop: {
      wg1: '重量',
      are: '截面面积',
      sare: '外表面积',
      wg2: '重量'
    },
    unit: {
      wg1: 'kg/m',
      are: 'cm^2',
      sare: 'm^2/m',
      wg2: 'kg/m^2'
    }
  },
  tabPar: '',
  tabRef: '',
  tabCal: '',
  saveTxtArr: new Array(9)
};
