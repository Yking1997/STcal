const HtmldomTree = {
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

export {HtmldomTree};