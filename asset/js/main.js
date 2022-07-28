$(function(){

    $('header a.btn-reser, .gnb-area .gnb-item, .author-area .opentime, .sc-vision .btn-more').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );




    $('header .btn-menu').click(function(){
        $(this).toggleClass('active');
        $('.gnb-area ,body, .dimmed').toggleClass('active');
    });
    $('.dimmed').click(function(){
        $(this).removeClass('active');
        $('.gnb-area ,body, .dimmed, .btn-menu').removeClass('active');
    });
    //to ~로 보내다
    //from 되감기 괄호안에 내용에서 원래대로 돌아간다 




    cloudTl = gsap.timeline({
        repeat:-1,
        scrub:1,
    })

    cloudTl.to('.sc-main .cloud img',{
        xPercent:100,
        duration: 50,
    })
    .to('.sc-main .cloud img',{
        xPercent:-100,
        duration: 50,
    });

    cloud2Tl = gsap.timeline({
        repeat:-1,
        scrub:1,
    })

    cloud2Tl.to('.sc-couple .flow-cloud img',{
        xPercent:100,
        duration: 50,
    })
    .to('.sc-couple .flow-cloud img',{
        xPercent:-100,
        duration: 50,
    });

    ScrollTrigger.matchMedia({
   
        // large
        "(min-width: 1025px)": function() {

            intoTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-main',
                    start:"0% 0%",
                    end:"+=300%",
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
          
        
            intoTl.addLabel('m1')
            .to('header .up',{yPercent:-300},'m1')
            .from('.ig-title',{scale: 24,top:'58%',left:'43%',duration:0.6},'m1')
            .from('.sc-main .mount img',{width: '220vw',yPercent:0,x:'-60vw'},'m1')
            .fromTo('.sc-main .title',{opacity:0},{yPercent:-30,opacity:1,},'m1+=0.4')
            .addLabel('m2')
            .to('.sc-main .title',{opacity:0,duration:0.4},'m2-=0.1',)
            // .to('.sc-main .women',{scale:1,xPercent:0,yPercent:-30},'m2-=0.1')
            .to('.sc-main .mount img',{width: '100vw',x:'5vw'},'m2')
            .to('.ig-title',{opacity:0,duration:0.2},'m2-=0.1')
            .to('.sc-main .main-logo img',{opacity:0,duration:0.2},'m2')
            .fromTo('.sc-main .women',{
                scale:5,
                xPercent:-50,
                yPercent:250,
                opacity:0
            },
            {
                scale:2.5,
                xPercent:-5,
                yPercent:5,
                opacity:1
            },'m1+=0.2')
            .to('.sc-main .cloud img',{yPercent:-80,},'m1');
            // .to('.sc-main .mount img',{scale: 0.5},'m1+=0.3')
            // .to('.sc-main .women',{scale:0.5},'m1');


            intoTl2 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"-100% 60%",
                    end:"+=100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })
            intoTl2.to('.sc-main .women',{scale:1,xPercent:0,yPercent:-30})


            manTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"0% 0%", 
                    end:"50% 100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            manTl.to('.sc-man .title',{yPercent:-60,opacity:1,duration:1});

            familyTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-family',
                    start:"0% 0%", 
                    end:"+=200%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            familyTl.addLabel('m1')
            .from('.sc-family .back-man',{xPercent:20,},'m1')
            .from('.sc-family .light',{yPercent:-100,},'m1+=0.4')
            .from('.sc-family .flash',{opacity:0},'m1+=0.5')
            .from('.sc-family .family',{yPercent:50},'m1+=0.8')
            .from('.sc-family .title',{yPercent:20},'m1+=1')


            coupleTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-couple',
                    start:"0% 0%", 
                    end:"+=150%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
        
            coupleTl.addLabel('m1')
            .to('.sc-couple .left-cloud img',{xPercent:50,duration:1},'m1')
            .to('.sc-couple .middle-cloud img',{xPercent:-50,duration:1},'m1')
            .to('.sc-couple .left-women',{yPercent:-3,duration:1},'m1')
            .to('.sc-couple .right-man',{yPercent:-3,duration:1},'m1')
            .to('.sc-couple .back-window',{yPercent:-3,duration:1},'m1')
            .fromTo('.sc-couple .left2-cloud img',{scale:5,xPercent:-150},{xPercent:50,duration:2},'m1+=0.3')
            .fromTo('.sc-couple .middle2-cloud img',{scale:5,xPercent:150},{xPercent:-50,duration:2},'m1+=0.3')
            .to('.sc-couple .title',{opacity:1,duration:2},'m1+=0.8')
            .to('.sc-couple .bg-bei',{opacity:1,duration:2},'m1+=0.8')


            carTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-car',
                    start:"-20% 0%",
                    end:"90% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            carTl.addLabel('m1')
            .from('.sc-car .top-light',{yPercent:-100,},'m1')
            .from('.sc-car .top-glow',{opacity:0},'m1+=.2')
            .from('.sc-car .car',{xPercent:-5})
            .from('.sc-car .title',{yPercent:5})

            visionTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-vision',
                    start:"-40% 0%",
                    end:"0% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            visionTl.addLabel('m1')
            .from('.sc-vision .cata',{opacity:0,yPercent:100},'m1')
            .from('.sc-vision .title',{opacity:0,yPercent:30},'m1')
            .from('.sc-vision .btn-more',{yPercent:30},'m1-=0.2')

            intoTl.scrollTrigger.refresh();
            intoTl2.scrollTrigger.refresh();
            manTl.scrollTrigger.refresh();
            visionTl.scrollTrigger.refresh();
            carTl.scrollTrigger.refresh();
            familyTl.scrollTrigger.refresh();
            coupleTl.scrollTrigger.refresh();
        },
      
        // medium
        "(min-width: 959px) and (max-width: 1024px)": function() {
            intoTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-main',
                    start:"0% 0%",
                    end:"+=300%",
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
          
        
            intoTl.addLabel('m1')
            .to('header .up',{yPercent:-300},'m1')
            .from('.ig-title',{scale: 16,top:'50%',left:'43%',duration:0.6},'m1')
            .from('.sc-main .mount img',{width: '230vw',yPercent:-20,x:'-40vw'},'m1')
            .fromTo('.sc-main .title',{opacity:0},{yPercent:-50,opacity:1,},'m1+=0.4')
            .addLabel('m2')
            .to('.sc-main .title',{opacity:0,duration:0.4},'m2-=0.1',)
            // .to('.sc-main .women',{scale:1.5,xPercent:0,yPercent:-20},'m2-=0.1')
            .to('.sc-main .mount img',{width:'110vw',x:'20vw'},'m2')
            .to('.ig-title',{opacity:0,duration:0.2},'m2-=0.1')
            .to('.sc-main .main-logo img',{opacity:0,duration:0.2},'m2')
            .fromTo('.sc-main .women',{
                scale:5,
                xPercent:-50,
                yPercent:250,
                opacity:0
            },
            {
                scale:2.5,
                xPercent:-5,
                yPercent:5,
                opacity:1
            },'m1+=0.2')
            .to('.sc-main .cloud img',{yPercent:-80,},'m1');
            // .to('.sc-main .mount img',{scale: 0.5},'m1+=0.3')
            // .to('.sc-main .women',{scale:0.5},'m1');

            intoTl2 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"-100% 60%",
                    end:"+=100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })
            intoTl2.to('.sc-main .women',{scale:1,xPercent:0,yPercent:-30})

            manTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"0% 0%", 
                    end:"50% 100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            manTl.to('.sc-man .title',{yPercent:-30,opacity:1,duration:1});

            familyTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-family',
                    start:"0% 0%", 
                    end:"+=100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            familyTl.addLabel('m1')
            .from('.sc-family .back-man',{xPercent:20,},'m1')
            .from('.sc-family .light',{yPercent:-100,},'m1+=0.4')
            .from('.sc-family .flash',{opacity:0},'m1+=0.5')
            .from('.sc-family .family',{yPercent:50,opacity:0,duration:0.8},'m1+=1')
            .from('.sc-family .title',{yPercent:20},'m1+=1.2')

            coupleTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-couple',
                    start:"0% 0%", 
                    end:"+=150%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
        
            coupleTl.addLabel('m1')
            .to('.sc-couple .left-cloud img',{xPercent:50,duration:1},'m1')
            .to('.sc-couple .middle-cloud img',{xPercent:-50,duration:1},'m1')
            .to('.sc-couple .left-women',{yPercent:-2,duration:1},'m1+=.2')
            .to('.sc-couple .right-man',{yPercent:-2,duration:1},'m1+=.2')
            .fromTo('.sc-couple .back-window',{yPercent:-2,xPercent:-50},{yPercent:-4,duration:1},'m1')
            .fromTo('.sc-couple .left2-cloud img',{scale:5,xPercent:-150},{xPercent:50,duration:2},'m1+=0.3')
            .fromTo('.sc-couple .middle2-cloud img',{scale:5,xPercent:150},{xPercent:-50,duration:2},'m1+=0.3')
            .to('.sc-couple .title',{opacity:1,duration:2},'m1+=1')
            .to('.sc-couple .bg-bei',{opacity:1,duration:2},'m1+=0.8')

            carTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-car',
                    start:"-20% 0%",
                    end:"90% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            carTl.addLabel('m1')
            .from('.sc-car .top-light',{yPercent:-100,},'m1')
            .from('.sc-car .top-glow',{opacity:0},'m1+=.2')
            .from('.sc-car .car',{xPercent:-5},'m1+=1')
            .from('.sc-car .title',{yPercent:5},'m1+=1.5')

            visionTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-vision',
                    start:"-20% 0%",
                    end:"0% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            visionTl.addLabel('m1')
            .from('.sc-vision .cata',{yPercent:100},'m1')
            .from('.sc-vision .title',{yPercent:30},'m1')
            .from('.sc-vision .btn-more',{yPercent:30},'m1-=0.2')

            intoTl.scrollTrigger.refresh();
            intoTl2.scrollTrigger.refresh();
            manTl.scrollTrigger.refresh();
            visionTl.scrollTrigger.refresh();
            carTl.scrollTrigger.refresh();
            familyTl.scrollTrigger.refresh();
            coupleTl.scrollTrigger.refresh();

        },
        "(min-width: 767px) and (max-width: 958px)": function() {
            intoTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-main',
                    start:"0% 0%",
                    end:"+=300%",
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
          
        
            intoTl.addLabel('m1')
            .to('header .up',{yPercent:-300},'m1')
            .from('.ig-title',{scale: 16,top:'50%',left:'43%',duration:0.6},'m1')
            .from('.sc-main .mount img',{width: '230vw',yPercent:-20,x:'-40vw'},'m1')
            .fromTo('.sc-main .title',{opacity:0},{yPercent:-50,opacity:1,},'m1+=0.4')
            .addLabel('m2')
            .to('.sc-main .title',{opacity:0,duration:0.4},'m2-=0.1',)
            // .to('.sc-main .women',{scale:1.5,xPercent:0,yPercent:-20},'m2-=0.1')
            .to('.sc-main .mount img',{width:'110vw',x:'20vw'},'m2')
            .to('.ig-title',{opacity:0,duration:0.2},'m2-=0.1')
            .to('.sc-main .main-logo img',{opacity:0,duration:0.2},'m2')
            .fromTo('.sc-main .women',{
                scale:5,
                xPercent:-50,
                yPercent:250,
                opacity:0
            },
            {
                scale:2.5,
                xPercent:-5,
                yPercent:5,
                opacity:1
            },'m1+=0.2')
            .to('.sc-main .cloud img',{yPercent:-80,},'m1');
            // .to('.sc-main .mount img',{scale: 0.5},'m1+=0.3')
            // .to('.sc-main .women',{scale:0.5},'m1');


            intoTl2 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"-100% 60%",
                    end:"+=100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })
            intoTl2.to('.sc-main .women',{scale:1.8,xPercent:0,yPercent:-40})

            manTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"0% 0%", 
                    end:"50% 100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            manTl.to('.sc-man .title',{yPercent:-30,opacity:1,duration:1});

            familyTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-family',
                    start:"0% 0%", 
                    end:"+=100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            familyTl.addLabel('m1')
            .from('.sc-family .back-man',{xPercent:20,},'m1')
            .from('.sc-family .light',{yPercent:-100,},'m1+=0.4')
            .from('.sc-family .flash',{opacity:0},'m1+=0.5')
            .from('.sc-family .family',{yPercent:50,opacity:0,duration:0.8},'m1+=1')
            .from('.sc-family .title',{yPercent:30,opacity:0},'m1+=1.2')

            coupleTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-couple',
                    start:"0% 0%", 
                    end:"+=150%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
        
            coupleTl.addLabel('m1')
            .to('.sc-couple .left-cloud img',{xPercent:50,duration:1},'m1')
            .to('.sc-couple .middle-cloud img',{xPercent:-50,duration:1},'m1')
            .to('.sc-couple .left-women',{yPercent:-2,duration:1},'m1+=.2')
            .to('.sc-couple .right-man',{yPercent:-2,duration:1},'m1+=.2')
            .fromTo('.sc-couple .back-window',{yPercent:-2,xPercent:-50},{yPercent:-4,duration:1},'m1')
            .fromTo('.sc-couple .left2-cloud img',{scale:5,xPercent:-150},{xPercent:50,duration:2},'m1+=0.3')
            .fromTo('.sc-couple .middle2-cloud img',{scale:5,xPercent:150},{xPercent:-50,duration:2},'m1+=0.3')
            .to('.sc-couple .title',{opacity:1,duration:2},'m1+=1')
            .to('.sc-couple .bg-bei',{opacity:1,duration:2},'m1+=0.8')

            carTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-car',
                    start:"-20% 0%",
                    end:"90% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            carTl.addLabel('m1')
            .from('.sc-car .top-light',{yPercent:-100,},'m1')
            .from('.sc-car .top-glow',{opacity:0},'m1+=.2')
            .from('.sc-car .car',{xPercent:-5},'m1+=1')
            .from('.sc-car .title',{yPercent:5},'m1+=1.5')

            visionTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-vision',
                    start:"-20% 0%",
                    end:"0% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            visionTl.addLabel('m1')
            .from('.sc-vision .cata',{yPercent:100},'m1')
            .from('.sc-vision .title',{yPercent:30},'m1')
            .from('.sc-vision .btn-more',{yPercent:30},'m1-=0.2')

            intoTl.scrollTrigger.refresh();
            intoTl2.scrollTrigger.refresh();
            manTl.scrollTrigger.refresh();
            visionTl.scrollTrigger.refresh();
            carTl.scrollTrigger.refresh();
            familyTl.scrollTrigger.refresh();
            coupleTl.scrollTrigger.refresh();

        },
        "(min-width: 580px) and (max-width: 766px)": function() {
            intoTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-main',
                    start:"0% 0%",
                    end:"+=300%",
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
          
        
            intoTl.addLabel('m1')
            .to('header .up',{yPercent:-300},'m1')
            .from('.ig-title',{scale: 9.5,top:'45%',left:'40%',duration:0.6},'m1')
            .from('.sc-main .mount img',{width: '230vw',yPercent:-20,x:'-70vw'},'m1')
            .fromTo('.sc-main .title',{opacity:0},{yPercent:-120,opacity:1,},'m1+=0.4')
            .addLabel('m2')
            .to('.sc-main .title',{opacity:0,duration:0.4},'m2-=0.1',)
            // .to('.sc-main .women',{scale:1.5,xPercent:0,yPercent:-20},'m2-=0.1')
            .to('.sc-main .mount img',{width:'110vw',x:'-5vw'},'m2')
            .to('.ig-title',{opacity:0,duration:0.2},'m2-=0.1')
            .to('.sc-main .main-logo img',{opacity:0,duration:0.2},'m2')
            .fromTo('.sc-main .women',{
                scale:5,
                xPercent:-50,
                yPercent:250,
                opacity:0
            },
            {
                scale:2.5,
                xPercent:-5,
                yPercent:5,
                opacity:1
            },'m1+=0.2')
            .to('.sc-main .cloud img',{yPercent:-80,},'m1');
            // .to('.sc-main .mount img',{scale: 0.5},'m1+=0.3')
            // .to('.sc-main .women',{scale:0.5},'m1');


            intoTl2 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"-100% 60%",
                    end:"+=100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })
            intoTl2.to('.sc-main .women',{scale:1.8,xPercent:0,yPercent:-40})

            manTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"0% 0%", 
                    end:"50% 100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            manTl.to('.sc-man .title',{yPercent:-30,opacity:1,duration:1});

            familyTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-family',
                    start:"0% 0%", 
                    end:"+=100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            familyTl.addLabel('m1')
            .from('.sc-family .back-man',{xPercent:20,},'m1')
            .from('.sc-family .light',{yPercent:-100,},'m1+=0.4')
            .from('.sc-family .flash',{opacity:0},'m1+=0.5')
            .from('.sc-family .family',{yPercent:50,opacity:0,duration:0.8},'m1+=1')
            .from('.sc-family .title',{yPercent:30,opacity:0},'m1+=1.2')

            coupleTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-couple',
                    start:"0% 0%", 
                    end:"+=150%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
        
            coupleTl.addLabel('m1')
            .to('.sc-couple .left-cloud img',{xPercent:50,duration:1},'m1')
            .to('.sc-couple .middle-cloud img',{xPercent:-50,duration:1},'m1')
            .to('.sc-couple .left-women',{yPercent:-2,duration:1},'m1+=.2')
            .to('.sc-couple .right-man',{yPercent:-2,duration:1},'m1+=.2')
            .fromTo('.sc-couple .back-window',{yPercent:-2},{yPercent:-4,duration:1},'m1')
            .fromTo('.sc-couple .left2-cloud img',{scale:5,xPercent:-150},{xPercent:50,duration:2},'m1+=0.3')
            .fromTo('.sc-couple .middle2-cloud img',{scale:5,xPercent:150},{xPercent:-50,duration:2},'m1+=0.3')
            .to('.sc-couple .title',{opacity:1,duration:2},'m1+=1')
            .to('.sc-couple .bg-bei',{opacity:1,duration:2},'m1+=0.8')

            carTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-car',
                    start:"-20% 0%",
                    end:"90% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            carTl.addLabel('m1')
            .from('.sc-car .top-light',{yPercent:-100,},'m1')
            .from('.sc-car .top-glow',{opacity:0},'m1+=.2')
            .from('.sc-car .car',{xPercent:-5},'m1+=1')
            .from('.sc-car .title',{yPercent:5},'m1+=1.5')

            visionTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-vision',
                    start:"-20% 0%",
                    end:"0% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            visionTl.addLabel('m1')
            .from('.sc-vision .cata',{yPercent:100},'m1')
            .from('.sc-vision .title',{yPercent:30},'m1')
            .from('.sc-vision .btn-more',{yPercent:30},'m1-=0.2')

            intoTl.scrollTrigger.refresh();
            intoTl2.scrollTrigger.refresh();
            manTl.scrollTrigger.refresh();
            visionTl.scrollTrigger.refresh();
            carTl.scrollTrigger.refresh();
            familyTl.scrollTrigger.refresh();
            coupleTl.scrollTrigger.refresh();

        },
      
        // small
        "(max-width: 579px)": function() {
            // gsap.set('.sc-women .women img',{scale:10})
            intoTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-main',
                    start:"0% 0%",
                    end:"+=300%",
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
          
        
            intoTl.addLabel('m1')
            .to('header .up',{yPercent:-300},'m1')
            .from('.ig-title',{scale: 9.5,top:'45%',left:'40%',duration:0.6},'m1')
            .from('.sc-main .mount img',{width: '230vw',yPercent:-20,x:'-70vw'},'m1')
            .fromTo('.sc-main .title',{opacity:0},{yPercent:-200,opacity:1,},'m1+=0.4')
            .addLabel('m2')
            .to('.sc-main .title',{opacity:0,duration:0.4},'m2-=0.1',)
            // .to('.sc-main .women',{scale:1.5,xPercent:0,yPercent:-20},'m2-=0.1')
            .to('.sc-main .mount img',{width:'110vw',x:'-5vw',yPercent:-20},'m2')
            .to('.ig-title',{opacity:0,duration:0.2},'m2-=0.1')
            .to('.sc-main .main-logo img',{opacity:0,duration:0.2},'m2')
            .fromTo('.sc-main .women',{
                scale:5,
                xPercent:-50,
                yPercent:250,
                opacity:0
            },
            {
                scale:2.5,
                xPercent:-5,
                yPercent:5,
                opacity:1
            },'m1+=0.2')
            .to('.sc-main .cloud img',{yPercent:-80,},'m1');
            // .to('.sc-main .mount img',{scale: 0.5},'m1+=0.3')
            // .to('.sc-main .women',{scale:0.5},'m1');


            intoTl2 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"-100% 60%",
                    end:"+=100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })
            intoTl2.to('.sc-main .women',{scale:2,xPercent:0,yPercent:-62})


            manTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-man',
                    start:"0% 0%", 
                    end:"50% 100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            manTl.to('.sc-man .title',{yPercent:-30,opacity:1,duration:1});

            


            familyTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-family',
                    start:"0% 0%", 
                    end:"+=100%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
            familyTl.addLabel('m1')
            .from('.sc-family .back-man',{xPercent:20,},'m1')
            .from('.sc-family .light',{yPercent:-100,},'m1+=0.4')
            .from('.sc-family .flash',{opacity:0},'m1+=0.5')
            .from('.sc-family .family',{yPercent:50,opacity:0,duration:0.8},'m1+=1')
            .from('.sc-family .title',{yPercent:30,opacity:0},'m1+=1.2')



            coupleTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-couple',
                    start:"0% 0%", 
                    end:"+=150%", 
                    // markers: true,
                    pin:true,
                    scrub:1,
                }
            })
        
            coupleTl.addLabel('m1')
            .to('.sc-couple .left-cloud img',{xPercent:50,duration:1},'m1')
            .to('.sc-couple .middle-cloud img',{xPercent:-50,duration:1},'m1')
            .to('.sc-couple .left-women',{yPercent:-2,duration:1},'m1+=.2')
            .to('.sc-couple .right-man',{yPercent:-2,duration:1},'m1+=.2')
            .fromTo('.sc-couple .back-window',{yPercent:-2},{yPercent:-4,duration:1},'m1')
            .fromTo('.sc-couple .left2-cloud img',{scale:5,xPercent:-150},{xPercent:50,duration:2},'m1+=0.3')
            .fromTo('.sc-couple .middle2-cloud img',{scale:5,xPercent:150},{xPercent:-50,duration:2},'m1+=0.3')
            .to('.sc-couple .title',{opacity:1,duration:2},'m1+=1')
            .to('.sc-couple .bg-bei',{opacity:1,duration:2},'m1+=0.8')

            


            carTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-car',
                    start:"-20% 0%",
                    end:"90% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            carTl.addLabel('m1')
            .from('.sc-car .top-light',{yPercent:-100,},'m1')
            .from('.sc-car .top-glow',{opacity:0},'m1+=.2')
            .from('.sc-car .car',{xPercent:-5},'m1+=1')
            .from('.sc-car .title',{yPercent:5},'m1+=1.5')

            


            visionTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-vision',
                    start:"-20% 0%",
                    end:"0% 100%",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                }
            })

            visionTl.addLabel('m1')
            .from('.sc-vision .cata',{yPercent:100},'m1')
            .from('.sc-vision .title',{yPercent:30},'m1')
            .from('.sc-vision .btn-more',{yPercent:30},'m1-=0.2')


            intoTl.scrollTrigger.refresh();
            intoTl2.scrollTrigger.refresh();
            manTl.scrollTrigger.refresh();
            visionTl.scrollTrigger.refresh();
            carTl.scrollTrigger.refresh();
            familyTl.scrollTrigger.refresh();
            coupleTl.scrollTrigger.refresh();

        },
          
        // all 
        "all": function() {

            gsap.to('.green-loading img',{opacity:0,duration:1, onComplete:function(){
                gsap.to('.green-loading',{yPercent:-100,duration:1});
            }});
            // gsap.to('.green-loading',{yPercent:-100,duration:1});
          
            barTl = gsap.timeline({
                scrollTrigger:{
                    trigger:'body',
                    start:"0% 0%",
                    end:"bottom bottom",
                    // markers: true,
                    // pin:true,
                    scrub:1,
                    
                }
            })
            barTl.from('.progress-bar .green-bar',{width:0,ease:'none'});

            barTl.scrollTrigger.refresh();
        }
          
      }); 

    ScrollTrigger.refresh();

    var circle = document.querySelector(".cursor");

    $(document).mousemove(function(e){
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';

        var cirMove = $(window).scrollTop();

        
        if (e.target.closest('a, button')) {
            $('.cir').addClass('active');
            $('.cir').removeClass('hide');
            gsap.to('.green-cir', {
                scale: 0,
            })
        } else if(cirMove == 0) {
            $('.cir').addClass('hide');
            gsap.to('.green-cir', {
                scale: 1,
            })
        } else {
            $('.cir').removeClass('active');
            gsap.to('.green-cir', {
                scale: 1,
            })
        }
    });

    $(window).on('scroll', function(){
        var cirActive = $(window).scrollTop();

        if (cirActive == 0) {
            $('.green-cir').removeClass('hide');
            $('.cir').addClass('hide');
        } else {
            $('.green-cir').addClass('hide');
            $('.cir').removeClass('hide');
            $('.cir').removeClass('active');
        }
    });

    $('body').on('mousewheel', function(e){
        var wheel = e.originalEvent.wheelDelta;
        var removeGnb = $(window).scrollTop();
        // console.log(wheel);
        if (removeGnb <= 2000) {
            $('header .down').removeClass('on');
        } else if (wheel > 0) {
            $('header .down').addClass('on');
        } else {
            $('header .down').removeClass('on');
        }
    });
    $(window).resize(function(){
        // width값을 가져오기
        // var width_size = window.outerWidth;
          location.reload();
    })
    
    document.body.style.overscrollBehaviorY = 'none';
})

