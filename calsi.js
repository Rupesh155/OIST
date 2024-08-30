
 let btn=  document.querySelectorAll('button')
 let inp=  document.querySelector('input')

   console.log(btn,"heheh");


   for(let i of btn){
    i.addEventListener('click',(e)=>{
        // console.log('hehehe');
      let text=e.target.innerText
        // console.log(  e.target.innerText);
        if(text==='C'){
            inp.value=''
        }
        else if(text==='='){
            inp.value=eval(inp.value)
        }
        else{
            inp.value=inp.value+text
        }
        
    })

   }