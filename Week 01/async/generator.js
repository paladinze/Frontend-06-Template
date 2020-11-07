

const wait = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('switch color');
        }, sec * 1000)
    });
}

async function* numGenerator() {
    let number = 0;
    while (true) {
        await wait(1);
        yield number++;
    }
}

const main = async () => {
    for await(let number of numGenerator()) {
        console.log(number);
    }
}

main()
