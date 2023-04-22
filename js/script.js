const header=document.querySelector("header")
const menuBtn=document.querySelector(".menu-btn")
const navigation=document.querySelector(".navigation")
const select=document.querySelector("select")
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
    document.querySelector(".item-1").innerHTML=langsArr["item-1"][hash]
    document.querySelector(".item-2").innerHTML=langsArr["item-2"][hash]
    document.querySelector(".item-3").innerHTML=langsArr["item-3"][hash]
    document.querySelector(".item-4").innerHTML=langsArr["item-4"][hash]
    document.querySelector(".item-5").innerHTML=langsArr["item-5"][hash]
    document.querySelector(".main-text-1").innerHTML=langsArr["main-text-1"][hash]
    document.querySelector(".main-text-2").innerHTML=langsArr["main-text-2"][hash]
    document.querySelector(".main-text-3").innerHTML=langsArr["main-text-3"][hash]
    document.querySelector(".about .title").innerHTML=langsArr["about-title"][hash]
    document.querySelector(".about .text").innerHTML=langsArr["about-text"][hash]
    document.querySelector(".travel-title").innerHTML=langsArr["travel-title"][hash]
    document.querySelector(".travel-dubai").innerHTML=langsArr["travel-dubai"][hash]
    document.querySelector(".travel-antalya").innerHTML=langsArr["travel-antalya"][hash]
    document.querySelector(".travel-egypt").innerHTML=langsArr["travel-egypt"][hash]
    document.querySelector(".travel-umrah").innerHTML=langsArr["travel-umrah"][hash]
    document.querySelector(".travel-uzb").innerHTML=langsArr["travel-uzb"][hash]
    document.querySelectorAll(".basket-text").forEach(item=>{
        item.innerHTML=langsArr["basket"][hash]
    })
    document.querySelector(".across .title").innerHTML=langsArr["across-title"][hash]
    document.querySelector(".across .text").innerHTML=langsArr["across-text"][hash]
    document.querySelector(".across a").innerHTML=langsArr["across-link"][hash]
    document.querySelector(".services-title").innerHTML=langsArr["services-title"][hash]
    document.getElementById("text-item-1").innerHTML=langsArr["text-item-1"][hash]
    document.getElementById("text-item-2").innerHTML=langsArr["text-item-2"][hash]
    document.getElementById("text-item-3").innerHTML=langsArr["text-item-3"][hash]
    document.getElementById("text-item-4").innerHTML=langsArr["text-item-4"][hash]
    document.getElementById("text-item-5").innerHTML=langsArr["text-item-5"][hash]
    document.getElementById("text-item-6").innerHTML=langsArr["text-item-6"][hash]
    document.getElementById("col-title-1").innerHTML=langsArr["col-title-1"][hash]
    document.getElementById("col-title-2").innerHTML=langsArr["col-title-2"][hash]
    document.getElementById("col-title-3").innerHTML=langsArr["col-title-3"][hash]
    document.getElementById("col-text-1").innerHTML=langsArr["col-text-1"][hash]
    document.getElementById("col-text-2").innerHTML=langsArr["col-text-2"][hash]
    document.getElementById("col-text-3").innerHTML=langsArr["col-text-3"][hash]
    document.querySelector(".contact-title").innerHTML=langsArr["contact-title"][hash]
    document.getElementById("name").innerHTML=langsArr["name"][hash]
    document.getElementById("surname").innerHTML=langsArr["surname"][hash]
    document.getElementById("phone-number").innerHTML=langsArr["phone-number"][hash]
    document.getElementById("message").innerHTML=langsArr["message"][hash]
    document.querySelector(".contact-link").innerHTML=langsArr["contact-link"][hash]
    document.getElementById("location").innerHTML=langsArr["location"][hash]
    document.querySelector("footer .navigation .item-1").innerHTML=langsArr["item-1"][hash]
    document.querySelector("footer .navigation .item-2").innerHTML=langsArr["item-2"][hash]
    document.querySelector("footer .navigation .item-3").innerHTML=langsArr["item-3"][hash]
    document.querySelector("footer .navigation .item-4").innerHTML=langsArr["item-4"][hash]
    document.querySelector("footer .navigation .item-5").innerHTML=langsArr["item-5"][hash]

    // Basket 
}
changeLanguage()
select.addEventListener("change",changeUrlLanguages)
