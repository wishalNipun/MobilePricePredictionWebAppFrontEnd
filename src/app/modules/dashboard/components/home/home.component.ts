import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  baseUrl:string='http://localhost:8080/app/user';

  brandList:{code: string, description: string} [] = [  
    {code:'SAMSUNG', description:'SAMSUNG'},
    {code:'Apple', description:'Apple'},
    {code:'realme', description:'realme'},
    {code:'OPPO', description:'OPPO'},
    {code:'Xiaomi', description:'Xiaomi'},
    {code:'Infinix', description:'Infinix'},
    {code:'Lenovo', description:'Lenovo'},
    {code:'Nokia', description:'Nokia'},
    {code:'GIONEE', description:'GIONEE'},
    {code:'vivo', description:'vivo'},
    {code:'ASUS', description:'ASUS'},
    {code:'Motorola', description:'Motorola'},
    {code:'LG', description:'LG'},
    {code:'POCO', description:'POCO'},
    {code:'HTC', description:'HTC'},
    {code:'Google Pixel', description:'Google Pixel'},
    {code:'IQOO', description:'IQOO'},
  ]
  
  modelList:{code: string, description: string} [] = [  
    {code:'Galaxy', description:'Galaxy'},
    {code:'iPhone', description:'iPhone'},
    {code:'Redmi', description:'Redmi'},
    {code:'Zenfone', description:'Zenfone'},
    {code:'Hot', description:'Hot'},
    {code:'Other', description:'Other'},
  ]
 
  colorList:{code: string, description: string} [] = [  
    {code:'Black', description:'Black'},
    {code:'Gold', description:'Gold'},
    {code:'White', description:'White'},
    {code:'Blue', description:'Blue'},
    {code:'Silver', description:'Silver'},
    {code:'Other', description:'Other'},
  ]

  memoryList:{code: string, description: string} [] = [  
    {code:'1', description:'1 GB'},
    {code:'2', description:'2 GB'},
    {code:'3', description:'3 GB'},
    {code:'4', description:'4 GB'},
    {code:'6', description:'6 GB'},
    {code:'8', description:'8 GB'},
    {code:'12', description:'12 GB'},
    {code:'16', description:'16 GB'},
  ]

  storageList:{code: string, description: string} [] = [
    {code:'4', description:'4 GB'},  
    {code:'8', description:'8 GB'},
    {code:'16', description:'16 GB'},
    {code:'32', description:'32 GB'},
    {code:'64', description:'64 GB'},
    {code:'128', description:'128 GB'},
    {code:'256', description:'256 GB'},
    {code:'512', description:'512 GB'},
    {code:'1024', description:'1 TB'},
  ]

  mobileForm = new FormGroup({
      brand: new FormControl('',[]),
      color: new FormControl('',[]),
      model: new FormControl('',[]),
      memory: new FormControl('',[]),
      storage: new FormControl('',[])
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  checkBtnOnHandle():void{
    if (!this.mobileForm.invalid) {
      let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      this.http.post(
        this.baseUrl,
        JSON.stringify(
          {
            brand: this.mobileForm.value.brand,
            color: this.mobileForm.value.color,
            model: this.mobileForm.value.model,
            memory: this.mobileForm.value.memory,
            storage: this.mobileForm.value.storage,
          }
          ),
          options).subscribe(
            (response:any) => {
  
            },
            error => {
              console.error('Error submitting form data:', error);
            }
        );
  
        console.log(this.mobileForm.value.brand,
          this.mobileForm.value.color,
          this.mobileForm.value.model,
          this.mobileForm.value.memory,
          this.mobileForm.value.storage,)
    }
    
  }
  resetBtnOnHandle():void{
    this.mobileForm.reset(
      {
        brand :'',
        model : '',
        color : '',
        memory : '',
        storage : ''
      }
    )
  }
}
