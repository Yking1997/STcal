const CalculateModule = (calObj = {}) => {
    const calParameterList = () => {
        return new Map([
            [
                'PI', 3.1415
            ],
            [
                'STCode', 'String'
            ],
            [
                'density', 7.85
            ],
            [
                'hig', 0
            ],
            [
                '_bre', 0
            ],
            [
                'bre', 0
            ],
            [
                'dic', 0
            ],
            [
                'tic', 0
            ],
            [
                '_rad', 0
            ],
            [
                'rad', 0
            ],
            [
                'ces', 0
            ],
            [
                'dad', 0
            ],
            [
                'Rad', 0
            ],
            [
                'coe', 0
            ],
            [
                'amend', 0
            ],
            [
                'has_rad', 0
            ],
            [
                'Crad', 0
            ],
            [
                'Section', 0
            ],
            [
                'Idad', 0
            ],
            [
                'CalCode', 'String'
            ],
            [
                'are', 0
            ],
            [
                'wg1', 0
            ],
            [
                'wg2', 0
            ],
            [
                'sare', 0
            ],
            [
                'Error_isPar0', '你输入数据有误，请重新输入大于0的数值。'
            ],
            [
                'Error_isTicBig', '你输入的厚度有误，请不要输入大于型钢外尺寸的数值'
            ]
        ])
    };

    const init_that = () => {
        let res = {},
            Has_ = [],
            reg = /^_+\w*$/;
        let action = [...calParameterList()];
        action.forEach(([key, value]) => {
            res[key] = calObj[key] || value;
        });
        Has_ = action.filter(([key, value]) => ((reg.test(`${key}`))));
        Has_.forEach(([key, value]) => {
            let keyNo_ = key.substr(1);
            value = (res[keyNo_])
                ? res[keyNo_]
                : value;
            res[key] = value;
            res[keyNo_] = 0;
        });
        console.log(res);
        return res;
    };

    let that = init_that();
    that.CalCode = (that.STCode)
        ? that
            .STCode
            .replace(/[^A-Z]/g, '')
        : alert('错误：缺少型钢类型参数[STCode]');

    const calfn = () => {
        return new Map([
            [
                /^AI$/, () => {

                    that.bre = !that._bre
                        ? that.hig
                        : that._bre;
                    that.rad = !that._rad
                        ? calradAI(that.hig, that.bre)
                        : that._rad;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [that.tic], cal.AI);
                }
            ],
            [
                /^LT$/, () => {
                    that.bre = that._bre;
                    that.rad = !that._rad
                        ? calradAI(that.hig, that.bre)
                        : that._rad;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [that.tic], cal.LT);
                }
            ],
            [
                /^IB$/, () => {
                    that.bre = that._bre;
                    that.coe = 0.615;
                    that.rad = that._rad;
                    that.amend = that.PI * that.rad * 2 / 4 * 8;
                    that.Crad = (that.rad * that.rad - that.tic / 3 * that.tic / 3);
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [
                        that.dic, that.tic
                    ], cal.HB);
                }
            ],
            [
                /^(HB)|(WB)$/, () => {
                    that.bre = that._bre;
                    that.coe = 0.8584;
                    that.rad = that._rad;
                    if (that.rad && (that.rad.toString() !== 'NaN')) {
                        that.amend = that.PI * that.rad * 2 / 4 * 8;
                        that.has_rad = true;
                    } else {
                        that.amend = 0;
                        that.has_rad = false;
                    }
                    that.Crad = (that.has_rad)
                        ? (that.rad * that.rad - that.tic / 3 * that.tic / 3)
                        : 0;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [
                        that.dic, that.tic
                    ], cal.HB);
                }
            ],
            [
                /^CS$/, () => {
                    that.coe = 0.349;
                    that.bre = that._bre;
                    that.rad = that._rad;
                    that.Crad = that.rad * that.rad - that.tic / 3 * that.tic / 3;
                    that.amend = that.PI * that.rad * 2 / 4 * 4;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [
                        that.dic, that.tic
                    ], cal.HB);
                }
            ],
            [
                /^TB$/, () => {
                    that.coe = 0.4292;
                    that.bre = that._bre;
                    that.rad = that._rad;
                    that.Crad = that.rad * that.rad - that.tic / 3 * that.tic / 3;
                    that.amend = that.PI * that.rad * 2 / 4 * 4;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [
                        that.dic, that.tic
                    ], cal.TB);
                }
            ],
            [
                /^(CT)|(ZT)$/, () => {
                    that.bre = that._bre;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [
                        that.ces, that.tic
                    ], cal.CT);
                }
            ],
            [
                /^RB$/, () => {
                    that.Idad = !that.tic
                        ? 0
                        : (that.dad - 2 * that.tic);
                    checkParameterValidity([that.dad], [], cal.RB);
                }
            ],
            [
                /^(SS)|(SP)$/, () => {
                    that.Idad = !that.tic
                        ? 0
                        : (that.dad - 2 * that.tic);
                    checkParameterValidity([that.dad], [that.tic], cal.RB);
                }
            ],
            [
                /^RT$/, () => {
                    that.bre = !that._bre
                        ? that.hig
                        : that._bre;
                    that.Rad = calradRT(that.tic);
                    that.rad = !that._rad
                        ? (that.Rad - that.tic)
                        : that._rad;
                    checkParameterValidity([
                        that.hig, that.bre
                    ], [that.tic], cal.RT);
                }
            ],
            [
                /^PL$/, () => {
                    checkParameterValidity([that.tic], [], cal.PL);
                }
            ]
        ])
    }
    //根据Calfn数组键值进行选择计算公式
    const selCalfn = () => {
        let res;
        let action = [...calfn()].filter(
            ([key, value]) => (key.test(`${that.CalCode}`))
        );
        action.forEach(([key, value]) => value.call(this))
        return res;
    }

    const cal = {
        AI: () => {
            that.Section = (
                that.tic * (that.hig + that.bre - that.tic) + 0.215 * (that.rad * that.rad - 2 * that.tic / 3 * that.tic / 3)
            );
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                (that.hig + that.bre) * 2 - (that.tic * 2) - 2 * that.rad + that.PI * that.rad * 2 / 2
            ) / 1000;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        LT: () => {
            that.Section = (
                that.hig * that.dic + that.tic * (that.bre - that.dic) + 0.215 * (that.rad * that.rad - 2 * that.rad / 2 * that.rad / 2)
            );
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                (that.hig + that.bre) * 2 - (that.dic + that.tic) - (that.rad + that.rad / 2) + that.PI * (that.rad + that.rad / 2) * 2 / 4
            ) / 1000 * 1;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        HB: () => {
            that.Section = (
                that.hig * that.dic + 2 * that.tic * (that.bre - that.dic) + that.coe * that.Crad
            );
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                (that.hig + that.bre) * 2 + (that.bre * 2) - (that.dic * 2) - (that.tic * 4) + that.amend - 12 * that.rad
            ) / 1000;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        TB: () => {
            that.Section = (
                that.hig * that.dic + that.tic * (that.bre - that.dic) + that.coe * that.Crad
            );
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                (that.hig + that.bre) * 2 - (that.dic * 1) - (that.tic * 2) + that.amend - 6 * that.rad
            ) / 1000;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        CT: () => {
            that.Section = (that.hig + 2 * that.bre + 2 * that.ces) * that.tic;
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                (that.hig + that.bre + that.ces) * 2 - (that.dic * 2) - (that.tic * 2)
            ) / 1000;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        RB: () => {
            that.Section = that.PI * (that.dad * that.dad - that.Idad * that.Idad) / 4;
            that.are = that.Section / 100;
            that.wg1 = !that.Idad
                ? (0.00617 * that.dad * that.dad)
                : (0.02466 * that.tic * (that.dad - that.tic));
            that.sare = that.PI * that.dad / 1000;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        RT: () => {
            that.Section = (
                that.hig * that.bre - (that.tic * that.tic * 4 - that.PI * that.tic * that.tic) - ((that.hig - 2 * that.tic) * (that.bre - 2 * that.tic) - (that.tic * that.tic * 4 - that.PI * that.tic * that.tic))
            );
            that.are = that.Section / 100;
            that.wg1 = that.density * that.Section / 1000;
            that.sare = (
                2 * (that.hig - that.tic + that.bre - that.tic) + that.PI * that.Rad * 2 / 4 * 4
            ) / 100;
            return {are: that.are, wg1: that.wg1, sare: that.sare}
        },

        PL: () => {
            that.wg2 = that.density * that.tic;
            that.are = that.tic * 1000 / 100;
            return {are: that.are, wg2: that.wg2}
        }
    }

    const selrad = {
        eqAI: () => {
            return new Map([
                [
                    /^0$/, 'error_0'
                ],
                [
                    /^([1-9])|(1\d)|(2[1-5])$/, 3.5
                ],
                [
                    /^(2[6-9])|(3[0-6])$/, 4.5
                ],
                [
                    /^(3[7-9])|(4[0-5])$/, 5
                ],
                [
                    /^(4[6-9])|(50)$/, 5.5
                ],
                [
                    /^(5[1-6])$/, 6
                ],
                [
                    /^(5[7-9])|(60)$/, 6.5
                ],
                [
                    /^(6[1-3])$/, 7
                ],
                [
                    /^(6[4-9])|(70)$/, 8
                ],
                [
                    /^(7[1-9])|(80)$/, 9
                ],
                [
                    /^(8[1-9])|(90)$/, 10
                ],
                [
                    /^(9[1-9])|(10[0-9])|(110)$/, 12
                ],
                [
                    /^(11[1-9])|(1[2-4]\d)|(150)$/, 14
                ],
                [
                    /^(15[1-9])|(1[6-7]\d)|(180)$/, 16
                ],
                [
                    /^(18[1-9])|(19\d)|(200)$/, 18
                ],
                [
                    /^(20[1-9])|(21\d)|(220)$/, 21
                ],
                [
                    /^(22[1-9])|(2[3-4]\d)|(250)$/, 24
                ],
                [
                    /^(25[1-9])|(2[6-9]\d)|([3-9]\d{2,})$/, 'error_Max'
                ]
            ])
        },

        unAI: () => {
            return new Map([
                [
                    /^0$/, 'error_0'
                ],
                [
                    /^([1-9])|([1-2]\d)|(3[0-2])$/, 3.5
                ],
                [
                    /^(3[3-9])|(40)$/, 4
                ],
                [
                    /^4[1-5]$/, 5
                ],
                [
                    /^(4[6-9])|(50)$/, 5.5
                ],
                [
                    /^5[1-6]$/, 6
                ],
                [
                    /^(5[7-9])|(6[0-3])$/, 7
                ],
                [
                    /^(6[4-9])|(70)$/, 7.5
                ],
                [
                    /^(7[1-9])|(80)$/, 8
                ],
                [
                    /^(8[1-9])|(90)$/, 9
                ],
                [
                    /^(9[1-9])|(10\d)|(110)$/, 10
                ],
                [
                    /^(11[1-9])|(12[0-5])$/, 11
                ],
                [
                    /^(12[6-9])|(1[3-4]\d)|(150)$/, 12
                ],
                [
                    /^(15[1-9])|(160)$/, 13
                ],
                [
                    /^(16[1-9)|(1[7-9]\d)|(200)$/, 14
                ],
                [
                    /^(20[1-9])|(2[1-9]\d)|(300)$/, 15
                ],
                [
                    /^(30[1-9])|(3[1-9]\d)|(4\d{2,})|(500)$/, 20
                ],
                [
                    /^(50[1-9])|(5[1-9]\d)|([6-9]\d{2,})$/, 'error_Max'
                ]
            ])
        },
        //由于RT的rad带小数据，所以要增加小数匹配
        RT: () => {
            return new Map([
                [
                    /^0$/, 'error_0'
                ],
                [
                    /^([1-3])|([1-2]+\.\d+)$/, 1.5
                ],
                [
                    /^([4-6])|([4-5]+\.\d+)$/, 2
                ],
                [
                    /^[7-9]|([7-9]+\.\d+)|(10)$/, 2.5
                ],
                [
                    /^(1[1-6])|(1[1-6]+\.\d+)$/, 3
                ],
                [
                    /^(1[7-9])|(1[7-9]+\.\d+)|([2-9][0-9])|([2-9][0-9]+\.\d+)$/, 3.5
                ]
            ])
        }
    }
    
    const calradAI = (hig, bre) => {
        let res;
        let action = (hig == bre)
            ? [...selrad.eqAI()].filter(([key, value]) => (key.test(`${hig}`)))
            : [...selrad.unAI()].filter(([key, value]) => (key.test(`${hig}`)));
        action.forEach(([key, value]) => {
            res = value
        });
        return res;
    }

    const calradRT = (tic) => {
        let res;
        let action = [...selrad.RT()].filter(([key, value]) => (key.test(`${tic}`)));
        action.forEach(([key, value]) => {
            res = tic
                ? value * tic
                : value;
        })
        return res;
    }

    const numToFixed = (obj) => {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = (obj[i])
                    ? arr[i].toFixed(3)
                    : obj[i];
            }
        } else if (obj) {
            obj = obj.toFixed(3);
        }
        return obj;
    }
    /**
     *  checkParameterValidity : 检查输入参数是否为0或厚度大于外尺寸的错误。
     * @param {*} extDim 待检查第一组参数（长、宽、高），数组
     * @param {*} intTic 待检查第二组参数（厚、边厚），数组
     * @param {*} fn 运行的计算公式
     * res 返回错误提示或进行正确运算 
     */
    const checkParameterValidity = (extDim = [], intTic = [], fn = function () {}) => {
        let isPar0 = false,
            isTicBig = false,
            res;
        for (let key1 in extDim) {
            isPar0 = (!Number(extDim[key1]))
                ? true
                : false;

            if (intTic.length != 0 && (!isPar0)) {
                for (let key2 in intTic) {
                    isPar0 = (!Number(intTic[key2]))
                        ? true
                        : false;
                    //由于intTic是数组，第一次比较可能出现true;为逼免第二次比较为false会复盖ticisBig
                    isTicBig = ((isTicBig) || Number(intTic[key2]) >= Number(extDim[key1]))
                        ? true
                        : false;
                }
            }
        }
        res = (isPar0)
            ? alert(that.Error_isPar0)
            : (
                (isTicBig)
                    ? alert(that.Error_isTicBig)
                    : fn()
            )
        return res;
    }

    selCalfn();
    if (that.CalCode == 'PL') {
        return {
            are: numToFixed(that.are),
            wg2: numToFixed(that.wg2)
        }
    } else {
        return {
            are: numToFixed(that.are),
            wg1: numToFixed(that.wg1),
            sare: numToFixed(that.sare)
        }
    }
}