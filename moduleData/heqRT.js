//var baseMap = (baseMap) ? baseMap : {};
var heqRT = {
  symbol: '□ ',
  chinese: '热轧方钢管',
  english: 'hot relled square tube',
  calculate: 'calRT',
  output: ['wg1', 'are', 'Sare'],
  dataPar: ['hig', 'tic'],
  data: [],
  base: [
    [25, [1.2, 1.5, 1.75, 2]],
    [30, [2.5, 3]],
    [40, [2.5, 3, 4]],
    [50, [2.5, 3, 4]],
    [60, [2.5, 3, 4, 5]],
    [70, [3, 4, 5]],
    [80, [3, 4, 5]]
  ],
  exDataPar: ['Ix', 'Iy', 'ix', 'iy', 'Wx', 'Wy', 'It', 'Ct'],
  exData: []
}

export {heqRT};