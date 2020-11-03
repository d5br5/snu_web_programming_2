const cb = (str) => console.log(str + '!!!')

function a(callback) {
    console.log('hi');
    console.log('hello');
    console.log( 3 + 5);

    callback('yureka');
}

a(cb);