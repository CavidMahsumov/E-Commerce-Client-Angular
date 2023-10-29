import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { SelectImageProductDialogComponent } from './select-image-product-dialog/select-image-product-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectImageProductDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,MatButtonModule ,
    FileUploadModule
  ]
})
export class DialogsModule { }
