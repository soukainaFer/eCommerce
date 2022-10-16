import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any[] = [];
  categories:any[] = [];
  cartProducts:any[] = []
  constructor( private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    
  }
getProducts(){
  this.service.getAllProducts().subscribe((res:any)=> {
    this.products = res
    
  })
}

getCategories(){
  this.service.getAllCategories().subscribe((res:any)=> {
    console.log(res)
    this.categories = res
    
  })
}
filterCategory(event:any) {
  let value = event.target.value;
  if(value == "all"){
    this.getProducts()
  }else {

  
 this.getProductsCategory(value)
}
}

getProductsCategory(keyword:string) {
  
  this.service.getProductsByCategory(keyword).subscribe((res:any) => {
    this.products = res
  })
}
addToCart(event:any) {
  if("cart" in localStorage) {
    
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  
}
}
