import { Component, OnInit } from '@angular/core';
import { PrinterService } from "../services/printer.service";

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.sass']
})
export class PrinterComponent implements OnInit {
  tree:any;
  data:any;
  constructor(private printerService:PrinterService) { }

  ngOnInit(): void {
    this.data = JSON.stringify(this.printerService.getStack())
  }
  
  print(){
    const root = {'id' : 1, 'name' : 'root'}
    this.tree = this.printerService.build(root,this.printerService.getStack())
    console.log(this.tree)
  }

}
