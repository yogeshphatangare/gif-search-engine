import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  searchTerm = ''
  clicked = false;
  selected: string = 'Show All';
  constructor(private service: DataService) { }

  public search(): void {
    if (this.searchTerm.length) {
      this.service.setSearchText(this.searchTerm)
    }
  }
  update(value: string) {
    this.clicked = false;
    this.selected = value;
  }

}

