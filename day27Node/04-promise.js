let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if (true) {
            resolve({name: 'zs'})
        }else {
            reject('失败了')
        }
    }, 2000);
})
promise.then( result => console.log(result))
       .catch(error => console.log(error))