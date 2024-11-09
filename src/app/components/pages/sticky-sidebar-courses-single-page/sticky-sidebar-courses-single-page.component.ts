import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-sidebar-courses-single-page',
  templateUrl: './sticky-sidebar-courses-single-page.component.html',
  styleUrls: ['./sticky-sidebar-courses-single-page.component.scss']
})
export class StickySidebarCoursesSinglePageComponent implements OnInit {

  showList: boolean = true; // Default to show the list view
  currentIndex: number = 0; // Track current section in details view

  // Sections data
  sections = [
    {
      title: '[1]: What is ERP',
      class: 'card-erp',
      items: [
        'ERP stands for Enterprise Resource Planning',
        'ERP is used in all enterprises'
      ]
    },
    {
      title: '[2]: Benefits of ERP solution',
      class: 'card-benefits',
      items: [
        'Organizational Efficiency',
        'Performance',
        'Profitability'
      ]
    },
    {
      title: '[3]: Most popular ERP vendors',
      class: 'card-vendors',
      items: [
        'SAP',
        'Oracle',
        'JD Edwards',
        'BAAN',
        'Peoplesoft'
      ]
    },
    {
      title: '[4]: Common terminology',
      class: 'card-terminology',
      items: [
        'ALE: Application Linking enabling',
        'IDOC: Intermediary documents',
        'EDI: Electronic data interchange',
        'RFC: Remote function call'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Toggle between list and details views
  toggleView(showList: boolean): void {
    this.showList = showList;
  }

  // Navigate to the previous section
  showPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Navigate to the next section
  showNext(): void {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }
}
