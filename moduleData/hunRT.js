//var baseMap = (baseMap) ? baseMap : {};
var hunRT = {
  symbol: '[] ',
  chinese: '热轧矩形钢管',
  english: 'hot relled rectangular tube',
  calculate: 'calRT',
  output: ['wg1', 'are', 'Sare'],
  dataPar: ['hig', 'bre', 'tic'],
  data: [],
  base: [
    [50, 25, [1.2, 1.5]],
    [50, 30, [2.5, 3, 4]],
    [60, 30, [2.5, 3, 4]],
    [60, 40, [2.5, 3, 4]],
    [70, 50, [3, 4, 5]],
    [80, 40, [2.5, 3, 4, 5]],
    [80, 60, [3, 4, 5]],
    [90, 40, [3, 4, 5]],
    [90, 50, [3, 4, 5]],
    [90, 60, [3, 4, 5]],
    [100, 50, [3, 4, 5]],
    [120, 60, [3, 4, 5, 6]],
    [120, 80, [3, 4, 5, 6]],
    [140, 80, [4, 5, 6]],
    [150, 100, [4, 5, 6, 8]],
    [160, 80, [4, 5, 6, 8]],
    [180, 100, [4, 5, 6, 8]],
    [200, 100, [4, 5, 6, 8]]
  ],
  exDataPar: ['Ix', 'Iy', 'ix', 'iy', 'Wx', 'Wy', 'It', 'Ct'],
  exData: []
}

export {hunRT};