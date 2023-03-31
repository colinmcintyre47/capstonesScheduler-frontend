import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('extraList', { static: true }) extraList!: CdkDropList;
  @ViewChild('fall1List', { static: true }) fall1List!: CdkDropList;
  @ViewChild('winter1List', { static: true }) winter1List!: CdkDropList;
  @ViewChild('spring1List', { static: true }) spring1List!: CdkDropList;
  @ViewChild('summer1List', { static: true }) summer1List!: CdkDropList;
  @ViewChild('fall2List', { static: true }) fall2List!: CdkDropList;
  @ViewChild('winter2List', { static: true }) winter2List!: CdkDropList;
  @ViewChild('spring2List', { static: true }) spring2List!: CdkDropList;
  @ViewChild('summer2List', { static: true }) summer2List!: CdkDropList;
  @ViewChild('fall3List', { static: true }) fall3List!: CdkDropList;
  @ViewChild('winter3List', { static: true }) winter3List!: CdkDropList;
  @ViewChild('spring3List', { static: true }) spring3List!: CdkDropList;
  @ViewChild('summer3List', { static: true }) summer3List!: CdkDropList;
  @ViewChild('fall4List', { static: true }) fall4List!: CdkDropList;
  @ViewChild('winter4List', { static: true }) winter4List!: CdkDropList;
  @ViewChild('spring4List', { static: true }) spring4List!: CdkDropList;
  @ViewChild('summer4List', { static: true }) summer4List!: CdkDropList;
  

  title = 'capstone-dragdrop';

  
  extra = ['CSE 102', 'CSE 148', 'CSE 151', 'CSE 153', 'CSE 163'];
  Fall1= ['Class A2', 'Class B1', 'Class C3'];
  Winter1 = ['Class A1', 'Class B2', 'Class C3'];
  Spring1 = ['Class A', 'Class B', 'Class C'];
  Summer1 = ['Class A', 'Class B', 'Class C'];
  Fall2 = ['Class A', 'Class B', 'Class C'];
  Winter2 = ['Class A', 'Class B', 'Class C'];
  Spring2 = ['Class A', 'Class B', 'Class C'];
  Summer2 = ['Class A', 'Class B', 'Class C'];
  Fall3 = ['Class A', 'Class B', 'Class C'];
  Winter3 = ['Class A', 'Class B', 'Class C'];
  Spring3 = ['Class A', 'Class B', 'Class C'];
  Summer3 = ['Class A', 'Class B', 'Class C'];
  Fall4 = ['Class A', 'Class B', 'Class C'];
  Winter4 = ['Class A', 'Class B', 'Class C'];
  Spring4 = ['Class A', 'Class B', 'Class C'];
  Summer4 = ['Class A', 'Class B', 'Class C'];

  constructor() { }
 
  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log('previousContainer:', event.previousContainer);
    console.log('container:', event.container);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      );
    } else {
      console.log('previousContainer data:', event.previousContainer.data);
      console.log('container data:', event.container.data);
    
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('Previous container:', event.previousContainer);
      console.log('Container:', event.container);
      console.log('Previous data:', event.previousContainer.data);
      console.log('New data:', event.container.data);
      // Update the actual data arrays in your component
      if (event.container === this.extraList) {
        console.log('Moved to Extra');
        this.extra = event.container.data;
      } else if (event.container === this.fall1List) {
        console.log('Moved to Fall1');
        this.Fall1 = event.container.data;
      } else if (event.container === this.winter1List) {
        console.log('Moved to Winter1');
        this.Winter1 = event.container.data;
      } else if (event.container === this.spring1List) {
        console.log('Moved to Spring1');
        this.Spring1 = event.container.data;
      } else if (event.container === this.summer1List) {
        console.log('Moved to Summer1');
        this.Summer1 = event.container.data;
      } else if (event.container === this.fall2List) {
        console.log('Moved to Fall2');
        this.Fall2 = event.container.data;
      } else if (event.container === this.winter2List) {
        console.log('Moved to Winter2');
        this.Winter2 = event.container.data;
      } else if (event.container === this.spring2List) {
        console.log('Moved to Spring2');
        this.Spring2 = event.container.data;
      } else if (event.container === this.summer2List) {
        console.log('Moved to Summer2');
        this.Summer2 = event.container.data;
      } else if (event.container === this.fall3List) {
        console.log('Moved to Fall3');
        this.Fall3 = event.container.data;
      } else if (event.container === this.winter3List) {
        console.log('Moved to Winter3');
        this.Winter3 = event.container.data;
      } else if (event.container === this.spring3List) {
        console.log('Moved to Spring3');
        this.Spring3 = event.container.data;
      } else if (event.container === this.summer3List) {
        console.log('Moved to Summer3');
        this.Summer3 = event.container.data;
      } else if (event.container === this.fall4List) {
        console.log('Moved to Fall4');
        this.Fall4 = event.container.data;
      } else if (event.container === this.winter4List) {
        console.log('Moved to Winter4');
        this.Winter4 = event.container.data;
      } else if (event.container === this.spring4List) {
        console.log('Moved to Spring4');
        this.Spring4 = event.container.data;
      } else if (event.container === this.summer4List) {
        console.log('Moved to Summer4');
        this.Summer4 = event.container.data;
      }
    }

  }
}