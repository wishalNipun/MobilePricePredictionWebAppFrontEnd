import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, AfterViewInit {
  baseUrl: string = 'http://127.0.0.1:8000';
  displayedColumns: string[] = [
    'brand',
    'model',
    'storage',
    'color',
    'memory',
    'predicted_value',
    'save_date',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  private fetchData() {
    const apiUrl = `${this.baseUrl}/allData`;
    this.http.get<ApiResponse>(apiUrl).subscribe(
      (response) => {
        const data = response.data;

        // Format the date before assigning it to the dataSource
        const formattedData = data.map((element) => {
          return {
            ...element,
            save_date: this.formatDate(element.save_date),
            storage: this.formatStorage(element.storage),
            memory: this.formatMemory(element.memory),
          };
        });

        this.dataSource.data = formattedData;
      },
      (error) => {
        console.error('Error fetching data from the backend', error);
      }
    );
  }

  private formatDate(date: string): string {
    const formattedDate = new Date(date);
    return formatDate(formattedDate, 'yyyy-MM-dd hh:mm:ss a', 'en-US');
  }

  private formatStorage(storage: string): string {
    return storage + ' GB';
  }
  
  private formatMemory(memory: string): string {
    return memory + ' GB';
  }
}

interface ApiResponse {
  data: PeriodicElement[];
}
export interface PeriodicElement {
  brand: string;
  model: string;
  storage: string;
  color: string;
  memory: string;
  predicted_value: string;
  save_date: string;
}
