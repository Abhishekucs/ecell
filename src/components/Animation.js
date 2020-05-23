import gsap from 'gsap';

export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 1,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  };

export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
      duration: 1,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2
      }
    });
};

export const staggerText = (node1, node2, node3, node4, node5, node6) => {
    gsap.fromTo([node1, node2, node3, node4, node5, node6], {opacity: 0}, {
      duration: 1,
      y: 100,
      opacity:1,
      delay: 0.5,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  };

export const staggerTextClose = (node1, node2, node3, node4, node5, node6) => {
    gsap.to([node1, node2, node3, node4, node5, node6], {
      duration: 0.5,
      y: 0,
      opacity:0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  };

  export const landingText = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      y: 100,
      opacity:0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  }
  