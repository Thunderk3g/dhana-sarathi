import { Component } from '@angular/core';
import { DataTransferService } from './data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dhana-sarathi-frontend';
  constructor(private dataService :DataTransferService){}
  data:any[]=[];
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
