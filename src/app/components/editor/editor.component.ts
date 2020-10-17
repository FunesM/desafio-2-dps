import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  init(x) {

  string= document.getElemntById('text').value;
  
			if (x=="h") {document.getElementById('txtbox').style.display='none';document.getElementById('text').style.display='block';}
			if (x=="s") {document.getElementById('txtbox').style.display='block';document.getElementById('text').style.display='none';}
			
			document.getElementById('text').value = document.getElementById('txtbox').innerHTML;
			

			if (x!="h" || x!="s") document.execCommand(x,false,null);
			document.getElementById('txtbox').focus();
}

}
