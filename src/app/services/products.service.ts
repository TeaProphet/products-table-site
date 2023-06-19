import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {IProduct} from '../models/product'
import {products as localProducts} from "../data/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {
  }

  products: IProduct[] = []
  searchedProduct: IProduct

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      retry(2),
      tap(products => this.products = products)
    )
  }

  get(productID: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${productID}`).pipe(
      retry(2),
      tap(product => this.searchedProduct = product)
    )
  }
}
