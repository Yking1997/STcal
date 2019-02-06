//var baseMap = (baseMap) ? baseMap : {};
var h17TN = {
  symbol: 'TN ',
  dataPar: ['hig', 'bre', 'dic', 'tic', 'rad'],
  data: [],
  base: [
    [50, 50, 5, 7, 8],
    [62.5, 60, 6, 8, 8],
    [75, 75, 5, 7, 8],
    [85.5, 89, 4, 6, 8],
    [87.5, 90, 5, 8, 8],
    [99, 99, 4.5, 7, 8],
    [100, 100, 5.5, 8, 8],
    [124, 124, 5, 8, 8],
    [125, 125, 6, 9, 8],
    [149, 149, 5.5, 8, 13],
    [150, 150, 6.5, 9, 13],
    [173, 174, 6, 9, 13],
    [175, 175, 7, 11, 13],
    [198, 199, 7, 11, 13],
    [200, 200, 8, 13, 13],
    [223, 150, 7, 12, 13],
    [225, 151, 8, 14, 13],
    [223, 199, 8, 12, 13],
    [225, 200, 9, 14, 13],
    [235, 150, 7, 13, 13],
    [237.5, 151.5, 8.5, 15.5, 13],
    [241, 153.5, 10.5, 19, 13],
    [246, 150, 7, 12, 13],
    [250, 152, 9, 16, 13],
    [252, 153, 10, 18, 13],
    [248, 199, 9, 14, 13],
    [250, 200, 10, 16, 13],
    [253, 201, 11, 19, 13],
    [273, 199, 9, 14, 13],
    [275, 200, 10, 16, 13],
    [298, 199, 10, 15, 13],
    [300, 200, 11, 17, 13],
    [303, 201, 12, 20, 13],
    [312.5, 198.5, 13.5, 17.5, 13],
    [315, 200, 15, 20, 13],
    [319, 202, 17, 24, 13],
    [323, 299, 12, 18, 18],
    [325, 300, 13, 20, 18],
    [327, 301, 14, 22, 18],
    [346, 300, 13, 20, 18],
    [350, 300, 13, 24, 18],
    [396, 300, 14, 22, 18],
    [400, 300, 14, 26, 18],
    [445, 299, 15, 23, 18],
    [450, 300, 16, 28, 18],
    [456, 302, 18, 34, 18]
  ],
  exDataPar: ['are', 'wg1', 'Sare', 'Ix', 'Iy', 'ix', 'iy', 'Wx', 'Wy', 'Cx'],
  exData: [
    [5.920, 4.65, 0.193, 11.8, 7.39, 1.41, 1.11, 3.18, 2.950, 1.28],
    [8.340, 6.55, 0.238, 27.5, 14.6, 1.81, 1.32, 5.96, 4.85, 1.64],
    [8.920, 7.00, 0.293, 42.6, 24.7, 2.18, 1.66, 7.46, 6.59, 1.79],
    [8.790, 6.90, 0.342, 53.7, 35.3, 2.47, 2.00, 8.02, 7.94, 1.86],
    [11.44, 8.98, 0.348, 70.6, 48.7, 2.48, 2.06, 10.4, 10.8, 1.93],
    [11.34, 8.90, 0.389, 93.5, 56.7, 2.87, 2.23, 12.1, 11.5, 2.17],
    [13.33, 10.5, 0.393, 114, 66.9, 2.92, 2.23, 14.8, 13.4, 2.31],
    [15.99, 12.6, 0.489, 207, 127, 3.59, 2.82, 21.3, 20.5, 2.66],
    [18.48, 14.5, 0.493, 248, 147, 3.66, 2.81, 25.6, 23.5, 2.81],
    [20.40, 16.0, 0.585, 393, 221, 4.39, 3.29, 33.8, 29.7, 3.26],
    [23.39, 18.4, 0.589, 464, 254, 4.45, 3.29, 40.0, 33.8, 3.41],
    [26.22, 20.6, 0.683, 679, 396, 5.08, 3.88, 50.0, 45.5, 3.72],
    [31.45, 24.7, 0.689, 814, 492, 5.08, 3.95, 59.3, 56.2, 3.76],
    [35.70, 28.0, 0.783, 1190, 723, 5.77, 4.50, 76.4, 72.7, 4.20],
    [41.68, 32.7, 0.789, 1390, 868, 5.78, 4.56, 88.6, 86.8, 4.26],
    [33.49, 26.3, 0.735, 1570, 338, 6.84, 3.17, 93.7, 45.1, 5.54],
    [38.74, 30.4, 0.741, 1830, 403, 6.87, 3.22, 108, 53.4, 5.62],
    [41.48, 32.6, 0.833, 1870, 789, 6.71, 4.36, 109, 79.3, 5.15],
    [47.71, 37.5, 0.839, 2150, 935, 6.71, 4.42, 124, 93.5, 5.19],
    [35.76, 28.1, 0.759, 1850, 367, 7.18, 3.20, 104, 48.9, 7.50],
    [43.07, 33.8, 0.767, 2270, 451, 7.25, 3.23, 128, 59.5, 7.57],
    [53.20, 41.8, 0.778, 2860, 575, 7.33, 3.28, 160, 75.0, 7.67],
    [35.10, 27.6, 0.781, 2060, 339, 7.66, 3.10, 113, 45.1, 6.36],
    [46.10, 36.2, 0.793, 2750, 170, 7.71, 3.19, 149, 61.9, 6.53],
    [51.66, 40.6, 0.799, 3100, 540, 7.74, 3.23, 167, 70.5, 6.62],
    [49.64, 39.0, 0.883, 2820, 921, 7.54, 4.30, 150, 92.6, 5.97],
    [56.12, 44.1, 0.889, 3200, 1070, 7.54, 4.36, 169, 107, 6.03],
    [64.65, 50.8, 0.897, 3660, 1290, 7.52, 4.46, 189, 128, 6.00],
    [51.89, 40.7, 0.933, 3690, 921, 8.43, 4.21, 180, 92.6, 6.85],
    [58.62, 46.0, 0.939, 4180, 1070, 8.44, 4.27, 203, 107, 6.89],
    [58.87, 46.2, 0.983, 5150, 988, 9.35, 4.09, 235, 99.3, 792],
    [65.85, 51.7, 0.989, 5770, 1140, 9.35, 4.15, 262, 114, 7.95],
    [74.88, 58.8, 0.997, 6530, 1360, 9.33, 4.25, 291, 135, 7.88],
    [75.28, 59.1, 1.01, 7460, 1150, 9.95, 3.90, 338, 116, 9.15],
    [84.97, 66.7, 1.02, 8470, 1340, 9.98, 3.97, 380, 134, 9.21],
    [99.35, 78.0, 1.03, 9960, 1160, 10.0, 4.08, 440, 165, 9.26],
    [91.81, 72.1, 1.23, 8570, 4020, 9.66, 6.61, 344, 269, 7.36],
    [101.0, 79.3, 1.23, 9430, 4510, 9.66, 6.67, 376, 300, 7.40],
    [110.3, 86.59, 1.24, 10300, 5010, 9.66, 6.73, 408, 333, 7.45],
    [103.8, 81.5, 1.28, 11300, 4510, 10.4, 6.59, 424, 301, 8.09],
    [115.8, 90.9, 1.28, 12000, 5410, 10.2, 6.83, 438, 361, 7.63],
    [119.8, 94.0, 1.38, 17600, 4960, 12.1, 6.43, 592, 331, 9.78],
    [131.8, 103, 1.38, 18700, 5860, 11.9, 6.66, 610, 391, 9.27],
    [133.5, 105, 1.47, 25900, 5140, 13.9, 6.20, 789, 344, 11.7],
    [152.9, 120, 1.48, 29100, 6320, 13.8, 6.42, 865, 421, 11.4],
    [180.0, 141, 1.50, 34100, 7830, 13.8, 6.59, 997, 518, 11.3]
  ]
}

export {h17TN};