const setText=data=>{
    myContent.textContent=data
}

const getData= ()=>{
    return new Promise((resolve,reject)=>{
    setText('Solicitando autorizacion')
    setTimeout(()=>{
        resolve(true)
    },1000)
    })
}

const showData=()=>{
    return new Promise((resolve,reject)=>{
        setText('Esperando a mostrar la informacion')
        setTimeout(()=>{
            resolve({name:'Carol'})
        },2000)
    })
}

btn.addEventListener('click',()=>{
    getData().then(authorization=>{
        if (authorization){
            return showData()
        }
    }).then(user=>{
        setText(user.name)
    })
})