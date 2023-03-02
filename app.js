const mobileNav = document.querySelector('[mobile-nav]')
const mobileNavIcon = document.querySelector('[mobile-nav-icon]')
const mobileNavList = document.querySelector('[mobile-nav-list]')
const mobileNavEmpty = document.querySelector('[mobile-nav-empty]')

mobileNavIcon.addEventListener('click', openCloseMobileNavDrawer)
mobileNavEmpty.addEventListener('click', openCloseMobileNavDrawer)


function openCloseMobileNavDrawer(){
    // check if drawer is open base on the classes
    const isOpen = mobileNav.className.includes('mobile-drawer-open')
    if(isOpen){ //close the drawer
        // animate the drawer off and remove from dom
        gsap.to(mobileNavList, {x:-500})
        gsap.to(mobileNavEmpty, {opacity:0})
        setTimeout(()=>{
            mobileNav.classList.remove("mobile-drawer-open")
            mobileNav.classList.add("mobile-drawer-close")
        },200)
    }
    else{ //open the drawer
        // bring the drawer to dom and animate it to view
        mobileNav.classList.remove("mobile-drawer-close")
        mobileNav.classList.add("mobile-drawer-open")
        gsap.to(mobileNavList, {x:0})
        gsap.to(mobileNavEmpty, {opacity:1})
    }
}


// using the observe element fn to animate elements on scroll
// observeElement(document.querySelector('footer'), cb)

// this observes the dom element passed to it and runs the func passed to it.
function observeElement(domElement, callbackFn, threshold=0.5){
    let options = {root:null, threshold}

    const reveal = (entries, observer)=>{
        let isIntersecting = entries[0].isIntersecting
        if(isIntersecting){
            callbackFn()
            observer.unobserve(entries[0].target)
        }
    }

    let observer = new IntersectionObserver(reveal, options)
    observer.observe(domElement)
}

// ANIMATIONS

// hero texts animations
const heroTextsTm = gsap.timeline({defaults:{duration:.5}})
const heroText = document.querySelector('[hero-text]')
const heroSubText = document.querySelector('[hero-sub-text]')

heroTextsTm.fromTo(heroText, {opacity:0, y:-50},{opacity:1, y:0,})
heroTextsTm.fromTo(heroSubText, {opacity:0, y:50},{opacity:1, y:0,})


// places animations
const placesTm = gsap.timeline({defaults:{duration:.5}})
const placesContainer = document.querySelector('[places-container]')
const places = document.querySelectorAll('[place]')

function animatePlaces(){
    places.forEach((place) => {
        placesTm.to(place, {opacity:1, scale:1})
    })
}

// observe the parent element entry and trigger its children animation
observeElement(placesContainer, animatePlaces)


// destinations animations
const destinations = document.querySelectorAll('[destination]')
const destinationTm = gsap.timeline({defaults:{duration:.4}})

destinations.forEach((destination)=>{
    observeElement(destination, ()=>{
        destinationTm.to(destination, {opacity:1, y:0})
    })
})

// agency text animations
const agencyTm = gsap.timeline()
const agencyTexts = document.querySelector('[agency-texts]')
const agencyMainText = document.querySelector('[agency-main-text]')
const agencySubText = document.querySelector('[agency-sub-text]')

function animateTexts(){
    agencyTm.to(agencyMainText, {opacity:1, y:0})
    agencyTm.to(agencySubText, {opacity:1, y:0})
}

observeElement(agencyTexts, animateTexts)