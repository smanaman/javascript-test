let form = document.getElementById('form')
// let title=document.getElementById('title')
// let imgurl=document.getElementById('imgurl')
// let wedlink=document.getElementById('link')
// let prise=document.getElementById('prise')

let body=document.getElementById('root')
form.addEventListener('submit', (event) => {
    event.preventDefault();


    let obj = 
        {
            title: document.getElementById('title').value,
            imgurl: document.getElementById('url').value,
            wedlink: document.getElementById('link').value,
            prise: document.getElementById('prise').value

        }
    
    

   

let pro=document.createElement('div')

pro.className='main'

body.appendChild(pro)


let photo=document.createElement('div')

photo.className='imgparent'

pro.appendChild(photo)

let imges=document.createElement('img')
imges.className='img'
imges.src=obj.imgurl

photo.appendChild(imges)

let h1=document.createElement('div')
h1.className='heading'
h1.textContent=obj.title
pro.appendChild(h1)

let h2=document.createElement('div')
h2.className='price'
h2.textContent=`this proudect price is:-:-${obj.prise}`
pro.appendChild(h2)

let aTag = document.createElement('a');
aTag.setAttribute('href',obj.wedlink);

pro.appendChild(aTag)

let btn=document.createElement('button')
btn.className='button'
btn.textContent='click'

aTag.appendChild(btn)

})