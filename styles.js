// document.getElementById("heart-btn").addEventListener("click",function(){
  
//     const convoheart = parseInt(document.getElementById("heart").innerText)
//     //console.log(convoheart)


// })
 const heartIcon = document.getElementsByClassName("heart-icon")  
 let convoheart = parseInt(document.getElementById("heart").innerText)
     //console.log(heartIcon)

     for(let icon of heartIcon){
        icon.addEventListener("click",function(){
           convoheart =convoheart+ 1
          document.getElementById("heart-btn").innerText = convoheart 
        
     })
     }

    
   
     
    





