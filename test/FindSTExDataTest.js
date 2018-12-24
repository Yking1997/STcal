window.onload = function() {
  let testObj = {
    //let calST = new CalculateteModule();
    //let calST = CalculateModule();
    AI1: {
      'STCode': 'h08eqAI',
      'hig': 25,
      'tic': 3
    },
    AI2: {
      STCode: 'h08unAI',
      hig: 30,
      bre: 20,
      tic: 3
    },
    AI3: {
      STCode: 'h08eqAI',
      hig: 300,
      tic: 10
    },
    HB: {
      STCode: 'h10HB',
      hig: 100,
      bre: 100,
      dic: 6,
      tic: 8,
      rad: 8
    },
    CS: {
      STCode: 'h08CS',
      hig: 100,
      bre: 48,
      dic: 5.3,
      tic: 8.5,
      rad: 8.5
    },
    SS: {
      STCode: 'h10SS',
      dad: 100,
      tic: 8
    },
    error: {
      bre: 0,
      hig: 0
    }
  };

  let testArray = [{
      'STCode': 'cunRT',
      'hig': 40,
      'bre': 20,
      'tic': 3
    },
    {
      STCode: 'h08RB2',
      dad: 100
    },
    {
      'STCode': 'h08eqAI',
      'hig': 25,
      'tic': 5
    },
  ];

  function test(obj) {
    let num = 0;
    for (let key in obj) {
      num++;
      let result, str;

      document.write('+++++++++++</br>');
      document.write(`对象第${num}次运行</br>`);
      document.write(`程序运行的参数：</br>`);
      str = JSON.stringify(obj[key]);
      document.write(str + '</br>')
      result = FindSTExData(obj[key]);
      str = JSON.stringify(result);
      document.write(`运行第${num}次结果：</br>`);
      document.write(str + '</br>');
      document.write('-----------</br>');

    }
  }
  test(testObj);
  test(testArray);

}
