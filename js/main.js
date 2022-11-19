let the_player = document.querySelector(`#the_player`)

let a = 350
let d = 750


  function move_up() {
    if (a <= 100) {
      return true 
    } else {
      a-=50
      the_player.style.top = `${a}px`
     }
 
    if (the_player.getBoundingClientRect().y <= 100 ){
      scrollBy(0,-50)
    }
    main_weapon.style.transition=`0s`
    main_weapon.style.top = `${a-2}px`
    main_weapon.style.left = `${d+45}px`
  }


  function move_down() {

    if (a >= 4700) {
      return true 
    } else {
      a+=50
      the_player.style.top = `${a}px`
    }
    if (the_player.getBoundingClientRect().y >= 570){
        scrollBy(0,50) 
      
      
      }
      main_weapon.style.transition=`0s`
    main_weapon.style.top = `${a-2}px`
    main_weapon.style.left = `${d+45}px`
  }


  function move_right() {
    if ( d >= 3900 ) {
      return true
    } else { 
      d+=50
      the_player.style.left = `${d}px`
    }
    if (the_player.getBoundingClientRect().x >= 1350){
      scrollBy(50,0)
    }
    main_weapon.style.transition=`0s`
    main_weapon.style.top = `${a-2}px`
    main_weapon.style.left = `${d+45}px`
  }


  function move_left() {
    if ( d <= 100) {
      return true
    } else { 
      d-=50
      the_player.style.left = `${d}px`
    }
    
    
     if (the_player.getBoundingClientRect().x <= 150){
      scrollBy(-50,0)
    }
    main_weapon.style.transition=`0s`
    main_weapon.style.top = `${a-2}px`
    main_weapon.style.left = `${d+45}px`
}

// function move_up_right() {

//   if (d >= 3900 || a <= 100 ){
//     return true }
//     else{
//       d+=10
//       a-=10
//       the_player.style.left = `${d}px`
//       the_player.style.top = `${a}px`
//     }
//     if (the_player.getBoundingClientRect().y <= 100 ){
//         scrollBy(0,-10)}
//     if (the_player.getBoundingClientRect().x >= 1350){
//           scrollBy(10,0)
//         }


// }


// function move_up_left() {

//   if (a <= 100 || d <= 100 ) {
//     return true 
//   } else {
//     d-=10
//     a-=10
//     the_player.style.left = `${d}px`
//     the_player.style.top = `${a}px`
    
//    }

//   if (the_player.getBoundingClientRect().y <= 100 ){
//     scrollBy(0,-10)}
//     if (the_player.getBoundingClientRect().x <= 150){
//       scrollBy(-10,0)}
// }




document.onkeydown = checkKey;

function checkKey(e) {

    
    if (e.keyCode == '87') {move_up() }

    else if (e.keyCode == '83') {move_down() }

    else if (e.keyCode == '68') {move_right()  }

    else if (e.keyCode == '65') {  move_left() }

    else if (e.keyCode == `32`) {e.preventDefault() ;attack() }

              //   until know they are make problem with the liner move 

    // if ((e.keyCode == "87" && "68") ) {move_up() ; move_right()}           

    // if ((e.keyCode == "68" && "87") ) {move_up_right()}           

    
    // if (e.keyCode == "87" && "65") {move_up_left()}

    // if (e.keyCode == "65" && "87") {move_up_left()}



    // else if (e.keyCode == "83" && "65") {move_down_left()}

    // else if (e.keyCode == "83" && "68") {move_down_right()}



}

// variable to detect the moving 

// is_player_moving_now = false 

// setInterval(()=>{if (is_player_moving_now === true ){ is_player_moving_now = false}},10)


// gold
let goldcounter = +localStorage.getItem(`goldcounter`) || 5000
let resultGold = document.querySelector(`#resultGold`)

function show_storeg_gold(){
  localStorage.setItem(`goldcounter`, goldcounter)
  resultGold.innerHTML = `gold ${localStorage.getItem(`goldcounter`)}`
}


show_storeg_gold();




// generater_gold

let generateGoldTims = 0
let golds = document.querySelector(`#golds`)

function generateGold() { 
  let gold = document.createElement(`div`)
  golds.appendChild(gold)
  gold.classList.add(`gold`)
  gold.style.top = `${ Math.floor((Math.random() * 4500) + 100)}px`
  gold.style.left = `${Math.floor((Math.random() * 3700) + 100)}px`
  generateGoldTims += 1
}

setInterval(generateGold, 10000)


// incresed gold 

//############################################## auto incresed 



function autoincresGold() {
  resultGold.innerHTML = `gold ${goldcounter}`
  goldcounter+= 10
}

// setInterval (autoincresGold , 1000)


// #########################################  incresed by colect 


let gold_in_the_map = []

setInterval(()=> {
  gold_in_the_map = document.querySelectorAll(`.gold`)
} , 1000)


// ######################################## colect gold
setInterval(()=>{if(goldColectAbility===false){goldColectAbility=true}},1000)
goldColectAbility=true;
setInterval(
  ()=>{gold_in_the_map.forEach((e)=>{
  
  let player_top = +the_player.style.top.slice(0,+the_player.style.top.length-2)

  let gold_item_top=+e.style.top.slice(0, +e.style.top.length-2)

  let player_left = +the_player.style.left.slice(0,+the_player.style.left.length-2 )

  let gold_item_left = +e.style.left.slice(0, +e.style.left.length-2)


  if (   player_top >= gold_item_top-50 && player_top <= gold_item_top+50   ) 
  
  {
    if(player_left >= gold_item_left-50 && player_left <= gold_item_left+50 ){


      if(goldColectAbility){e.remove() ; goldcounter += 100 }

      goldColectAbility=false;

      show_storeg_gold()
      
    }
  } 
})}
 ,10) 

// make event 


// wood 


let woodCounter = +localStorage.getItem(`woodCounter`) || 500 ;

let resultWood = document.querySelector(`#wood_result`)

function show_storeg_wood() {

  localStorage.setItem(`woodCounter`,woodCounter)

  resultWood.innerHTML = `wood ${localStorage.getItem(`woodCounter`)}` ; 
  
}

show_storeg_wood();




///################# generater  wood
let generateWoodTims = 0
let woods = document.querySelector(`#woods`)

function generateWood() { 
  let wood = document.createElement(`div`)
  woods.appendChild(wood)
  wood.classList.add(`wood`)
  wood.style.top = `${ Math.floor((Math.random() * 4500) + 100)}px`
  wood.style.left = `${Math.floor((Math.random() * 3700) + 100)}px`
  generateWoodTims += 1
}

setInterval(generateWood, 10000)









//################# incresed wood 


let wood_in_the_map = []

setInterval(()=> {
  wood_in_the_map = document.querySelectorAll(`.wood`)
} , 1000)


//#################### colect wood
setInterval(()=>{if(woodColectAbility===false){woodColectAbility=true}},1000)

woodColectAbility=true;

setInterval(()=>{wood_in_the_map.forEach((e)=>{
  
  let player_top = +the_player.style.top.slice(0,+the_player.style.top.length-2)

  let wood_item_top=+e.style.top.slice(0, +e.style.top.length-2)

  let player_left = +the_player.style.left.slice(0,+the_player.style.left.length-2 )

  let wood_item_left = +e.style.left.slice(0, +e.style.left.length-2)


  if (   player_top >= wood_item_top-50 && player_top <= wood_item_top+50   ) 
  
  {
    if(player_left >= wood_item_left-50 && player_left <= wood_item_left+50 ){
      
      if(woodColectAbility){e.remove() ; woodCounter += 10 } 
      show_storeg_wood();
      woodColectAbility=false;
    }
  } 
})} ,10) 





  
// open storeg 

let btn_s = document.querySelector(`#btn_s`)
let storeg = document.querySelector(`#storeg`)

let open_storeg = false 
btn_s.onclick = ()=> {
  if (open_storeg === false) {storeg.style.transform=`translate(-103%,10%)`;open_storeg=true} else { storeg.style.transform=`translate(0%,10%)`;open_storeg=false}
}
  

// open shop 

let btn_sh = document.querySelector(`#btn_sh`)
let shop = document.querySelector(`#shop`)

let open_shop = false 
btn_sh.onclick = ()=> {
  if (open_shop === false) {shop.style.transform=`translate(2%,10%)`;open_shop=true} else { shop.style.transform=`translate(-103%,10%)`;open_shop=false}
}



// show and hide detils of item in the storeg or in the shop 

let item_info = document.querySelector(`.item-info`)

let grid_item = document.querySelector(`.grid-item`)

grid_item.onmouseover = ()=>{item_info.style.visibility=`visible`}

grid_item.onmouseleave = ()=>{item_info.style.visibility=`hidden`}

// moving the items 

let map = document.querySelector(`#map`)

// detecting the mous place 

let the_mouse_place_now = document.querySelector(`#the_mouse_place_now`)

let the_mouse_place_nowX = the_mouse_place_now.style.top
let the_mouse_place_nowY = the_mouse_place_now.style.left

document.onmousemove = function detected_mous(e){

  the_mouse_place_now.style.top=`${e.clientY+window.pageYOffset}px`
  the_mouse_place_now.style.left=`${e.clientX+window.pageXOffset}px`
  the_mouse_place_nowX = the_mouse_place_now.style.top
  the_mouse_place_nowY = the_mouse_place_now.style.left 

}

document.onscroll=()=>{

  the_mouse_place_now.style.top =`${the_mouse_place_nowX + window.pageYOffset}px`
  the_mouse_place_now.style.left =`${the_mouse_place_nowY + window.pageXOffset}px`
  the_mouse_place_nowX = the_mouse_place_now.style.top
  the_mouse_place_nowY = the_mouse_place_now.style.left 
}




//  moving and building  the item 
let moving_item = false

let buil_item = false

let grid_item_shop = document.querySelector(`.grid-item-shop`)

let for_moving_the_item = document.querySelector(`#for_moving_the_item`)

let builded = document.querySelector(`#builded`)



// moving the item (will fix it for the item non able to build like wapon)122

grid_item_shop.onclick = (e)=>{
  let item = document.createElement(`div`)
  for_moving_the_item.appendChild(item)
  item.style.backgroundColor = grid_item_shop.style.backgroundColor 
  // item.classList.add(`grid-item`)
  item.id=`item_to_move`
  item.style.width = `50px`
  item.style.height = `50px`
  item.style.position = `absolute`
  item.style.top = `${e.clientY}px`
  item.style.left = `${e.clientX}px`
  item.style.opacity=`65%`
  // item.style.transform=`200ms`
  moving_item = true
}




document.addEventListener(`mousemove` , function move_item1(e) {
  if (moving_item === true ){
  let item_to_move = document.querySelector(`#item_to_move`)
  item_to_move.style.top = `${e.clientY+window.pageYOffset }px`
  item_to_move.style.left = `${e.clientX+window.pageXOffset }px` 
  buil_item = true
}})


document.addEventListener( `scroll` , function move_item2() { // it is not working now serch for it 
  if (moving_item === true ){
  let item_to_move = document.querySelector(`#item_to_move`)
  item_to_move.style.top = `${the_mouse_place_nowX }px`
  item_to_move.style.left = `${the_mouse_place_nowY }px` 
  buil_item = true
}})

// building sestem (will fix it for the item non able to build like wapon)

        // there is else make the magnatig to the place of the another building by using top+left of anther item


document.onclick = ()=>{   
      if (moving_item === true ){ if (buil_item) { if (goldcounter >= 30) {
      let item_to_buil = document.querySelector(`#item_to_move`)
      let build_item=document.createElement(`div`)
      builded.appendChild(build_item)
      build_item.style.backgroundColor = item_to_buil.style.backgroundColor
      build_item.style.position = item_to_buil.style.position
      build_item.style.top = item_to_buil.style.top
      build_item.style.left = item_to_buil.style.left
      build_item.style.width = item_to_buil.style.width
      build_item.style.height = item_to_buil.style.height
      // moving_item = false // if u but that istad of removing the item it will build another time becaus it is exist till now 
      // item_to_buil.remove() // we need to do it with right click to have the ability to multy biulde
      goldcounter -= 30
      show_storeg_gold()
      document.oncontextmenu = (e)=> {
               e.preventDefault()
              item_to_buil.remove()
              buil_item = false
              moving_item = false
      }
      } else {
        let item_to_buil = document.querySelector(`#item_to_move`)
        item_to_buil.remove();
        buil_item = false
        moving_item = false
       }
      } 
    }
  }


//  the essention wopown of the player (sowrd)

let main_weapon = document.querySelector(`#main_weapon`)

let turn = 0
main_weapon.style.top = `${a-2}px`
main_weapon.style.left = `${d+45}px`


function attack() { // i can make the toutch between weapon and the monster , when i make rotate for the weapon top and left stel the same
  // فكرة حل  انشا عنصر مختفي ك دائرة و طبق عليه مجال الضرب طبعا بعد ان تربط بين السلاح و اللاعب بكل الاحوال 

  main_weapon.style.transition=`0.2s linear`

  turn+=360
  main_weapon.style.transform=`rotate(${turn}deg)`
  if (turn === 360) {turn === 0}

  // damaging the monsters
  let monster = document.querySelectorAll(`#monster_alive`)
  
  for (let i = 0 ; i <= monsters_exist.length-1 ; i++ ) {
    
    // if(monster[i] != undefined) {
      if (  parseInt(main_weapon.style.top) >= monsters_exist[i].mtop-50  && parseInt(main_weapon.style.top) <= monsters_exist[i].mtop+50   ) 
  
      {
        if( parseInt(main_weapon.style.left) >= monsters_exist[i].mleft-50 &&parseInt(main_weapon.style.left)  <= monsters_exist[i].mleft+50 ){
          if (monsters_exist[i].hp > 0){
            monsters_exist[i].hp -= 500
            console.log(monsters_exist[i].hp) 
          } else if (monsters_exist[i].hp <= 0){
            monsters_exist.splice(i,1)

            monster[i].remove()
            console.log(monsters_exist[i].hp)
          }
        }
      }
    // }
  }




}

// setInterval(()=>{
  
//     main_weapon.style.top = `${a-2}px`
//     main_weapon.style.left = `${d+45}px`
  
// },10) 



// generat the monsters

let monsters_exist = []


let monsters = document.getElementById(`monsters`)

let monster_in_ar = { 
   // مبدايا المشكلة انه بحول هذا قبل ما يتم اضافته ل ال مصفوفة // الحل اضافة القيمة مباشرة لعزل الربط بين الااصلي و المضاف ل ال مصفوفة 
  div :`<div hp="500" mood="mooving" class="monster" id="monster_creat" ></div>`,
  hp : 500 ,
  mood : `mooving` ,
  mtop : 0,
  mleft : 0,
  status: `not exest`,
  // بحاول هون اكو ن اكثر برمجية و احول المكان ل متغير ثم وضعه بشكل دائم على العنصر 
  }
  
  setInterval(()=>{
    if ( monsters_exist.length < 10 ){
          monsters_exist.push(
            { 
             
             div :`<div hp="500" mood="mooving" class="monster" id="monster_creat" ></div>`,
             hp : 500 ,
             mood : `mooving` ,
             mtop : 0,
             mleft : 0,
             status: `not exest`,
             attackMood:`hit`,
             }
           )
    
          monsters_exist.forEach((e)=>{
            if (e.status != `exest`){
              monsters.innerHTML += e.div
            //  monsters.insertAdjacentHTML ( `beforeend` , e.div)
              e.status = `exest`
              } else {true}
}
)
}
let monster_creat = document.querySelectorAll(`#monster_creat`)

    monster_creat.forEach((e,i)=>{ 

      e.style.top= `${monsters_exist[i].mtop}px`
      e.style.left= `${monsters_exist[i].mleft}px`
      setTimeout(()=>{e.id = `monster_alive`;monsters_exist[i].div =`<div hp="500" mood="mooving" class="monster" id="monster_alive" ></div>`},10)
      // console.log(monsters_exist.length,monsters.children.length)
      
     }
    )
  },1000)





// moving the monsters (temporarly) 

// moving to the player

        // it was good till we change the page object to keys object then all of the monster take the same top and left awlwes
        // the problem was with the object original becaus it is change and it have already salved by adding obj not variable have a obj

setInterval(()=>{ 
  let monster = document.querySelectorAll(`#monster_alive`)

  for (let i = 0 ; i <= monsters_exist.length-1 ; i++ ) {
    
    if(monster[i] != undefined) {
      if (monsters_exist[i].mood === `mooving`){ 
      let etop = monsters_exist[i].mtop
      let eleft = monsters_exist[i].mleft
    if (monsters_exist[i].mtop > a + 200 ) { monsters_exist[i].mtop -=5} else if (monsters_exist[i].mtop < a -200 ) {monsters_exist[i].mtop +=5 }
    if (monsters_exist[i].mleft > d +200 ) {monsters_exist[i].mleft -=5} else if (monsters_exist[i].mleft < d - 200 ){monsters_exist[i].mleft +=5}
    monster[i].style.top =`${monsters_exist[i].mtop}px`
    monster[i].style.left=`${monsters_exist[i].mleft}px`
    if (monsters_exist[i].mtop <= a+200 && monsters_exist[i].mtop >= a-200 && monsters_exist[i].mleft <= d+200 && monsters_exist[i].mleft >= d-200) {
      monsters_exist[i].mood = "arrived" } else { monsters_exist[i].mood = "mooving"  }
      monster[i].setAttribute("mood",`${monsters_exist[i].mood}`)
    }
   // global and local scoop for etop - eleft
    }
   }

},10)

// moving monster around the player 

let num2 = []
let num3 = []

function num() {
  return Math.floor((Math.random() * (180 - -180) + -180))
}
// for changing top 

setInterval(()=>{
  if(num2.length < monsters_exist.length)
  num2.push(num())
},1000)

// setInterval(()=>{if(num2.length = monsters_exist.length){ num2=[]}},10000)

// for changing left 

setInterval(()=>{
  if(num3.length < monsters_exist.length)
  num3.push(num())
},1000)

// setInterval(()=>{if(num3.length = monsters_exist.length){ num3=[]}},10000)

// the time of set interval shoud give the time to all the monster to move ( take the top and left to move ) if we do not use the clear of the array the monster will take place and stop (preparing to attak)




setInterval(()=>{


  
  let monster = document.querySelectorAll(`#monster_alive`)
  
  for (let i = 0 ; i <= monsters_exist.length-1 ; i++ ) {
    
    if(monster[i] != undefined) {
      if (monsters_exist[i].mood === `arrived`){ 

        // let etop = +monster[i].style.top.slice(0,+monster[i].style.top.length-2)
        // let eleft = +monster[i].style.left.slice(0,+monster[i].style.left.length-2)
        // we do not need that becaus they are in global scoop i think , and now we work with the object 

        
          if  (monsters_exist[i].mtop > a + num2[i]  ) {  monsters_exist[i].mtop -=1 } ; if (monsters_exist[i].mtop < a +num2[i]  ) {  monsters_exist[i].mtop +=1 } 
        

        if (monsters_exist[i].mleft > d  + num3[i]  ) { monsters_exist[i].mleft -=1 } ; if (monsters_exist[i].mleft < d + num3[i]  ){  monsters_exist[i].mleft+=1 } 
      monster[i].style.top =`${monsters_exist[i].mtop}px`
      monster[i].style.left=`${monsters_exist[i].mleft}px` 

      if ( monsters_exist[i].mtop === a + num2[i] && monsters_exist[i].mleft === d  + num3[i] ) {
        monsters_exist[i].mood = "attack" } else { monsters_exist[i].mood = "arrived"  }
        monster[i].setAttribute("mood",`${monsters_exist[i].mood}`)
      }


     }
     }
     
},10)



// attack the target ^_^ player for just now 

//hit 

setInterval(()=>{
  let monster = document.querySelectorAll(`#monster_alive`)
  
  for (let i = 0 ; i <= monsters_exist.length-1 ; i++ ) {
    
    if(monster[i] != undefined) {
      if (monsters_exist[i].mood === `attack`){
        if(monsters_exist[i].attackMood === `hit`){
          setTimeout(()=>{
            if  (monsters_exist[i].mtop > a   ) {  monsters_exist[i].mtop -=1 } else if (monsters_exist[i].mtop < a ) {  monsters_exist[i].mtop +=1 } 
            if (monsters_exist[i].mleft > d ) { monsters_exist[i].mleft -=1 } else if (monsters_exist[i].mleft < d ){  monsters_exist[i].mleft+=1 }
            monster[i].style.top =`${monsters_exist[i].mtop}px`
            monster[i].style.left=`${monsters_exist[i].mleft}px`
          },1000)
          if (monsters_exist[i].mtop <= a+200 && monsters_exist[i].mtop >= a-200 && monsters_exist[i].mleft <= d+200 && monsters_exist[i].mleft >= d-200) {
            monsters_exist[i].mood = "attack" } else { monsters_exist[i].mood = "mooving"  }
            monster[i].setAttribute("mood",`${monsters_exist[i].mood}`)
            if(monsters_exist[i].mtop === a && monsters_exist[i].mleft === d){
              monsters_exist[i].attackMood = `return`
          }
        } 
        }
    }

}
},2)

//return 

setInterval(()=>{
  let monster = document.querySelectorAll(`#monster_alive`)
  
  for (let i = 0 ; i <= monsters_exist.length-1 ; i++ ) {
    
    if(monster[i] != undefined) {
      if (monsters_exist[i].mood === `attack`){
        if(monsters_exist[i].attackMood === `return`){
             if  (monsters_exist[i].mtop > a + num2[i]  ) {  monsters_exist[i].mtop -=1 } ; if (monsters_exist[i].mtop < a +num2[i]  ) {  monsters_exist[i].mtop +=1 } 
        

             if (monsters_exist[i].mleft > d  + num3[i]  ) { monsters_exist[i].mleft -=1 } ; if (monsters_exist[i].mleft < d + num3[i]  ){  monsters_exist[i].mleft+=1 } 
               monster[i].style.top =`${monsters_exist[i].mtop}px`
               monster[i].style.left=`${monsters_exist[i].mleft}px`
           
            if (monsters_exist[i].mtop <= a+200 && monsters_exist[i].mtop >= a-200 && monsters_exist[i].mleft <= d+200 && monsters_exist[i].mleft >= d-200) {
            monsters_exist[i].mood = "attack" } else { monsters_exist[i].mood = "mooving"  }
            monster[i].setAttribute("mood",`${monsters_exist[i].mood}`)
            if(monsters_exist[i].mtop === a + num2[i] && monsters_exist[i].mleft === d  + num3[i]){
              monsters_exist[i].attackMood = `hit` }
        } 
        }
    }

}
},30)



// ملاحظات مهمة ل القادم ل تحديد رقم المونستر و ربطه ب رقمه في ال مصفوفة سنحتاج 
// forEach((e,i)=>{}) i for the index , e for the value (object)

