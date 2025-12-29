'use strict';
import { Pilha } from "./classe.js";

let MinhaPilha= new Pilha();

MinhaPilha.push(10);
MinhaPilha.push(20);
MinhaPilha.push(30);
MinhaPilha.push(40);

MinhaPilha.pop();
MinhaPilha.push(50);

MinhaPilha.clear();
MinhaPilha.isEmpty();

MinhaPilha.listar();