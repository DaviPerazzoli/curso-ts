export { };

class Box<T> {
    private _item: T;

    constructor(item: T) {
        this._item = item;
    }

    get item () {
        return this._item;
    }

    set item (item: T) {
        this._item = item;
    }
}

const boxString = new Box<string>('papel');

console.log(boxString.item);

const boxNumber = new Box<number>(11);

console.log(boxNumber.item);

const boxNumberOrString = new Box<string | number>('11');
console.log(boxNumberOrString.item);

// Ex2

class Student<T, U>{
    private id: U;
    private nome: T;

    constructor(id: U , nome: T){
        this.id = id;
        this.nome = nome;
    }

    printValue(): void {
        console.log('Id: ',this.id,'Nome: ',this.nome);
    }
}

const student = new Student<string,number>(18,'davi');
const student2 = new Student<string,string>('19','eduard');

student.printValue();
student2.printValue();