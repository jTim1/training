class Elephant {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
const dumbo = new Elephant('dumbo');
dumbo.getName(); // 'dumbo'

function proxy(fn) {
    return fn();
}
proxy(dumbo.getName());

const newFn = dumbo.getName().bind(dumbo);
proxy(newFn);

function proxyContext(fn, context) {
    console.log(fn.apply(context));
}
proxyContext(dumbo.getName(), dumbo);