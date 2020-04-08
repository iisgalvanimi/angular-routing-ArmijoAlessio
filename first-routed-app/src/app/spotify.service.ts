import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=Balla&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBLPhGqcQj7VQ2wxG7pynEZtAW-tyNp_3QSl4Gmk34FEAYQew8KQ_QfP9YsV5efIQAC_lwjx2a-5_QsFwyVxf63Jj8VSDpziNntDR34pdGsPM-dL05aHfLEvg_PHENb2jKcP3qq2t4'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
