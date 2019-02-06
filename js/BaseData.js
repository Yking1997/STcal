var baseMap = {};
var opMap = {};
var initMap = {};
const PI = 3.1415926;
//isdeep是用作深拷贝判断标志，如果不设此值，函数运行时deep用underfind值都会算true
var isdeep = {
    true: true || 1,
    false: false || 0
};

class User {
    constructor(
        STCode,
        Parprop,
        Parvalue,
        Parunit,
        Calprop,
        Calvalue,
        Calunit,
        Refprop,
        Refvalue,
        Refunit
    ) {
        this.STCode = STCode;

        this.Parprop = Parprop || {};
        this.Parvalue = Parvalue || {};
        this.Parunit = Parunit || {};

        this.Calprop = Calprop || {};
        this.Calvalue = Calvalue || {};
        this.Calunit = Calunit || {};

        this.Refprop = Refprop || {};
        this.Refvalue = Refvalue || {};
        this.Refunit = Refunit || {};

    }
}

var user = new User();
class CalParametric {
    constructor(STCode, hig, bre, dic, tic, rad, ces, dad) {
        this.STCode = STCode;
        this.hig = hig;
        this.bre = bre;
        this.dic = dic;
        this.tic = tic;
        this.rad = rad;
        this.ces = ces;
        this.dad = dad;
    }
}

class CalResult {
    constructor(are, wg1, sare, wg2) {
        this.are = are;
        this.wg1 = wg1;
        this.sare = sare;
        this.wg2 = wg2;
    }
}

class FindSTResult {
    constructor(
        STCode,
        wg1,
        wg2,
        are,
        Sare,
        Ix,
        Ix0,
        Ix1,
        Iy,
        Iy0,
        iυ,
        rx,
        ry,
        Wx,
        Wx0,
        Wy,
        Wy0,
        Wymax,
        Wymin,
        Wυ,
        Sx,
        Sy,
        It,
        Ct,
        Cx,
        X0,
        Y0,
        Z0,
        ty,
        tanα
    ) {
        this.STCode = STCode;
        this.wg1 = wg1;
        this.wg2 = wg2;
        this.are = are;
        this.Sare = Sare;
        this.Ix = Ix;
        this.Ix0 = Ix0;
        this.Ix1 = Ix1;
        this.Iy = Iy;
        this.Iy0 = Iy0;
        this.iυ = iυ;
        this.rx = rx;
        this.ry = ry;
        this.Wx = Wx;
        this.Wx0 = Wx0;
        this.Wy = Wy;
        this.Wy0 = Wy0;
        this.Wymax = Wymax;
        this.Wymin = Wymin;
        this.Wυ = Wυ;
        this.Sx = Sx;
        this.Sy = Sy;
        this.It = It;
        this.Ct = Ct;
        this.Cx = Cx;
        this.X0 = X0;
        this.Y0 = Y0;
        this.Z0 = Z0;
        this.ty = ty;
        this.tanα = tanα;
    }
}
