import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-select-image-product-dialog',
  templateUrl: './select-image-product-dialog.component.html',
  styleUrls: ['./select-image-product-dialog.component.scss']
})
export class SelectImageProductDialogComponent extends BaseDialog<SelectImageProductDialogComponent>{

  constructor(dialogRef:MatDialogRef<SelectImageProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string){
    super(dialogRef)
   }

  @Output() options:Partial<FileUploadOptions>={
    accept:".png, .jpg, .jpeg, .gif",
    action:"upload",
    controller:"Product",
    explanation:"Select product image or drag here...",
    isAdminPage:true, 
    queryString:`id=${this.data}`
  };

}
export enum SelectProductImageState{
  Close
}