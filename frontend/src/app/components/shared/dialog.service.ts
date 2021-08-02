import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private snackBar: MatSnackBar) { }

  public showToast(msg: string, action?: string, hPosition = 'right', vPosition = 'top', duration: number = 3000, isError: boolean = false): void {
    this.snackBar.open(msg, action, {
      duration: duration,
      horizontalPosition: hPosition as MatSnackBarHorizontalPosition,
      verticalPosition: vPosition as MatSnackBarVerticalPosition,
      panelClass: isError ? ['msg-erro'] : ['msg-success']
    });
  }
}