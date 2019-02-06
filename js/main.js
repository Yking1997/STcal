opMap =  copy(outputMap, true);
initMap =  copy(MakeInitData(baseMap), true);
       

window.onload = App();
function App() {
    
   getopMapNumParCalRef(initMap, opMap);
   makeEleForDiv(HtmldomTree, initMap, opMap);
   setSelectNull('selSTList');
   opMap.DivIdLies = makeopMapDivIdLies();
   makealtDivMeth();
   baseMap = Object.create(null);
};
