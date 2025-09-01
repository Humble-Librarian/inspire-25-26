window.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const secondSection = document.querySelector('.second');
    const thirdSection = document.querySelector('.third');
  
    const observerOptions = {
      root: null,
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === secondSection && entry.isIntersecting) {
          heroSection.classList.add('scrolled');
          secondSection.classList.add('loaded');
          secondSection.classList.remove('scrolled-out');
          thirdSection.classList.remove('loaded');
        }
        if (entry.target === heroSection && entry.isIntersecting) {
          heroSection.classList.remove('scrolled');
          secondSection.classList.remove('loaded');
          secondSection.classList.remove('scrolled-out');
        }
        if (entry.target === thirdSection && entry.isIntersecting) {
          secondSection.classList.add('scrolled-out');
          secondSection.classList.remove('loaded');
          thirdSection.classList.add('loaded');
        }
      });
    }, observerOptions);
  
    observer.observe(heroSection);
    observer.observe(secondSection);
    observer.observe(thirdSection);
    heroSection.classList.add('loaded');
  
    // --- Section 1: Hero Canvas Animation (cometCanvas) - OPTIMIZED ---
    const cometCanvas = document.getElementById('cometCanvas');
    if (cometCanvas) {
      const ctx1 = cometCanvas.getContext('2d', { alpha: true });
      let comets = [];
      let stars = [];
      let animationFrameId1;
      let isHeroVisible = true;
      
      // Performance optimization - only animate when visible
      const checkVisibility = () => {
        const heroSection = document.querySelector('.hero');
        isHeroVisible = heroSection.classList.contains('loaded') && !heroSection.classList.contains('scrolled');
      };
  
      class Star {
        constructor() {
          this.x = Math.random() * cometCanvas.width;
          this.y = Math.random() * cometCanvas.height;
          this.baseRadius = Math.random() * 1.5 + 0.5; // Reduced size
          this.baseAlpha = Math.random() * 0.7 + 0.3;
          this.pulseSpeed = Math.random() * 0.0005 + 0.0002; // Slower pulse
          this.pulseOffset = Math.random() * Math.PI * 2;
          const colors = ['rgba(255, 255, 255,', 'rgba(200, 220, 255,', 'rgba(255, 255, 220,'];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
  
        draw() {
          const pulseValue = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset);
          const currentAlpha = this.baseAlpha + (pulseValue * this.baseAlpha * 0.3);
          const currentRadius = this.baseRadius + (pulseValue * this.baseRadius * 0.2);
          
          // Removed shadow for better performance
          ctx1.beginPath();
          ctx1.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
          ctx1.fillStyle = this.color + `${currentAlpha})`;
          ctx1.fill();
        }
      }
  
      class Comet1 {
        constructor() {
          this.reset();
        }
  
        reset() {
          this.radius = Math.random() * 1.2 + 0.3; // Smaller radius
          this.color = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
          this.tailLength = Math.random() * 60 + 30; // Shorter tail
          this.speed = (Math.random() * 2) + 1.5; // Slightly slower
          this.delay = Math.random() * 100 + 50;
          this.x = Math.random() * cometCanvas.width;
          this.y = -50;
          const targetX = Math.random() * cometCanvas.width;
          const targetY = cometCanvas.height + 50;
          const angle = Math.atan2(targetY - this.y, targetX - this.x);
          this.dx = Math.cos(angle) * this.speed;
          this.dy = Math.sin(angle) * this.speed;
        }
  
        draw() {
          if (this.delay > 0) return;
          
          // Removed shadow for better performance
          const tailX = this.x - (this.dx / this.speed) * this.tailLength;
          const tailY = this.y - (this.dy / this.speed) * this.tailLength;
          const gradient = ctx1.createLinearGradient(this.x, this.y, tailX, tailY);
          const cometColor = this.color.replace(')', ', 1)');
          const transparentColor = this.color.replace(')', ', 0)');
          gradient.addColorStop(0, cometColor);
          gradient.addColorStop(1, transparentColor);
          ctx1.beginPath();
          ctx1.moveTo(this.x, this.y);
          ctx1.lineTo(tailX, tailY);
          ctx1.strokeStyle = gradient;
          ctx1.lineWidth = this.radius;
          ctx1.stroke();
          ctx1.beginPath();
          ctx1.fillStyle = cometColor;
          ctx1.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
          ctx1.fill();
        }
  
        update() {
          if (this.delay > 0) {
            this.delay--;
            return;
          }
          this.x += this.dx;
          this.y += this.dy;
          const buffer = 100;
          if (this.x < -buffer || this.x > cometCanvas.width + buffer || this.y < -buffer || this.y > cometCanvas.height + buffer) {
            this.reset();
          }
        }
      }
  
      const init1 = () => {
        cometCanvas.width = window.innerWidth;
        cometCanvas.height = window.innerHeight;
        comets = [];
        const numberOfComets = Math.min(3, Math.floor(window.innerWidth / 400)); // Reduced comets, responsive to screen size
        for (let i = 0; i < numberOfComets; i++) {
          comets.push(new Comet1());
        }
        stars = [];
        // Reduced star count significantly
        const numberOfStars = Math.min(100, Math.floor((cometCanvas.width * cometCanvas.height) / 10000));
        for (let i = 0; i < numberOfStars; i++) {
          stars.push(new Star());
        }
      };
  
      const animate1 = () => {
        if (!isHeroVisible) {
          // Skip animation if section not visible
          animationFrameId1 = requestAnimationFrame(animate1);
          return;
        }
        
        ctx1.clearRect(0, 0, cometCanvas.width, cometCanvas.height);
        stars.forEach(star => {
          star.draw();
        });
        comets.forEach(comet => {
          comet.update();
          comet.draw();
        });
        animationFrameId1 = requestAnimationFrame(animate1);
      };
  
      init1();
      checkVisibility();
      animationFrameId1 = requestAnimationFrame(animate1);
      
      // Optimize by checking visibility on scroll
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', init1);
    }
  
    // --- Section 2: Sky Canvas Animation (skyCanvas) - OPTIMIZED ---
    const skyCanvas = document.getElementById('skyCanvas');
    if (skyCanvas) {
      const ctx2 = skyCanvas.getContext('2d', { alpha: true });
      let comets2 = [];
      // Drastically reduced particle count for better performance
      const COMET_COUNT = Math.min(200, Math.floor((window.innerWidth * window.innerHeight) / 10000));
      let poleX, poleY;
      let animationFrameId2;
      let isSecondVisible = false;
      
      // Performance optimization - only animate when visible
      const checkVisibility2 = () => {
        const secondSection = document.querySelector('.second');
        isSecondVisible = secondSection.classList.contains('loaded') && !secondSection.classList.contains('scrolled-out');
      };
  
      class Comet2 {
        constructor() {
          this.radius = Math.random() * (Math.max(window.innerWidth, window.innerHeight) * 0.8); // Reduced radius
          this.angle = Math.random() * Math.PI * 2;
          this.speed = ((Math.random() * 0.006) + 0.002) * 0.25; // Slightly reduced speed
          this.x = 0;
          this.y = 0;
          this.history = [];
          this.tailLength = Math.floor(Math.random() * 10) + 5; // Much shorter tail
          const brightness = Math.random() * 155 + 100;
          this.color = `rgb(${brightness}, ${brightness + 20}, 255)`;
          this.size = Math.random() * 0.6 + 0.2; // Smaller size
          this.skipFrames = Math.floor(Math.random() * 3); // Skip frames for performance
          this.frameCount = 0;
        }
  
        update() {
          // Only update position every few frames for better performance
          this.frameCount++;
          if (this.frameCount % (this.skipFrames + 1) !== 0) return;
          
          // Simplified history tracking
          if (this.history.length >= this.tailLength) {
            this.history.shift();
          }
          this.history.push({ x: this.x, y: this.y });
          
          this.angle += this.speed;
          this.x = poleX + Math.cos(this.angle) * this.radius;
          this.y = poleY + Math.sin(this.angle) * this.radius;
        }
  
        draw() {
          if (this.history.length > 1) {
            // Draw only every other point in history for better performance
            for (let i = 0; i < this.history.length - 1; i += 2) {
              const segment = this.history[i];
              const nextSegment = this.history[i + 1] || this.history[this.history.length - 1];
              
              // Simplified rendering - no gradients for better performance
              const opacity = (i / this.history.length) * 0.6;
              ctx2.beginPath();
              ctx2.moveTo(segment.x, segment.y);
              ctx2.lineTo(nextSegment.x, nextSegment.y);
              ctx2.strokeStyle = `rgba(200, 200, 255, ${opacity})`;
              ctx2.lineWidth = this.size;
              ctx2.stroke();
            }
          }
          
          // Draw the comet head
          ctx2.beginPath();
          ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx2.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx2.fill();
        }
      }
  
      const init2 = () => {
        skyCanvas.width = window.innerWidth;
        skyCanvas.height = window.innerHeight;
        poleX = skyCanvas.width / 100;
        poleY = skyCanvas.height / 100;
        comets2 = [];
        
        // Create comets with batch processing
        for (let i = 0; i < COMET_COUNT; i++) {
          comets2.push(new Comet2());
        }
        
        // Initialize positions
        comets2.forEach(c => {
          c.x = poleX + Math.cos(c.angle) * c.radius;
          c.y = poleY + Math.sin(c.angle) * c.radius;
          
          // Simplified history initialization
          c.history.push({ x: c.x, y: c.y });
          for (let i = 1; i < c.tailLength; i++) {
            const prevAngle = c.angle - (c.speed * i * 2);
            const prevX = poleX + Math.cos(prevAngle) * c.radius;
            const prevY = poleY + Math.sin(prevAngle) * c.radius;
            c.history.push({ x: prevX, y: prevY });
          }
        });
      };
  
      const animate2 = () => {
        if (!isSecondVisible) {
          // Skip animation if section not visible
          animationFrameId2 = requestAnimationFrame(animate2);
          return;
        }
        
        ctx2.clearRect(0, 0, skyCanvas.width, skyCanvas.height);
        
        // Process in batches for better performance
        for (let i = 0; i < comets2.length; i++) {
          comets2[i].update();
          comets2[i].draw();
        }
        
        animationFrameId2 = requestAnimationFrame(animate2);
      };
  
      init2();
      checkVisibility2();
      animationFrameId2 = requestAnimationFrame(animate2);
      
      // Optimize by checking visibility on scroll
      window.addEventListener('scroll', checkVisibility2);
      window.addEventListener('resize', () => {
        // Throttle resize events
        if (window.resizeTimeout) {
          clearTimeout(window.resizeTimeout);
        }
        window.resizeTimeout = setTimeout(init2, 200);
      });
    }
  });