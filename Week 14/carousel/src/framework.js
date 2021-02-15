export const createZeElement = (type, props, ...children) => {
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

export class Component {
    constructor() {
    }
    setAttribute(key, value) {
        this.root.setAttribute(key, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.render());
    }
}

class ElementWrapper extends Component {
    constructor(type) {
        this.root = document.createElement(type);
    }
}

class TextWrapper extends Component {
    constructor(text) {
        this.root = document.createTextNode(text);
    }
}
