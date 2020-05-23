const navButtons = document.querySelectorAll(".nav-button");
const navLinks = document.querySelector(".nav-links");
const navOpen = document.querySelector(".nav-open");
const aboutContent = document.querySelector(".about");
const contactContent = document.querySelector(".contact");
const videoContent = document.querySelector(".video");

// define what you want to move, the time and the properties
// const tween = TweenLite.to(object, time, {animate})

// this is a single animation
// const tween = TweenLite.to('.cover', 1, {
//   width: '40%'
// });

const tl = new TimelineLite({ paused: true, reversed: true }); // reversed propety is so it works the first time

tl.to(".cover", 1, {
  right: "40%",
  ease: Power2.easeOut,
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut,
    },
    "-= 0.5" // number starts the second animation half a second (0.5s) before first one finishes
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      //fromTo lets us specify order, second param gives speed
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
      },
    }
  );

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

function removePreviousSelection(e) {
  navButtons.forEach(function (v, i) {
    if (v.classList.length > 1 && v !== e.target) {
      v.classList.remove("active");
    }
  });
}

function toggleActiveSelection(e) {
  if (!e.target.classList.contains("active") && e.target.classList.contains("nav-button")) {
    e.target.classList.add("active");
    tl.play();
    // toggleTween(tl);
  } else {
    e.target.classList.remove("active");
    tl.reverse();
    // toggleTween(tl);
  }
}

//event listeners

navLinks.addEventListener("click", (e) => {
  // the if check prevents animation from running once already animating (not necessary)
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  removePreviousSelection(e);

  if (e.target.innerText.toLowerCase().indexOf("about") === 0) {
    aboutContent.style.display = "inline-block";
    contactContent.style.display = "none";
    videoContent.style.display = "none";

  } else if (e.target.innerText.toLowerCase().indexOf("contact") === 0) {
    aboutContent.style.display = "none";
    contactContent.style.display = "inline-block";
    videoContent.style.display = "none";

    //TODO: work on better implementation
  } else if (e.target.innerText.toLowerCase().indexOf("video") === 0) {
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
    videoContent.style.display = "inline-block";
  }

  toggleActiveSelection(e);
});
