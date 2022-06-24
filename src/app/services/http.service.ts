import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL: string = 'http://192.168.0.4:3009/photo'

  constructor (private http: HttpClient) { this.http = http }

  public async postPhoto (base64Photo: string) {
    const body = {
      imageType: 'base64',
      image: base64Photo
    }
    this.http.post(this.URL, body).subscribe({
      next: async data => {
        await Storage.set({
          key: 'docinfo',
          value: data["EasyOCR"]
        })
        alert(data["EasyOCR"])
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
