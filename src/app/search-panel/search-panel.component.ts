import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  searchTerm = ''
  constructor(private service: DataService) { }

  public search(): void {
    if (this.searchTerm.length) {
      this.service.setSearchText(this.searchTerm)
    }
  }

}

