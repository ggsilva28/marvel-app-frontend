import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() action: any;

  constructor() { }

  ngOnInit(): void {
  }

  execute(){
    if(this.action){
      this.action();
    }
  }

}
