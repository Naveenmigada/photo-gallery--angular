import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import data from'../data.json'

@Component({
  selector: 'app-dialog-body',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})

export class DialogBodyComponent implements OnInit{

imageTitle:string='';
imageData:any=''
imageUrl: string = '';
presntItem: { title: any; datas: any;images:any } = { title: '', datas: '',images:'' };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{title:any;datas:any;images: string }){}
  ngOnInit(): void {
    this.presntItem = this.data;
    this.imageTitle = this.presntItem.title;
    this.imageData = this.presntItem.datas;
    this.imageUrl = this.presntItem.images;
    }
}

