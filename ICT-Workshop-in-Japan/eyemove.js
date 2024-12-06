class lookat_Thai {
    constructor(target){
      
      this.gbcr = target.getBoundingClientRect();
      
      this.el = {
        target: target,
        x: this.gbcr.x,
        y: this.gbcr.y,
        w: this.gbcr.width,
        h: this.gbcr.height,
      }
  
      this.attraction = 7;
  
      this.mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      }
  
      window.addEventListener('mousemove', this.mouseMove.bind(this));
      this.onRequestAnimationFrame();
    }
  
    mouseMove(e) {
      this.mouse.x = gsap.utils.mapRange(this.el.x, this.el.x + this.el.w, -this.attraction, this.attraction, e.clientX);
      this.mouse.y = gsap.utils.mapRange(this.el.y, this.el.y + this.el.h, -this.attraction, this.attraction, e.clientY);
    }
  
    onRequestAnimationFrame() {
      this.mouse.cx = gsap.utils.interpolate(this.mouse.cx, this.mouse.x, 0.1);
      this.mouse.cy = gsap.utils.interpolate(this.mouse.cy, this.mouse.y, 0.1);
      gsap.set(this.el.target, {
        x: this.mouse.cx,
        y: this.mouse.cy
      });
      
      requestAnimationFrame(() => { this.onRequestAnimationFrame() });
    }
  }
  new lookat_Thai(document.querySelector('.fv-T-eyes'));


  class lookat_Japan {
    constructor(target){
      
      this.gbcr = target.getBoundingClientRect();
      
      this.el = {
        target: target,
        x: this.gbcr.x,
        y: this.gbcr.y,
        w: this.gbcr.width,
        h: this.gbcr.height,
      }
  
      this.attraction = 7;
  
      this.mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      }
  
      window.addEventListener('mousemove', this.mouseMove.bind(this));
      this.onRequestAnimationFrame();
    }
  
    mouseMove(e) {
      this.mouse.x = gsap.utils.mapRange(this.el.x, this.el.x + this.el.w, -this.attraction, this.attraction, e.clientX);
      this.mouse.y = gsap.utils.mapRange(this.el.y, this.el.y + this.el.h, -this.attraction, this.attraction, e.clientY);
    }
  
    onRequestAnimationFrame() {
      this.mouse.cx = gsap.utils.interpolate(this.mouse.cx, this.mouse.x, 0.1);
      this.mouse.cy = gsap.utils.interpolate(this.mouse.cy, this.mouse.y, 0.1);
      gsap.set(this.el.target, {
        x: this.mouse.cx,
        y: this.mouse.cy
      });
      
      requestAnimationFrame(() => { this.onRequestAnimationFrame() });
    }
  }
  new lookat_Japan(document.querySelector('.fv-J-eyes'));


  class lookat_Korea {
    constructor(target){
      
      this.gbcr = target.getBoundingClientRect();
      
      this.el = {
        target: target,
        x: this.gbcr.x,
        y: this.gbcr.y,
        w: this.gbcr.width,
        h: this.gbcr.height,
      }
  
      this.attraction = 7;
  
      this.mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      }
  
      window.addEventListener('mousemove', this.mouseMove.bind(this));
      this.onRequestAnimationFrame();
    }
  
    mouseMove(e) {
      this.mouse.x = gsap.utils.mapRange(this.el.x, this.el.x + this.el.w, -this.attraction, this.attraction, e.clientX);
      this.mouse.y = gsap.utils.mapRange(this.el.y, this.el.y + this.el.h, -this.attraction, this.attraction, e.clientY);
    }
  
    onRequestAnimationFrame() {
      this.mouse.cx = gsap.utils.interpolate(this.mouse.cx, this.mouse.x, 0.1);
      this.mouse.cy = gsap.utils.interpolate(this.mouse.cy, this.mouse.y, 0.1);
      gsap.set(this.el.target, {
        x: this.mouse.cx,
        y: this.mouse.cy
      });
      
      requestAnimationFrame(() => { this.onRequestAnimationFrame() });
    }
  }
  new lookat_Korea(document.querySelector('.fv-K-eyes'));


  class lookat_India {
    constructor(target){
      
      this.gbcr = target.getBoundingClientRect();
      
      this.el = {
        target: target,
        x: this.gbcr.x,
        y: this.gbcr.y,
        w: this.gbcr.width,
        h: this.gbcr.height,
      }
  
      this.attraction = 7;
  
      this.mouse = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0
      }
  
      window.addEventListener('mousemove', this.mouseMove.bind(this));
      this.onRequestAnimationFrame();
    }
  
    mouseMove(e) {
      this.mouse.x = gsap.utils.mapRange(this.el.x, this.el.x + this.el.w, -this.attraction, this.attraction, e.clientX);
      this.mouse.y = gsap.utils.mapRange(this.el.y, this.el.y + this.el.h, -this.attraction, this.attraction, e.clientY);
    }
  
    onRequestAnimationFrame() {
      this.mouse.cx = gsap.utils.interpolate(this.mouse.cx, this.mouse.x, 0.1);
      this.mouse.cy = gsap.utils.interpolate(this.mouse.cy, this.mouse.y, 0.1);
      gsap.set(this.el.target, {
        x: this.mouse.cx,
        y: this.mouse.cy
      });
      
      requestAnimationFrame(() => { this.onRequestAnimationFrame() });
    }
  }
  new lookat_India(document.querySelector('.fv-I-eyes'));




  