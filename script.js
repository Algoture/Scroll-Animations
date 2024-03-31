gsap.to("#box1 img",{
    x:200,
    y:-50,
    delay:1,
    duration:4
})

gsap.to("#box3 img",{
    scrollTrigger:{
        trigger:"#box3 img",
        scroller:"body",
        markers:false,
        scrub:3,
        start:"top 80%%",
        end:"bottom 20%",
        ease: "power1.inOut",
    },
    x:500,
    y:50,
    duration:8,
})
gsap.to("#box4 img",{
    scrollTrigger:{
        trigger:"#box4 img",
        scroller:"body",
        markers:false,
        scrub:3,
        start:"top 80%%",
        end:"bottom 20%",
        ease: "power1.inOut",
    },
    x:-200
})
gsap.to("#box2 img",{
    scrollTrigger:{
        trigger:"#box2 img",
        scroller:"body",
        markers:false,
        scrub:3,
        start:"top 80%%",
        end:"bottom 20%",
        ease: "power1.inOut",
    },
    scale:1,
    rotate:90,
    x:200,
})
function front(){
    gsap.to("#box5 img",{
        x:-400,
        duration:4,
    })
    ease:"sine.in"
}
function back(){
    gsap.to("#box5 img",{
        x:400,
        duration:4,
    })
    ease:"sine.out"

}
gsap.to('.two',{
    scrollTrigger:{
        trigger:".two",
        scroller:"body",
        markers:false,
        scrub:2,
        start:"top 80%",
        end:"bottom 20%",
        ease: "power1.inOut",
        pin:".two",
    },
    x:1100,
    duration:4,
})
