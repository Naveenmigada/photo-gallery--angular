import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import data from'../data.json'
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, MatDialogModule, MatButtonModule,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  galleryImagesList:any
  readonly dialog = inject(MatDialog);
  constructor(private readonly matDialog: MatDialog,private http:HttpClient) {
    this.getServiceDetailsList()

  }
  openDialog(cardData:any) {
    this.matDialog.open(DialogBodyComponent, {
      width: '50%',
      height:'600px',
      disableClose: true,
      data: cardData

    });
  }

  public getJson(folder: string, file: string) {
    return this.http.get(folder + '/' + file + '.json');
  }



  getServiceDetailsList() {
    this.getJson('assets/json', 'gallery').subscribe((result: any) => {
    console.log(result);
    this.galleryImagesList=result;
  })
}}
