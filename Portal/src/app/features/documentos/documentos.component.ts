import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  lShow = false;

  MostraFiltro(){
    this.lShow = !this.lShow;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
