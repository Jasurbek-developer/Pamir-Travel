const select=document.querySelector(".basket-select")
const header=document.querySelector("header")
const menuBtn=document.querySelector(".menu-btn")
const navigation=document.querySelector(".navigation")
const dark=document.querySelector(".moon-theme")
const body=document.querySelector("body")
const listItems=document.querySelectorAll(".navigation li a")
const card=document.querySelector(".travel-card ")
const cradBasket=document.querySelector(".travel-card .travel-card-footer .basket")
const allLang=["uz","en"]

window.addEventListener("scroll",()=>{
    header.classList.toggle("active", window.scrollY>0)
})
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})
listItems.forEach(item => {
    item.addEventListener("click",()=>{
        console.log("click")
        menuBtn.classList.remove("active")
        navigation.classList.remove("active")
    })
});
dark.addEventListener("click",()=>{
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        dark.innerHTML="<i class='fa-solid fa-sun'></i>"
    }
    else{
        dark.innerHTML="<i class='fa-solid fa-moon'></i>"
    }
})


//Langs


const changeUrlLanguages=()=>{
    let lang=select.value
    console.log(lang);
    location.href=window.location.pathname+"#"+lang
    location.reload()
}
const changeLanguage=()=>{
    let hash=window.location.hash
    hash=hash.substring(1)
    menuBtn.classList.remove("active")
    navigation.classList.remove("active")
    if (!allLang.includes(hash)) {
        location.href=window.location.pathname + "#uz"
        location.reload()
    }
    select.value=hash 
    document.querySelector(".basket-item-1").innerHTML=langsArr["basket-item-1"][hash]
    document.querySelector(".basket-title").innerHTML=langsArr["basket-title"][hash]
    document.querySelector(".footer-item-1").innerHTML=langsArr["footer-item-1"][hash]
    document.querySelector(".basket-card-title").innerHTML=langsArr["basket-card-title"][hash]
    document.querySelector(".card-link").innerHTML=langsArr["card-link"][hash]
}
changeLanguage()
select.addEventListener("change",changeUrlLanguages) 