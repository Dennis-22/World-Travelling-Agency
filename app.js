const mobileNav = document.querySelector('[mobile-nav]')
const mobileNavIcon = document.querySelector('[mobile-nav-icon]')
const mobileNavEmpty = document.querySelector('[mobile-nav-empty]')

mobileNavIcon.addEventListener('click', openCloseMobileNavDrawer)
mobileNavEmpty.addEventListener('click', openCloseMobileNavDrawer)


function openCloseMobileNavDrawer(){
    // check if drawer is open base on the classes
    const isOpen = mobileNav.className.includes('mobile-drawer-open')
    console.log(isOpen)
    if(isOpen){ //close the drawer
        mobileNav.classList.remove("mobile-drawer-open")
        mobileNav.classList.add("mobile-drawer-close")
    }
    else{ //open the drawer
        mobileNav.classList.remove("mobile-drawer-close")
        mobileNav.classList.add("mobile-drawer-open")
    }
}


// using the observe element fn to animate elements on scroll
observeElement(document.querySelector('footer'), cb)

// this observes the dom element passed to it and runs the func passed to it.
function observeElement(domElement, callbackFn){
    let options = {root:null, threshold:0.5}

    const reveal = (entries, observer)=>{
        let isIntersecting = entries[0].isIntersecting
        if(isIntersecting){callbackFn()}
        return null
    }

    let observer = new IntersectionObserver(reveal, options)
    observer.observe(domElement)
}
