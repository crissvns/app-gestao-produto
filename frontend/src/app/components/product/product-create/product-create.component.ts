import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DialogService } from '../../shared/dialog.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = { name: '', price: null };

  constructor(private productService: ProductService, private dialogService: DialogService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.dialogService.showToast('Produto criado com sucesso.');
      this.router.navigate(['/products']);
    });    
  }
}