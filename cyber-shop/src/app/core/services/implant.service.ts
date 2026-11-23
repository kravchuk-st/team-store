import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImplantDto } from '../models/implant.model';

@Injectable({ providedIn: 'root' })
export class ImplantService {
  private readonly http = inject(HttpClient);

  private readonly catalogUrl = '/data/implants.json';

  getAll(): Observable<ImplantDto[]> {
    return this.http.get<ImplantDto[]>(this.catalogUrl);
  }
}
