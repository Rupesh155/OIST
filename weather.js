
  let inp=  document.querySelector('input')
  let btn=  document.querySelector('button')
 let h4=  document.querySelector('h4')
 let h6=  document.querySelector('h6')
  btn.addEventListener('click',()=>{
    let city=inp.value
    let apiKey='9f6290d6cda9a36a63755fadee71f83d'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data,"dataat");
    h4.innerText=data.name
    h6.innerText=data.main.temp
})
  })

  // node -v

