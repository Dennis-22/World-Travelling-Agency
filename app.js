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

window.addEventListener('resize', ()=>{
    // console.log(window.innerWidth)
})