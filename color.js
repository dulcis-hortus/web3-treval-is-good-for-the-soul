var anker = {
  "setColor" : function aChange(color) {
    document.querySelector('ul').style.color = color;
    alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}         // 나중에 할 것-> li와 h1의 분리
var body = {
  "setBackgrondColor" : function backColor(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function modeChange(self) {
  if (self.value === 'night') {
    body.setBackgrondColor('black');
    anker.setColor('skyblue');
    self.value = 'day';
  } else {
    body.setBackgrondColor('white');
    anker.setColor('black');
    self.value = 'night';
  }
}
