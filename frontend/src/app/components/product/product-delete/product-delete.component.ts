import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from './../../shared/dialog.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, 
              private dialogService: DialogService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.readById(+this.route.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    });
  }

  cancel():void {
    this.router.navigate(['/products']);
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.dialogService.showToast('Produto deletado com sucesso.');
      this.router.navigate(['/products']);
    });
  }
}
