import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
    selector: 'app',
    template: `
        <h1>Welcome to MEAN Angular 2 Webpack Minimal Starter</h1>
        <h2><b>Testing HTTP: </b>{{data}}</h2>
    `,
    providers: [
        DataService
    ]
})
export class App {
    data: string;
    constructor(dataService: DataService) {
        dataService.getTestData()
            .subscribe((data) => {
                this.data = data;
            });
    }
}
