var food=[
    {
        id:1,
        name:"Aasife Biriyani",
        place:"Ramanathapuram",
        rating:4.1,
        price:350,
        preparing:30,
        type:"Desserts, Indian Chinese ..",
        offer:"20% Offer",
        offers:"yes",
        images:"images/dish-2.jpg",
        vn:"non-veg",

    },

    {
        id:2,
        name:"Sambar Rice",
        place:"Ramanathapuram",
        rating:3.5,
        price:200,
        preparing:20,
        type:"Pastas Chinese ..",
        offer:"10% Offer",
        offers:"yes",
        images:"images/dish-1.jpg",
        vn:"veg",

    },

    {
        id:3,
        name:"Combo rice",
        place:"Ramanathapuram",
        rating:3.9,
        price:400,
        preparing:15,
        type:"Patas chinese ..",
        offers:"no",
        offer:"Free Delivery",
        images:"images/dish-3.jpg",
        vn:"non-veg",

    },

    {
        id:4,
        name:"Puri",
        place:"Ramanathapuram",
        rating:3.9,
        price:200,
        preparing:35,
        type:"Indian food ..",
        offer:"40% Offer",
        offers:"yes",
        images:"images/dish-21.jpg",
        vn:"veg",

    },

    {
        id:5,
        name:"Veg Rice",
        place:"Ramanathapuram",
        rating:4,
        price:250,
        preparing:45,
        type:"Chinese, Indian ..",
        offer:"20% Offer",
        offers:"yes",
        images:"images/dish-5.jpg",
        vn:"veg",

    },

    {
        id:6,
        name:"Healthly food",
        place:"Ramanathapuram",
        rating:3.8,
        price:400,
        preparing:20,
        type:"South Indian, Chinese ..",
        offer:"Free Delivery",
        offers:"no",
        images:"images/dish-6.jpg",
        vn:"veg",

    },

    {
        id:7,
        name:"Lemon Rice",
        place:"Ramanathapuram",
        rating:4,
        price:299,
        preparing:30,
        type:"Indian food ..",
        offer:"10% Offer",
        offers:"yes",
        images:"images/dish-7.jpg",
        vn:"veg",

    },


    {
        id:8,
        name:"Egg Rice",
        place:"Ramanathapuram",
        rating:4.5,
        price:199,
        preparing:20,
        type:"Indian food ..",
        offer:"No Offer",
        offers:"no",
        images:"images/dish-8.jpeg",
        vn:"veg",

    },

    {
        id:9,
        name:"Biriyani",
        place:"Ramanathapuram",
        rating:4.5,
        price:650,
        preparing:120,
        type:"Indian food ..",
        offer:"15% Offer",
        offers:"yes",
        images:"images/dish-9.jpg",
        vn:"non-veg",

    },

    {
        id:10,
        name:"Mutton spl",
        place:"Ramanathapuram",
        rating:3.6,
        price:250,
        preparing:40,
        type:"Street Food ..",
        offer:"No Offer",
        offers:"no",
        images:"images/dish-10.jpg",
        vn:"non-veg",

    },

    {
        id:11,
        name:"spl food",
        place:"Ramanathapuram",
        rating:3.5,
        price:400,
        preparing:30,
        type:"North Indian, Chinese ..",
        offer:"50% Offer",
        offers:"yes",
        images:"images/dish-11.jpg",
        vn:"non-veg",

    },

    {
        id:12,
        name:"Idily",
        place:"Ramanathapuram",
        rating:4.9,
        price:100,
        preparing:10,
        type:"culture food ..",
        offer:"Free Delivery",
        offers:"no",
        images:"images/dish-12.jpg",
        vn:"veg",


    },

    {
        id:13,
        name:"Dosa",
        place:"Ramanathapuram",
        rating:3.5,
        price:250,
        preparing:15,
        type:"Sweet, Beverages ..",
        offer:"No Offer",
        offers:"no",
        images:"images/dish-13.jpg",
        vn:"veg",


    },

    {
        id:14,
        name:"Sambar vadai",
        place:"Ramanathapuram",
        rating:4.1,
        price:150,
        preparing:60,
        type:"Indian, Spicy ..",
        offer:"40% Offer",
        offers:"yes",
        images:"images/dish-14.jpg",
        vn:"veg",


    },

    {
        id:15,
        name:"Veg combo",
        place:"Ramanathapuram",
        rating:3.2,
        price:350,
        preparing:30,
        type:"Healthy food..",
        offer:"10% Offer",
        offers:"yes",
        images:"images/dish-15.jpg",
        vn:"veg",


    },

    {
        id:16,
        name:"veg gravy",
        place:"Ramanathapuram",
        rating:4.5,
        price:250,
        preparing:20,
        type:"Gravy type..",
        offer:"5% Offer",
        offers:"yes",
        images:"images/dish-16.jpg",
        vn:"veg",


    },

    {
        id:17,
        name:"Beef",
        place:"Ramanathapuram",
        rating:3.5,
        price:400,
        preparing:15,
        type:"Beef spl ..",
        offer:"20% Offer",
        offers:"yes",
        images:"images/dish-17.jpg",
        vn:"non-veg",


    },
    {
        id:17,
        name:"Panner",
        place:"Ramanathapuram",
        rating:3.5,
        price:300,
        preparing:15,
        type:"veg spl ..",
        offer:"30% Offer",
        offers:"yes",
        images:"images/dish-18.jpg",
        vn:"veg",


    },
    {
        id:17,
        name:"Fruits",
        place:"Ramanathapuram",
        rating:3.5,
        price:400,
        preparing:15,
        type:"Health food ..",
        offer:"20% Offer",
        offers:"yes",
        images:"images/dish-19.jpg",
        vn:"veg",


    },
    {
        id:17,
        name:"Kerala putu",
        place:"Ramanathapuram",
        rating:3.5,
        price:420,
        preparing:15,
        type:"kerala spl one ..",
        offer:"20% Offer",
        offers:"yes",
        images:"images/dish-20.jpg",
        vn:"veg",


    }




]





var swiggy_card_row = document.getElementById("swiggy-card-row")


foodfilter(food)

function foodfilter(a){

a.forEach(function(e){


var swiggy_card_card = document.createElement("div")
swiggy_card_card.classList.add("swiggy_card_card")
swiggy_card_row.appendChild(swiggy_card_card)


var swiggy_card_card_img=document.createElement("div")
swiggy_card_card_img.classList.add("swiggy_card_card_img")
swiggy_card_card.appendChild(swiggy_card_card_img)

var swiggy_image=document.createElement("img")
swiggy_image.src = e.images
swiggy_card_card_img.appendChild(swiggy_image)

var swiggy_card_card_head=document.createElement("div")
swiggy_card_card_head.classList.add("swiggy_card_card_head")
swiggy_card_card.appendChild(swiggy_card_card_head)
swiggy_card_card_head.innerHTML=e.name

var swiggy_card_card_offer=document.createElement("div")
swiggy_card_card_offer.classList.add("swiggy_card_card_offer")
swiggy_card_card.appendChild(swiggy_card_card_offer)
swiggy_card_card_offer.innerHTML=e.offer

if(e.offer=="No Offer"){
        swiggy_card_card_offer.remove()

}

var swiggy_card_card_type=document.createElement("div")
swiggy_card_card_type.classList.add("swiggy_card_card_type")
swiggy_card_card.appendChild(swiggy_card_card_type)

var swiggy_card_card_icon=document.createElement("i")
swiggy_card_card_icon.classList.add("fa", "fa-star")
swiggy_card_card_icon.setAttribute("aria-hidden","true")
swiggy_card_card_type.appendChild(swiggy_card_card_icon)
swiggy_card_card_icon.innerHTML=" "+e.rating


var swiggy_card_card_para=document.createElement("span")
swiggy_card_card_para.classList.add("swiggy_card_card_type")
swiggy_card_card_type.appendChild(swiggy_card_card_para)
swiggy_card_card_para.innerHTML=" "+e.type

if(e.rating>=4){
    swiggy_card_card_icon.style.color="green"

}

else if (e.rating>=3.5){
    swiggy_card_card_icon.style.color="purple"

}

else{
    swiggy_card_card_icon.style.color="orange"

}

var swiggy_card_card_price=document.createElement("div")
swiggy_card_card_price.classList.add("swiggy_card_card_price")
swiggy_card_card.appendChild(swiggy_card_card_price)
swiggy_card_card_price.innerHTML="Rs. "+e.price

var swiggy_card_card_place=document.createElement("div")
swiggy_card_card_place.classList.add("swiggy_card_card_place")
swiggy_card_card.appendChild(swiggy_card_card_place)
swiggy_card_card_place.innerHTML=e.place



})
}





function rating(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var rate=food.filter(function(rate){
   return rate.rating>=4
})

foodfilter(rate)


}



function veg(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var ve=food.filter(function(nveg){
   return nveg.vn=="veg"
})

foodfilter(ve)


}



function relevent(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})


foodfilter(food)


}



function fast(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var deli=food.filter(function(fd){
   return fd.preparing<30
})

foodfilter(deli)

}



function offer(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var off=food.filter(function(a){
   return a.offers=="yes"
})

foodfilter(off)


}



function above(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var abo=food.filter(function(a){
   return a.price>300 && a.price<=600
})

foodfilter(abo)


}


function low(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var lo=food.filter(function(a){
   return a.price<300 
})

foodfilter(lo)


}



function sorts(){

var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

card.forEach(function(e){
    e.remove()
})

var so=food.slice().sort(function(a,b){
   return b.rating-a.rating
})

foodfilter(so)


}

function myfunction(){
    alert("sir,please do you want to  any help!!")

    
}
