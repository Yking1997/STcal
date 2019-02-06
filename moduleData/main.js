baseMap = {
    h08eqAI: copy(h08eqAI, true),
    h08unAI: copy(h08unAI, true), 
    h08LT: copy(h08LT, true),
    h08CS: copy(h08CS, true),
    h08IB: copy(h08IB, true),
    h08RB1: copy(h08RB1, true),
    h08RB2: copy(h08RB2, true),
    h10CT: copy(h10CT, true),
    h10HB: copy(h10HB, true),
    h10HM: copy(h10HM, true),
    h10HN: copy(h10HN, true),
    h10HP: copy(h10HP, true),
    h10HT: copy(h10HT, true),
    h10HW: copy(h10HW, true),
    h10SP: copy(h10SP, true),
    h10SS: copy(h10SS, true),
    h10TB: copy(h10TB, true),
    h10TM: copy(h10TM, true),
    h10TN: copy(h10TN, true),
    h10TW: copy(h10TW, true),
    h10W14: copy(h10W14, true),
    h10W24: copy(h10W24, true),
    h10W36: copy(h10W36, true),
    h10W40: copy(h10W40, true),
    h10W44: copy(h10W44, true),
    h10WB: copy(h10WB, true),
    h10ZT: copy(h10ZT, true),
    h17HB: copy(h17HB, true),
    h17HM: copy(h17HM, true),
    h17HN: copy(h17HN, true),
    h17HT: copy(h17HT, true),
    h17HW: copy(h17HW, true),
    h17TB: copy(h17TB, true),
    h17TM: copy(h17TM, true),
    h17TN: copy(h17TN, true),
    h17TW: copy(h17TW, true),
    h17W14: copy(h17W14, true),
    h17W24: copy(h17W24, true),
    h17W36a: copy(h17W36a, true),
    h17W36b: copy(h17W36b, true),
    h17W40a: copy(h17W40a, true),
    h17W40b: copy(h17W40b, true),
    h17W44: copy(h17W44, true),
    h17WB: copy(h17WB, true),
    heqRT: copy(heqRT, true),
    hunRT: copy(hunRT, true),
    ceqRT: copy(ceqRT, true),
    cunRT: copy(cunRT, true),
    fSSP: copy(fSSP, true),
    tSSP: copy(tSSP, true)
};
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

import {h08eqAI} from './h08eqAI.js';
import {h08unAI} from './h08unAI.js';
import {h08LT} from './h08LT.js';
import {h08CS} from './h08CS.js';
import {h08IB} from './h08IB.js';
import {h08RB1} from './h08RB1.js';
import {h08RB2} from './h08RB2.js';
import {h10CT} from './h10CT.js';
import {h10HB} from './h10HB.js';
import {h10HM} from './h10HM.js';
import {h10HN} from './h10HN.js';
import {h10HP} from './h10HP.js';
import {h10HT} from './h10HT.js';
import {h10HW} from './h10HW.js';
import {h10SP} from './h10SP.js';
import {h10SS} from './h10SS.js';
import {h10TB} from './h10TB.js';
import {h10TM} from './h10TM.js';
import {h10TN} from './h10TN.js';
import {h10TW} from './h10TW.js';
import {h10W14} from './h10W14.js';
import {h10W24} from './h10W24.js';
import {h10W36} from './h10W36.js';
import {h10W40} from './h10W40.js';
import {h10W44} from './h10W44.js';
import {h10WB} from './h10WB.js';
import {h10ZT} from './h10ZT.js';
import {h17HB} from './h17HB.js';
import {h17HM} from './h17HM.js';
import {h17HN} from './h17HN.js';
import {h17HT} from './h17HT.js';
import {h17HW} from './h17HW.js';
import {h17TB} from './h17TB.js';
import {h17TM} from './h17TM.js';
import {h17TN} from './h17TN.js';
import {h17TW} from './h17TW.js';
import {h17W14} from './h17W14.js';
import {h17W24} from './h17W24.js';
import {h17W36a} from './h17W36a.js';
import {h17W36b} from './h17W36b.js';
import {h17W40a} from './h17W40a.js';
import {h17W40b} from './h17W40b.js';
import {h17W44} from './h17W44.js';
import {h17WB} from './h17WB.js';
import {heqRT} from './heqRT.js';
import {hunRT} from './hunRT.js';
import {ceqRT} from './ceqRT.js';
import {cunRT} from './cunRT.js';
import {fSSP} from './fSSP.js';
import {tSSP} from './tSSP.js';
import {outputMap} from './outputMap.js';
import {MakeInitData} from './MakeInitData.js';
import {HtmldomTree} from './HtmldomTree.js';
