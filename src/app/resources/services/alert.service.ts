import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
   

  public success(message: string, title?: string): boolean{
    this.showAlert(title, message, 'success')
    return true;
  }

  public info(message: string, title?: string): boolean{
    this.showAlert(title, message, 'info')
    return true;
  }

  public error(message: string, title?: string): boolean{
    this.showAlert(title, message, 'error')
    return true;
  }

  private showAlert(title?: string, message?: string, icon?: SweetAlertIcon): boolean {    
    // Swal.fire(title, message, icon)    
  
    Swal.fire({
      title,
      text: message,
      template: '#meu',
      color: '#b10822',
      icon,
      iconColor: '#b10822',      
      background: '#f3f9ff',
      confirmButtonColor: '#b10822',  
      confirmButtonText: 'BLZ',      
      focusConfirm: false,
    })

    return true;
  }  
}
