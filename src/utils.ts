//Получаем все картинки в виде строк
import fb from './image/firebase.svg';
import js from './image/js.svg';
import ng from './image/nginx.svg';
import rc from './image/react.svg';
import rx from './image/redux.svg';
import ts from './image/ts.svg';
import wp from './image/wp.svg';
import ws from './image/ws.svg';

//массив имеющихся картинок
export const cardArray: Array<string> = [fb, rc, js, rx, ng, ts, wp, ws];

// дублируем массив
export const dblCardArray: Array<string> = cardArray.concat(cardArray)

// перемешевание (код со стэковерфлов) похоже на алгоритм «Тасование Фишера — Йетса» (learn.javascript.ru)
// но сделано через while
export function shuffleCards<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}