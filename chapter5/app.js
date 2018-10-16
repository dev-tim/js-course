let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, dir: '' };
let clicked = false;
const getMouse = (e) => {
  mouse = {
    x: e.clientX || e.pageX || e.touches[0].pageX || 0 || window.innerWidth / 2,
    y: e.clientY || e.pageX || e.touches[0].pageY || 0 || window.innerHeight / 2,
    dir: (getMouse.x > e.clientX) ? 'left' : 'right'
  }
};

['mousemove', 'touchstart', 'touchmove'].forEach(e => {
  window.addEventListener(e, getMouse);
});
window.addEventListener('mousedown', (e) => {
  e.preventDefault();
  clicked = true;
});
window.addEventListener('mouseup', () => {
  clicked = false;
});

class MouseFollow {
  constructor (options) {
    Object.assign(this, options);
    
    this.el = document.querySelector('#mouse');
    this.pos = {
      x: 0,
      y: 0
    }
  }
  
  follow() {
    this.distX = mouse.x - this.pos.x;
    this.distY = mouse.y - this.pos.y;
    
    this.pos.x += this.distX / 5;
    this.pos.y += this.distY / 5;

    this.el.style.transform = 'translate(' + this.pos.x + 'px, ' + this.pos.y + 'px)';
  }
}


function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const cursor = new MouseFollow();

const render = () => {
  requestAnimationFrame(render);
  cursor.follow();
}
render();
