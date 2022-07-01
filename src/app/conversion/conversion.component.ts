import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Convert {
  cc: string
  rate: number
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

convert: Convert[] = [];
currencys : any;
usdRate:number = 0;
eurRate:number = 0;
tengRate:number = 0;
inputIntlet: string = '';
inputDeduction: string= '' ;
uanRate: number = 1;
select1: string  = 'UAH';
select2: string  = 'USD';

constructor(private http: HttpClient){}
  
  changeCurrencyState (name:string){
    if(name === 'select1' || name === 'input1'){
      const cur = this.filterCurrencys()
      this.inputIntlet = (cur[0] * Number(this.inputDeduction) /  cur[1]).toString()

      //console.log(this.select1, this.select2)
    }else if(name === 'select2' || name === 'input2'){
      const cur = this.filterCurrencys()
      this.inputDeduction = (cur[1] * Number(this.inputIntlet) /  cur[0]).toString()
    }
  }
  filterCurrencys(){
    const cur = this.select1 == "UAH"?  1: this.currencys.filter((item:any) => item.name == this.select1)[0].rate
    const cur2 = this.select2 == "UAH"?  1:  this.currencys.filter((item:any) => item.name == this.select2)[0].rate

    return [cur, cur2 ]
  }

  /*changeRatio(cur1:number, cur2:number){
    //внутри этой функции будут меняться элементы полей
    return (cur1/cur2).toString()
  }*/

  ngOnInit(){
    this.http.get<Convert[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .subscribe(convert => { convert
      this.currencys = [
        {
          name: convert[25].cc,
          rate: convert[25].rate
        },
        {
          name: convert[32].cc,
          rate: convert[32].rate
        },
        {
          name: convert[12].cc,
          rate: convert[12].rate
        }
    ]
      this.usdRate = this.currencys[0].rate;
      this.eurRate = this.currencys[1].rate;
      this.inputIntlet =  "1"

      this.inputDeduction = this.usdRate.toString()
    
    })
    
  }

onKeyUp(event: Event){
  this.inputIntlet = (<HTMLInputElement>event.target).value;
  this.inputDeduction = (<HTMLInputElement>event.target).value;
};

}
//(input)="onKeyUp($event)"