class Div {
    constructor() {
        this.root = document.createElement("div");
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }

    setAttribute(key, value) {
        this.root.setAttribute(key, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(key, value) {
        this.root.setAttribute(key, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class TextWrapper {
    constructor(text) {
        this.root = document.createTextNode(text);
    }

    setAttribute(key, value) {
        this.root.setAttribute(key, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}


const createZeElement = (type, props, ...children) => {
    let theEl;
    if (typeof type !== 'string') { // create custom element
        theEl = new type;
    } else { // create regular DOM element
        theEl = new ElementWrapper(type);
    }

    // set attrs
    for (let attr in props) {
        theEl.setAttribute(attr, props[attr]);
    }

    // append child nodes
    for (let child of children) {
        if (typeof child === 'string') {
            const textNode = new TextWrapper(child);
            theEl.appendChild(textNode);
            continue;
        }
        theEl.appendChild(child);
    }
    return theEl;
};

let a = <Div id='1'>
    Good day, Ze!
    <span id='x'></span>
    <span id='y'></span>
    <span id='z'></span>
</Div>

a.mountTo(document.body);