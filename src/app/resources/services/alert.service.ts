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
    Swal.fire({            
      title,
      text: message,            
      color: '#a34200',
      icon,
      iconColor: '#a34200',      
      background: '#f3f9ff',
      confirmButtonColor: '#a34200',  
      confirmButtonText: 'Ok',      
      allowOutsideClick: true,  
      width: '350px',
      heightAuto: true, 
      timer: 5000,
      timerProgressBar: true     
    })

    return true;
  }  
}
