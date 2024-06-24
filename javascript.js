
let con = gsap.timeline();


con.from("nav",{
  opacity: 0,
  y:-120
})

con.from("#coconate",{
  opacity:0,
  x:20
})


con.from("#leaves",{
  opacity:0,
  x:-20
})

con.from("#orange-cut",{
  opacity:0,
  x:-180,
  rotate: "-120deg"
})



con.from("#fanta",{
  opacity:0,
  scale: 0
})


con.from("#orange",{
  opacity:0,
  x:180,

})



let tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page2",
      start: "0% 93%",
      end: "50% 50%",
      scrub: true,


    },
})



tl.to("#fanta",{
    top: "115%",
    left: "27%"
},"orange")


tl.to("#orange-cut",{
    top: "160%",
    left: "35%"
},"orange")

tl.to("#orange",{
  top: "160%",
  left: "70%"
},"orange")





let tl1 = gsap.timeline({
    scrollTrigger:{
      trigger:".page3",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,

    },
})


tl1.to("#fanta",{
    width: "18%",
    top: "215%",
    left: "51%"
},"cut")


tl1.to("#orange-cut",{
  top: "204%",
  left: "51%"
},"cut")

