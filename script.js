let btn_next_1 = document.getElementById('btn_next_1')
let box_input_1 = document.getElementById('box_input_1')
let box_1 = document.getElementById('box_1')
let btn_next_2 = document.getElementById('btn_next_2')
let box_input_2 = document.getElementById('box_input_2')
let box_2 = document.getElementById('box_2')
let btn_next_3 = document.getElementById('btn_next_3')
let box_input_3 = document.getElementById('box_input_3')
let box_3 = document.getElementById('box_3')
let btn_next_4 = document.getElementById('btn_next_4')
let box_input_4 = document.getElementById('box_input_4')
let box_4 = document.getElementById('box_4')

btn_next_1.addEventListener("click",()=>{
  box_input_1.classList.remove('flex')
  box_input_1.classList.add('hidden')
  box_1.classList.remove('border-[#00023b]')
  box_input_2.classList.remove('hidden')
  box_input_2.classList.add('flex')
  box_2.classList.add('border-[#00023b]')
})
btn_next_2.addEventListener("click",()=>{
  box_input_2.classList.remove('flex')
  box_input_2.classList.add('hidden')
  box_2.classList.remove('border-[#00023b]')
  box_input_3.classList.remove('hidden')
  box_input_3.classList.add('flex')
  box_3.classList.add('border-[#00023b]')
})
btn_next_3.addEventListener("click",()=>{
  box_input_3.classList.remove('flex')
  box_input_3.classList.add('hidden')
  box_3.classList.remove('border-[#00023b]')
  box_input_4.classList.remove('hidden')
  box_input_4.classList.add('flex')
  box_4.classList.add('border-[#00023b]')
})
btn_next_4.addEventListener('click',()=>{
  window.location.href = ("thanks.html")
})