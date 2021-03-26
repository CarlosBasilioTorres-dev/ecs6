const data = {
    'Front': 'Carlos',
    'Back' : 'Sandra',
    'Architect' : "Hugo"
};


let {Front,...all} = data;

console.log(Front,all)

const obj = {
    ...data,
    'Front':'Basilio'
}

console.log(obj)


const helloWorld = () =>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=>resolve("terminado"),3000)
        : reject(new Error('Test Error'))
    })
}


helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'));