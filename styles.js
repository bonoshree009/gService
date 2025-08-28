//  increment heart number
const heartIcon = document.getElementsByClassName("heart-icon")  
 let convoheart = parseInt(document.getElementById("heart").innerText)
     //console.log(heartIcon)

     for(let icon of heartIcon){
        icon.addEventListener("click",function(){
           convoheart =convoheart+ 1
          document.getElementById("heart").innerText = convoheart 
        
     })
     }

   //   call functionality

let alldata = []

function getid(id){

let element = document.getElementById(id)
   let nam = element.children[1].innerText
    console.log(nam)
    let num = element.children[3].innerText
    console.log(num)
const data = {
      name : nam,
      number : num,
      date : new Date().toLocaleTimeString()
   }
   alldata.push(data)

}
let ids = ["one ","two"]
for(let one of ids){
   getid(one)
}
console.log(alldata)
//  cart two
// let two = document.getElementById("Two")

//    let nam = two.children[1].innerText
//     console.log(nam)
//     let num = two.children[3].innerText
//     console.log(num)
// const data = {
//       name : nam,
//       number : num,
//       date : new Date().toLocaleTimeString()
//    }
//    alldata.push(data)
// }
console.log(alldata)

const calls = document.getElementsByClassName("call-btn")
let coinNum =document.getElementById("coin").innerText
for(let call of calls){
   call.addEventListener("click",function(){
   alert("call jasse")
   coinNum = coinNum - 20
   document.getElementById("coin").innerText = coinNum
    
   let cart_container = document.getElementById("cart-container")
   for( let data of alldata){
      const div = document.createElement("div")
      div.innerHTML = ` 
      <div class="flex justify-between  items-center bg-[#f4f5f4] rounded-2xl p-6 mb-4">
                        <div><h1 class="font-bold">${data.nam}</h1><p>${data.num}</p></div>
                       <p>${data.date}</p>
                    </div>`
       cart_container.appendChild(div)
   }

    })
}
    
   
     
    





