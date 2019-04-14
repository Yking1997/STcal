const startTime = Date.now();
const importFilePath = `./`;
const noRepeatFileNames = [
    'ceqRT',
    'cunRT',
    'fSSP',
    'tSSP',
    'heqRT',
    'hunRT',
    'h08CS',
    'h08eqAI',
    'h08IB',
    'h08LT',
    'h08RB1',
    'h08RB2',
    'h08unAI',
    'h10CT',
    'h10ZT',
    'h10SP',
    'h10SS',
    'h10HP',
    'h10W36',
    'h10W40',
    'h17W36a',
    'h17W36b',
    'h17W40a',
    'h17W40b'
];
const repeatFirstNames = ['h10', 'h17'];
const repeatLastNames = [
    'HB',
    'HM',
    'HN',
    'HT',
    'HW',
    'TB',
    'TM',
    'TN',
    'TW',
    'WB',
    'W14',
    'W24',
    'W44'
];


var tempFn = {};

let fileNames = (function () {
    let fileNames = [...noRepeatFileNames];
    for (let first of repeatFirstNames) {
        for (let last of repeatLastNames) {
            fileNames.push(`${first}${last}`);
        }
    }
    return fileNames;
})();

const loadImportModule = (obj = {}, name, src) => {
    import (src)
        .then((module) => {
            if ((name in module) && !(name in obj)) {
                obj[name] = copy(module[name], true);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    };

async function importMode(obj, names, path) {
    if (isArray(names)) {
        for (let name of names) {
            let src =  `${path}${name}.js`;           
            loadImportModule(obj, name, src);
            console.log(`Import '${name}' to useTime ${Date.now() - startTime}ms`);
        }
    } else if (typeof names == 'string'){
        let name = names;
        let src =  `${path}${name}.js`;
        loadImportModule(obj, name, src);
        console.log(`Import '${name}' to useTime ${Date.now() - startTime}ms`);
    }
    

}


importMode(baseMap, fileNames, importFilePath);
importMode(tempFn, 'MakeInitData', importFilePath);
importMode(tempFn, 'outputMap', importFilePath);
importMode(tempFn, 'HtmldomTree', importFilePath);

/*由于in 操作符只要通过对象能够访问到属性就返回true，hasOwnProperty()只在属性存在于
实例中时才返回true，因此只要in 操作符返回true 而hasOwnProperty()返回false，就可以确
定属性是原型中的属性*/
function hasPrototypeProperty(object, name){
    return object.hasOwnProperty(name) && (name in object);
}

function isMakeBaseMapComplete() {
    let object = baseMap;
    for (let name of fileNames) {
        if (!hasPrototypeProperty(object, name)) return false;
    }
    return true;
}

var TIMEOUT = 100;
setTimeout(function timeoutFunc() {    
    requestIdleCallback(function () {        
        if (isMakeBaseMapComplete()) {                      
            opMap =  copy(tempFn.outputMap, true);
            initMap =  copy(tempFn.MakeInitData(baseMap), true);
            window.onload = App();
        } else {
            setTimeout(timeoutFunc, TIMEOUT);            
        }

    });
}, TIMEOUT);

function App() {
    
   getopMapNumParCalRef(initMap, opMap);
   makeEleForDiv(tempFn.HtmldomTree, initMap, opMap);
   setSelectNull('selSTList');
   opMap.DivIdLies = makeopMapDivIdLies();
   makealtDivMeth();
   baseMap = Object.create(null);
   tempFn = Object.create(null);
};