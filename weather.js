

  let inp=  document.querySelector('input')
  let btn=  document.querySelector('button')



  btn.addEventListener('click',()=>{
    let city=inp.value
    let apiKey='9f6290d6cda9a36a63755fadee71f83d'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data,"dataat");
})
  })


