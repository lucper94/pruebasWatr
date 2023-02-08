import { Component, OnInit } from '@angular/core';
import { DuplicateRemoverService } from "../duplicate-remover.service";
@Component({
  selector: 'app-unique-array',
  templateUrl: './unique-array.component.html',
  styleUrls: ['./unique-array.component.sass']
})
export class UniqueArrayComponent implements OnInit {

  constructor(private duplicateService:DuplicateRemoverService) { }
  data:any;
  result:any;
  ngOnInit(): void {
    this.data = JSON.stringify(this.duplicateService.data())
  }

  filter(){
    this.result = this.duplicateService.invoque(this.duplicateService.data()).sort(function(a, b){return a-b});
  }

}
