import barba from "@barba/core";
import gsap from "gsap";

import "/assets/styles/main.pcss";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
});

const delay = (n) => {
  n = n || 200;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  debug: true,
  timeout: 20000,
  sync: false,
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        data.current.container.style.position = "absolute";
        data.current.container.style.top = 0;
        data.current.container.style.left = 0;
        data.current.container.style.width = "100%";

        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.3,
        });
      },
      async enter(data) {
        const done = this.async();
        const dom = data.next.container;
        const elHeroAbout = dom.querySelector("#heroAbout");

        gsap.set(elHeroAbout, { opacity: 0, y: -100 });

        gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.fromTo(elHeroAbout, { opacity: 0, y: -100 }, { opacity: 0.8, y: 0, duration: 1, ease: "elastic" });
            done();
          },
        });

        // await delay(1500);
      },
    },
  ],
});

// const done = this.async();

// pageTransition();
// await delay(1500);
// done();
