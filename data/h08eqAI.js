var baseMap = (baseMap) ? baseMap : {};
baseMap.h08eqAI = {
  symbol: '∠ ',
  chinese: '热轧等边角钢（GB/T706-2008）',
  english: 'hot rolled equal leg angle steel',
  calculate: 'calAI',
  output: ['wg1', 'are'],
  dataPar: ['hig', 'tic'],
  data: [],
  base: [
    [20, [3, 4]],
    [25, [3, 4]],
    [30, [3, 4]],
    [36, [3, 4, 5]],
    [40, [3, 4, 5]],
    [45, [3, 4, 5, 6]],
    [50, [3, 4, 5, 6]],
    [56, [3, 4, 5, 6, 7, 8]],
    [60, [5, 6, 7, 8]],
    [63, [4, 5, 6, 7, 8, 10]],
    [70, [4, 5, 6, 7, 8]],
    [75, [5, 6, 7, 8, 9, 10]],
    [80, [5, 6, 7, 8, 9, 10]],
    [90, [6, 7, 8, 9, 10, 12]],
    [100, [6, 7, 8, 9, 10, 12, 14, 16]],
    [110, [7, 8, 10, 12, 14]],
    [125, [8, 10, 12, 14, 16]],
    [140, [10, 12, 14, 16]],
    [150, [8, 10, 12, 14, 15, 16]],
    [160, [10, 12, 14, 16]],
    [180, [12, 14, 16, 18]],
    [200, [14, 16, 18, 20, 24]],
    [220, [16, 18, 20, 22, 24, 26]],
    [250, [18, 20, 24, 26, 28, 30, 32, 35]]
  ],
  exDataPar: ['are', 'wg1', 'Sare', 'Ix', 'Ix1', 'Ix0', 'Iy0', 'ix', 'ix0', 'iy0', 'Wx', 'Wx0', 'Wy0', 'Z0'],
  exData: [
    [1.132, 0.889, 0.078, 0.40, 0.81, 0.63, 0.17, 0.59, 0.75, 0.39, 0.29, 0.45, 0.20, 0.60],
    [1.459, 1.145, 0.077, 0.50, 1.09, 0.78, 0.22, 0.58, 0.73, 0.38, 0.36, 0.55, 0.24, 0.64],

    [1.432, 1.124, 0.098, 0.82, 1.57, 1.29, 0.34, 0.76, 0.95, 0.49, 0.46, 0.73, 0.33, 0.73],
    [1.859, 1.459, 0.097, 1.03, 2.11, 1.62, 0.43, 0.74, 0.93, 0.48, 0.59, 0.92, 0.40, 0.76],

    [1.749, 1.373, 0.117, 1.46, 2.71, 2.31, 0.61, 0.91, 1.15, 0.59, 0.68, 1.09, 0.51, 0.85],
    [2.276, 1.786, 0.117, 1.84, 3.63, 2.92, 0.77, 0.90, 1.13, 0.58, 0.87, 1.37, 0.62, 0.89],

    [2.109, 1.656, 0.141, 2.58, 4.68, 4.09, 1.07, 1.11, 1.39, 0.71, 0.99, 1.61, 0.76, 1.00],
    [2.756, 2.163, 0.141, 3.29, 6.25, 5.22, 1.37, 1.09, 1.38, 0.70, 1.28, 2.05, 0.93, 1.04],
    [3.382, 2.654, 0.141, 3.95, 7.84, 6.24, 1.65, 1.08, 1.36, 0.70, 1.56, 2.45, 1.09, 1.07],

    [2.359, 1.852, 0.157, 3.59, 6.41, 5.69, 1.49, 1.23, 1.55, 0.79, 1.23, 2.01, 0.96, 1.09],
    [3.086, 2.422, 0.157, 4.60, 8.56, 7.29, 1.91, 1.22, 1.54, 0.79, 1.60, 2.58, 1.19, 1.13],
    [3.791, 2.976, 0.156, 5.53, 10.74, 8.76, 2.30, 1.21, 1.52, 0.78, 1.96, 3.10, 1.39, 1.17],

    [2.659, 2.088, 0.177, 5.17, 9.12, 8.20, 2.14, 1.40, 1.76, 0.89, 1.58, 2.58, 1.24, 1.22],
    [3.486, 2.736, 0.177, 6.65, 12.18, 10.56, 2.75, 1.38, 1.74, 0.89, 2.05, 3.32, 1.54, 1.26],
    [4.292, 3.369, 0.176, 8.04, 15.25, 12.74, 3.33, 1.37, 1.72, 0.88, 2.51, 4.00, 1.81, 1.30],
    [5.076, 3.985, 0.176, 9.33, 18.36, 14.76, 3.89, 1.36, 1.70, 0.88, 2.95, 4.64, 2.06, 1.33],

    [2.971, 2.332, 0.197, 7.18, 12.50, 11.37, 2.98, 1.55, 1.96, 1.00, 1.96, 3.22, 1.57, 1.34],
    [3.897, 3.059, 0.197, 9.26, 16.69, 14.70, 3.82, 1.54, 1.94, 0.99, 2.56, 4.16, 1.96, 1.38],
    [4.803, 3.770, 0.196, 11.21, 20.90, 17.79, 4.64, 1.53, 1.92, 0.98, 3.13, 5.03, 2.31, 1.42],
    [5.688, 4.465, 0.196, 13.05, 25.14, 20.68, 5.42, 1.52, 1.91, 0.98, 3.68, 5.85, 2.63, 1.46],

    [3.343, 2.624, 0.221, 10.19, 17.56, 16.14, 4.24, 1.75, 2.20, 1.13, 2.48, 4.08, 2.02, 1.48],
    [4.390, 3.446, 0.220, 13.18, 23.43, 20.92, 5.46, 1.73, 2.18, 1.11, 3.24, 5.28, 2.52, 1.53],
    [5.415, 4.251, 0.220, 16.02, 29.33, 25.42, 6.61, 1.72, 2.17, 1.10, 3.97, 6.42, 2.98, 1.57],
    [6.420, 5.040, 0.220, 18.69, 35.26, 29.66, 7.73, 1.71, 2.15, 1.10, 4.65, 7.49, 3.40, 1.61],
    [7.404, 5.812, 0.219, 21.23, 41.23, 33.63, 8.82, 1.69, 2.13, 1.09, 5.36, 8.49, 3.80, 1.64],
    [8.367, 6.568, 0.219, 23.63, 47.24, 37.37, 9.89, 1.68, 2.11, 1.09, 6.03, 9.44, 4.16, 1.68],

    [5.829, 4.576, 0.236, 19.89, 36.05, 31.57, 8.21, 1.85, 2.33, 1.19, 4.59, 7.44, 3.48, 1.67],
    [6.914, 4.822, 0.235, 23.25, 43.33, 36.89, 9.60, 1.83, 2.31, 1.18, 5.41, 8.70, 3.98, 1.70],
    [7.977, 6.262, 0.235, 26.44, 50.65, 41.92, 10.96, 1.82, 2.29, 1.17, 6.21, 9.88, 4.45, 1.74],
    [9.020, 7.081, 0.235, 29.47, 58.02, 46.66, 12.28, 1.81, 2.27, 1.17, 6.98, 11.00, 4.88, 1.78],

    [4.978, 3.907, 0.248, 19.03, 33.35, 30.17, 7.89, 1.96, 2.46, 1.26, 4.13, 6.78, 3.29, 1.70],
    [6.143, 4.822, 0.248, 23.17, 41.73, 36.77, 9.57, 1.94, 2.45, 1.25, 5.08, 8.25, 3.90, 1.74],
    [7.288, 5.721, 0.247, 27.12, 50.14, 43.03, 11.20, 1.93, 2.43, 1.24, 6.00, 9.66, 4.46, 1.78],
    [8.412, 6.603, 0.247, 30.87, 58.60, 48.96, 12.79, 1.92, 2.41, 1.23, 6.88, 10.99, 4.98, 1.82],
    [9.515, 7.469, 0.247, 34.46, 67.11, 54.56, 14.33, 1.90, 2.40, 1.23, 7.75, 12.25, 5.47, 1.85],
    [11.657, 9.151, 0.246, 41.09, 84.31, 64.85, 17.33, 1.88, 2.36, 1.22, 9.39, 14.56, 6.36, 1.93],

    [5.570, 4.372, 0.275, 26.39, 45.74, 41.80, 10.99, 2.18, 2.74, 1.40, 5.14, 8.44, 4.17, 1.86],
    [6.875, 5.397, 0.275, 32.21, 57.21, 51.08, 13.34, 2.16, 2.73, 1.39, 6.32, 10.32, 4.95, 1.91],
    [8.160, 6.406, 0.275, 37.77, 68.73, 59.93, 15.61, 2.15, 2.71, 1.38, 7.48, 12.11, 5.67, 1.95],
    [9.424, 7.398, 0.275, 43.09, 80.29, 68.35, 17.82, 2.14, 2.69, 1.38, 8.59, 13.81, 6.34, 1.99],
    [10.667, 8.373, 0.274, 48.17, 91.92, 76.37, 19.98, 2.12, 2.68, 1.37, 9.68, 15.43, 6.98, 2.03],

    [7.412, 5.818, 0.295, 39.97, 70.56, 63.30, 16.63, 2.33, 2.92, 1.50, 7.32, 11.94, 5.77, 2.04],
    [8.797, 6.905, 0.294, 46.95, 84.55, 74.38, 19.51, 2.31, 2.90, 1.49, 8.64, 14.02, 6.67, 2.07],
    [10.160, 7.976, 0.294, 53.57, 98.71, 84.96, 22.18, 2.30, 2.89, 1.48, 9.93, 16.02, 7.44, 2.11],
    [11.503, 9.030, 0.294, 59.96, 112.97, 95.07, 24.86, 2.28, 2.88, 1.47, 11.20, 17.93, 8.19, 2.15],
    [12.825, 10.068, 0.294, 66.10, 127.30, 104.71, 27.48, 2.27, 2.86, 1.46, 12.43, 19.75, 8.89, 2.18],
    [14.126, 11.089, 0.293, 71.98, 141.71, 113.92, 30.05, 2.26, 2.84, 1.46, 13.64, 21.48, 9.56, 2.22],

    [7.912, 6.211, 0.315, 48.79, 85.36, 77.33, 20.25, 2.48, 3.13, 1.60, 8.34, 13.67, 6.66, 2.15],
    [9.397, 7.376, 0.314, 57.35, 102.50, 90.98, 23.72, 2.47, 3.11, 1.59, 9.87, 16.08, 7.65, 2.19],
    [10.860, 8.525, 0.314, 65.58, 119.70, 104.07, 27.09, 2.46, 3.10, 1.58, 11.37, 18.40, 8.58, 2.23],
    [12.303, 9.658, 0.314, 73.49, 136.97, 116.60, 30.39, 2.44, 3.08, 1.57, 12.83, 20.61, 9.46, 2.27],
    [13.725, 10.774, 0.314, 81.11, 154.31, 128.60, 33.61, 2.43, 3.06, 1.56, 14.25, 22.73, 10.29, 2.31],
    [15.126, 11.874, 0.313, 88.43, 171.74, 140.09, 36.77, 2.42, 3.04, 1.56, 15.64, 24.76, 11.08, 2.35],

    [10.637, 8.350, 0.354, 82.77, 145.87, 131.26, 34.28, 2.79, 3.51, 1.80, 12.61, 20.63, 9.95, 2.44],
    [12.301, 9.656, 0.354, 94.83, 170.30, 150.47, 39.18, 2.78, 3.50, 1.78, 14.54, 23.64, 11.19, 2.48],
    [13.944, 10.946, 0.353, 106.47, 194.80, 168.97, 43.97, 2.76, 3.48, 1.78, 16.42, 26.55, 12.35, 2.52],
    [15.566, 12.219, 0.353, 117.72, 219.39, 186.77, 48.66, 2.75, 3.46, 1.77, 18.27, 29.35, 13.46, 2.56],
    [17.167, 13.476, 0.353, 128.58, 244.07, 203.90, 53.26, 2.74, 3.45, 1.76, 20.07, 32.04, 14.52, 2.59],
    [20.306, 15.940, 0.352, 149.22, 293.76, 236.21, 62.22, 2.71, 3.41, 1.75, 23.57, 37.12, 16.49, 2.67],

    [11.932, 9.366, 0.393, 114.95, 200.07, 181.98, 47.92, 3.10, 3.90, 2.00, 15.68, 25.74, 12.69, 2.67],
    [13.796, 10.830, 0.393, 131.86, 233.54, 208.97, 54.74, 3.09, 3.89, 1.99, 18.10, 29.55, 14.26, 2.71],
    [15.638, 12.276, 0.393, 148.24, 267.09, 235.07, 61.41, 3.08, 3.88, 1.98, 20.47, 33.24, 15.75, 2.76],
    [17.462, 13.708, 0.392, 164.12, 300.73, 260.30, 67.95, 3.07, 3.86, 1.97, 22.79, 36.81, 17.18, 2.80],
    [19.261, 15.120, 0.392, 179.51, 334.48, 284.68, 74.35, 3.05, 3.84, 1.96, 25.06, 40.26, 18.54, 2.84],
    [22.800, 17.898, 0.391, 208.90, 402.34, 330.95, 86.84, 3.03, 3.81, 1.95, 29.48, 46.80, 21.08, 2.91],
    [26.256, 20.611, 0.391, 236.53, 470.75, 374.06, 99.00, 3.00, 3.77, 1.94, 33.73, 52.90, 23.44, 2.99],
    [29.627, 23.257, 0.390, 262.53, 539.80, 414.16, 110.89, 2.98, 3.74, 1.94, 37.82, 58.57, 25.63, 3.06],

    [15.196, 11.928, 0.433, 177.16, 310.64, 280.94, 73.38, 3.41, 4.30, 2.20, 22.05, 36.12, 17.51, 2.96],
    [17.238, 13.535, 0.433, 199.46, 355.20, 316.49, 82.42, 3.40, 4.28, 2.19, 24.95, 40.69, 19.39, 3.01],
    [21.261, 16.690, 0.432, 242.19, 444.65, 384.39, 99.98, 3.38, 4.25, 2.17, 30.60, 49.42, 22.91, 3.09],
    [25.200, 19.782, 0.431, 282.55, 534.60, 448.17, 116.93, 3.35, 4.22, 2.15, 36.05, 57.62, 26.15, 3.16],
    [29.056, 22.809, 0.431, 320.71, 625.16, 508.01, 133.40, 3.32, 4.18, 2.14, 41.31, 65.31, 29.14, 3.24],

    [19.750, 15.504, 0.492, 297.03, 521.01, 470.89, 123.16, 3.88, 4.88, 2.50, 32.52, 53.28, 25.86, 3.37],
    [24.373, 19.133, 0.491, 361.67, 651.93, 573.89, 149.46, 3.85, 4.85, 2.48, 39.97, 64.93, 30.62, 3.45],
    [28.912, 22.696, 0.491, 423.16, 783.42, 671.44, 174.88, 3.83, 4.82, 2.46, 41.17, 75.96, 35.03, 3.53],
    [33.367, 26.193, 0.490, 481.65, 915.61, 763.73, 199.57, 3.80, 4.78, 2.45, 54.16, 86.41, 39.13, 3.61],
    [37.739, 29.625, 0.489, 537.31, 1048.5, 850.98, 223.65, 3.77, 4.75, 2.43, 60.93, 96.28, 42.96, 3.68],

    [27.373, 21.488, 0.551, 514.65, 915.11, 817.27, 212.04, 4.34, 5.46, 2.78, 50.58, 82.56, 39.20, 3.82],
    [32.512, 25.522, 0.551, 603.68, 1099.28, 958.79, 248.57, 4.31, 5.43, 2.76, 59.80, 96.85, 45.02, 3.90],
    [37.567, 29.490, 0.550, 688.81, 1284.22, 1093.56, 284.06, 4.28, 5.40, 2.75, 68.75, 110.47, 50.45, 3.98],
    [42.539, 33.393, 0.549, 770.24, 1470.07, 1221.81, 318.67, 4.26, 5.36, 2.74, 77.46, 123.42, 55.55, 4.06],

    [23.750, 18.644, 0.592, 521.37, 899.55, 827.49, 215.25, 4.69, 5.90, 3.01, 47.36, 78.02, 38.14, 3.99],
    [29.373, 23.058, 0.591, 637.50, 1125.09, 1012.79, 262.21, 4.66, 5.87, 2.99, 58.35, 95.49, 45.51, 4.08],
    [34.912, 27.406, 0.591, 748.85, 1351.21, 1189.94, 307.73, 4.63, 5.84, 2.97, 69.04, 112.19, 52.38, 4.15],
    [40.367, 31.688, 0.590, 855.64, 1578.25, 1359.30, 351.98, 4.60, 5.80, 2.95, 79.45, 128.16, 58.83, 4.23],
    [43.063, 33.804, 0.590, 907.39, 1692.10, 1441.09, 373.69, 4.59, 5.78, 2.95, 84.56, 135.87, 61.90, 4.27],
    [45.739, 35.905, 0.589, 958.08, 1806.21, 1521.02, 395.14, 4.58, 5.77, 2.94, 89.59, 143.40, 64.89, 4.31],

    [31.502, 24.729, 0.630, 779.53, 1365.33, 1237.30, 321.76, 4.98, 6.27, 3.20, 66.70, 109.36, 52.76, 4.31],
    [37.441, 29.391, 0.630, 916.58, 1639.57, 1455.68, 377.49, 4.95, 6.24, 3.18, 78.98, 128.67, 60.74, 4.39],
    [43.296, 33.987, 0.629, 1048.36, 1914.68, 1665.02, 431.70, 4.92, 6.20, 3.16, 90.05, 147.17, 68.24, 4.47],
    [49.067, 38.518, 0.629, 1175.08, 2190.82, 1865.57, 484.59, 4.89, 6.17, 3.14, 102.63, 164.89, 75.31, 4.55],

    [42.241, 33.519, 0.710, 1321.35, 2332.80, 2100.10, 542.61, 5.59, 7.05, 3.58, 100.82, 165.00, 78.41, 4.89],
    [48.896, 38.383, 0.709, 1514.48, 2723.48, 2407.42, 621.53, 5.56, 7.02, 3.56, 116.25, 189.14, 88.38, 4.97],
    [55.467, 43.542, 0.709, 1700.99, 3115.29, 2703.37, 698.60, 5.54, 6.98, 3.55, 131.13, 212.40, 97.83, 5.05],
    [61.055, 48.634, 0.708, 1875.12, 3502.43, 2988.24, 762.01, 5.50, 6.94, 3.51, 145.64, 234.78, 105.14, 5.13],

    [54.642, 42.894, 0.788, 2103.55, 3734.10, 3343.26, 863.83, 6.20, 7.82, 3.98, 144.70, 236.40, 111.82, 5.46],
    [62.013, 48.680, 0.788, 2366.15, 4270.39, 3760.89, 971.41, 6.18, 7.79, 3.96, 163.65, 265.93, 123.96, 5.54],
    [69.301, 54.401, 0.787, 2620.64, 4808.13, 4164.54, 1076.74, 6.15, 7.75, 3.94, 182.22, 294.48, 135.52, 5.62],
    [76.505, 60.056, 0.787, 2867.30, 5347.51, 4554.55, 1180.04, 6.12, 7.72, 3.93, 200.42, 322.06, 146.55, 5.69],
    [90.661, 71.168, 0.785, 3338.25, 6457.16, 5294.97, 1381.53, 6.07, 7.64, 3.90, 236.17, 374.41, 166.65, 5.87],

    [68.664, 53.901, 0.866, 3187.36, 5681.62, 5063.73, 1310.99, 6.81, 8.59, 4.37, 199.55, 325.51, 153.81, 6.03],
    [76.752, 60.250, 0.866, 3534.30, 6395.93, 5615.32, 1453.27, 6.79, 8.55, 4.35, 222.37, 360.97, 168.29, 6.11],
    [84.756, 66.533, 0.865, 3871.49, 7112.04, 6150.08, 1592.90, 6.76, 8.52, 4.34, 244.77, 395.34, 182.16, 6.18],
    [92.676, 72.751, 0.865, 4199.23, 7830.19, 6668.37, 1730.10, 6.73, 8.48, 4.32, 266.78, 428.66, 195.45, 6.26],
    [100.512, 78.902, 0.861, 4517.83, 8550.57, 7170.55, 1865.11, 6.70, 8.45, 4.31, 288.39, 460.94, 208.21, 6.33],
    [108.264, 84.987, 0.861, 4827.58, 9273.39, 7656.98, 1998.17, 6.68, 8.41, 4.30, 309.62, 492.21, 220.49, 6.41],

    [87.842, 68.956, 0.985, 5268.22, 9379.11, 8369.04, 2167.41, 7.74, 9.76, 4.97, 290.12, 473.42, 224.03, 6.84],
    [97.045, 76.180, 0.984, 5779.34, 10426.97, 9181.94, 2376.74, 7.72, 9.73, 4.95, 319.66, 519.41, 242.85, 6.92],
    [115.201, 90.433, 0.983, 6763.93, 12529.74, 10742.67, 2785.19, 7.66, 9.66, 4.92, 377.34, 607.70, 278.38, 7.07],
    [124.154, 97.461, 0.982, 7238.08, 13585.18, 11491.33, 2984.84, 7.63, 9.62, 4.90, 406.50, 650.06, 295.19, 7.15],
    [133.022, 104.422, 0.982, 7700.60, 14643.62, 12219.39, 3181.81, 7.61, 9.58, 4.89, 433.22, 691.23, 311.42, 7.22],
    [141.807, 111.318, 0.981, 8151.80, 15705.30, 12927.26, 3376.34, 7.58, 9.55, 4.88, 460.51, 731.28, 327.12, 7.30],
    [150.508, 118.149, 0.981, 8592.01, 16770.41, 13615.32, 3568.71, 7.56, 9.51, 4.87, 487.39, 770.20, 342.33, 7.37],
    [163.402, 128.271, 0.980, 9232.44, 18374.96, 14611.16, 3853.12, 7.52, 9.46, 4.86, 526.97, 826.53, 364.30, 7.48]
  ]
}