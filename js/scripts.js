//Panets orbit animation
gsap.to('#planets', {  
    rotation: 360,
    duration: 200,
    transformOrigin: '50% 50%',
    repeat: -1,
    repeatDelay:0,
  });

  //Stars rotation animation
  gsap.to('#stars', {
      rotation: -360,
      duration: 250,
      transformOrigin: '50% 50%',
      repeat: -1,
      repeatDelay:0,
  });

  //Planet rotate animation
  gsap.to('.planet', {
      rotation: 600,
      duration: 250,
      transformOrigin: '50% 50%',
      repeat: -1,
      repeatDelay:0,
  });
  
  //Set initial google glow state
  gsap.set('.googleGlow', {
    filter:"blur(2px)"
  });


  //Setup google glow animation
  gsap.to('.googleGlow', {
    duration: 6,
    filter:"blur(10px)",
    repeat: -1, 
    repeatDelay:0,
    ease:Power4.easeInOut,
    yoyo:true
}); 
  

//Set up planets glowing animation
  gsap.to('.planetGlow', {
      duration: 3,
      filter:"blur(12px)",
      repeat: -1, 
      repeatDelay:0,
      ease:Power4.easeInOut,
      yoyo:true
  }); 



//Setup Animation for google text floating 

function resetRandom(){
    gsap.to(".float", {
    y:gsap.utils.random(-50, -20),
    rotation: gsap.utils.random(20, 75),
    ease: "sine",
    yoyo:true,
    duration: 5,
    transformOrigin: '50% 50%',
    repeat: 1,
    stagger: 0.6,
      onComplete: resetRandom
});
}

resetRandom();

