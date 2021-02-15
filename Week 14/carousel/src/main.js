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
        let currentIndex = 0;
        setInterval(() => {
            const children = this.root.children;
            const nextIndex = (currentIndex + 1) % children.length;

            const current = children[currentIndex];
            const next = children[nextIndex];

            next.style.transition = "none";
            next.style.transform = `translatex(${100 - 100 * nextIndex}%)`;

            setTimeout(() => {
                next.style.transition = "";
                current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
                next.style.transform = `translateX(${- nextIndex * 100}%)`;

                currentIndex = nextIndex;
            }, 16);
        }, 3000);
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