const data = {
    'Front': 'Carlos',
    'Back' : 'Sandra',
    'Architect' : "Hugo"
};

const entrys = Object.entries(data);
const values = Object.values(data)

console.log(entrys)
console.log(entrys.length)
console.log(values)


const string = "Hello"

console.log(string.padStart(7,'hi'))

const helloWorld = () =>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=>resolve("terminado"),3000)
        : reject(new Error('Test Error'))
    })
}

const hellowAsync = async ()=>{
    const hello = await helloWorld();
    console.log(hello)
};

hellowAsync()