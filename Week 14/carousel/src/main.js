import {Component, createZeElement} from "./framework";

class Carousel extends Component {
    constructor() {
        super();
        this.props = Object.create(null);
    }


    setAttribute(key, value) {
        this.props[key] = value;
    }

    render() {
        this.root = document.createElement("div");
        this.root.classList.add('carousel');
        for (let imgSrc of this.props.images) {
            const imgEl = document.createElement("div");
            imgEl.style.backgroundImage = `url('${imgSrc}')`;
            this.root.appendChild(imgEl);
        }

        // let currentIndex = 0;
        // setInterval(() => {
        //     const children = this.root.children;
        //     const nextIndex = (currentIndex + 1) % children.length;
        //
        //     const current = children[currentIndex];
        //     const next = children[nextIndex];
        //
        //     next.style.transition = "none";
        //     next.style.transform = `translatex(${100 - 100 * nextIndex}%)`;
        //
        //     setTimeout(() => {
        //         next.style.transition = "";
        //         current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        //         next.style.transform = `translateX(${- nextIndex * 100}%)`;
        //
        //         currentIndex = nextIndex;
        //     }, 16);
        // }, 3000);

        let position = 0;

        this.root.addEventListener("mousedown", event => {
           const children = this.root.children;
           let startX = event.clientX;

           const handleMove = event => {
               let x = event.clientX - startX;

               let current = position - ((x - x % 500) / 500);

               for (let offset of [-1, 0, 1]) {
                   let pos = current + offset;
                   pos = (pos + children.length) % children.length;

                   children[pos].style.transition = "none";
                   children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + x % 500}px)`;
               }
           };

            const handleUp = event => {
                let x = event.clientX - startX;

                position = position - Math.round(x / 500);

                for (let offset of [0, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "";
                    children[pos].style.transform = `translateX(${- pos * 500 + offset * 500}px)`;
                }
                document.removeEventListener('mousemove', handleMove);
                document.removeEventListener('mouseup', handleUp);
            };

            document.addEventListener("mousemove", handleMove);
            document.addEventListener("mouseup", handleUp);
        });


        return this.root;
    }
}

let data = [
    'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
    'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
    'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
    'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',];


let a = <Carousel images={data}/>

a.mountTo(document.body);