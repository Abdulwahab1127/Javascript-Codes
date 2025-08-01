const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    //Loop For random Color Generating
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let colorhandler;
  const startChangingColor = function () {
    let generator = function () {
      document.body.style.backgroundColor = randomColor();
    };
    if(!colorhandler){
    colorhandler = setInterval(generator, 1000);
    }

};
  const stopChangingColor = function () {
    clearInterval(colorhandler);
    //Good Practice to Clear Space
    colorhandler = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  