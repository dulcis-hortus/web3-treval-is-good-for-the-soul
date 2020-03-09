var index = {
  "aColor" : function aColor(color) {
    $('a').css({"color":color})
  },
  "ulColor" : function ulColor(color) {
    $('ul').css({"color": color})
  }
}         // 나중에 할 것-> li와 h1의 분리

var body = {
  "BackgrondColor" : function backColor(color){
    $('body').css({"backgroundColor" : color})
  }
}

function modeChange(self) {
  if (self.value === 'night') {
    body.BackgrondColor('black');
    index.aColor('skyblue');
    index.ulColor('skyblue');
    self.value = 'day';
  } else {
    body.BackgrondColor('white');
    index.aColor('black');
    index.ulColor('black');
    self.value = 'night';
  }
}
