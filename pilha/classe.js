'use strict';

class Pilha{
    constructor(){
        this.items = [];
    }

//empilhar 
push(elemento){
    this.items.push(elemento);

}

//desempilhar
pop(){
    return this.items.pop();
}

//ver topo
peek(){
    return this.items[this.items.length - 1];
}

//se a pilha está vazia
isEmpty(){
    let vazio = this.items.length === 0;
    console.log(vazio);
    
}

//limpar a pilha
clear(){
    this.items = [];
}

//mostrar pilha inteira
listar(){
    return document.querySelector('#resultado').innerHTML = this.items;
}
}

export {Pilha}

