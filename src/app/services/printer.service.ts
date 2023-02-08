import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  
  constructor() { }
  
  build(parent:any,stack:any) {
    const id = parent.id; 
    stack.forEach((childObj:any)=> {
      if (childObj.parent === id) {
        if(!parent.children){
          parent.children = [] 
        }
        parent.children.push(childObj);
      }
      
    });
    if(parent.children){
      console.log(parent.children)
      parent.children = this.orderArray(parent.children)
    }
    if(parent.children){
      parent.children.forEach((child:any)=> {
        this.build(child, stack);
      })
    }
   
    
    return parent
    
  }

  orderArray(items:any){
    return items.sort(function (a:any, b:any) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }

  getStack(){
    return [
            {'id' : 17, 'parent' : 6, 'name' : 'suspenso'},
            {'id' : 18, 'parent' : 6, 'name' : 'románticas'},
            {'id' : 19, 'parent' : 6, 'name' : 'acción'},
            {'id' : 2, 'parent' : 1, 'name' : 'libros'},
            {'id' : 4, 'parent' : 1, 'name' : 'ropa'},
            {'id' : 7, 'parent' : 2, 'name' : 'fantasía'},
            {'id' : 10, 'parent' : 3, 'name' : 'televisiones'},
            {'id' : 11, 'parent' : 3, 'name' : 'computadoras'},
            {'id' : 21, 'parent' : 15, 'name' : 'faldas'},
            {'id' : 22, 'parent' : 15, 'name' : 'pantalones'},
            {'id' : 23, 'parent' : 15, 'name' : 'blusas'},
            {'id' : 24, 'parent' : 15, 'name' : 'sombreros'},
            {'id' : 25, 'parent' : 15, 'name' : 'ropa interior'},
            {'id' : 26, 'parent' : 25, 'name' : 'calzones'},
            {'id' : 27, 'parent' : 25, 'name' : 'brasieres'},
            {'id' : 28, 'parent' : 27, 'name' : 'playtex'},
            {'id' : 28, 'parent' : 27, 'name' : 'curvation'},
            {'id' : 28, 'parent' : 27, 'name' : 'hannes'},
            {'id' : 12, 'parent' : 11, 'name' : 'apple'},
            {'id' : 13, 'parent' : 11, 'name' : 'lenovo'},
            {'id' : 5, 'parent' : 1, 'name' : 'musica'},
            {'id' : 6, 'parent' : 1, 'name' : 'películas'},
            {'id' : 14, 'parent' : 4, 'name' : 'hombre'},
            {'id' : 15, 'parent' : 4, 'name' : 'mujer'},
            {'id' : 16, 'parent' : 6, 'name' : 'comedia'},
            {'id' : 8, 'parent' : 2, 'name' : 'clásicos'},
            {'id' : 9, 'parent' : 2, 'name' : 'poesía'},
            {'id' : 20, 'parent' : 6, 'name' : 'anime'},
            {'id' : 3, 'parent' : 1, 'name' : 'electrónicos'},
      ];
  }

}
