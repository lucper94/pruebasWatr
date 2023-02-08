import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicateRemoverService {

  constructor() { }

  invoque(array: any){
    var uniqueArray:  number[] = []
    for (let index = 0; index < array.length; index++) {
      for (let index2 = 0; index2 < array[index].length; index2++) {
        const element = array[index][index2];
        for (let index3 = 0; index3 < element.length; index3++) {
          console.log(element[index3]);
          
          if(!uniqueArray.includes(element[index3]))uniqueArray.push(element[index3]);
        }
      }
    }
    return uniqueArray;
  }

  data()
    {
        return [
            [
                [1, 1, 2],
                [1, 2],
            ],
            [
                [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
                [0, 1, 2, 3, 4],
            ],
            [
                [100, 200, 300, 300, 300, 300, 300, 300],
                [100, 200, 300],
            ],
            [
                [8, 8, 7, 7, 2, 3, 0, 1, 7, 8, 9, 0, 1, 2],
                [8, 7, 2, 3, 0, 1, 9],
            ],
        ];
    }
}
