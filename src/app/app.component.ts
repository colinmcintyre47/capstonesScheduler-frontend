import { Component, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Courses } from './types';
import { Student } from './types';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  
  public csCore: string[] = ["CEC 101", "CSE 174", "MTH 151", "CSE 102",
   "MTH 231", "CSE 271", "STA 261", "CSE 278", "CSE 274",
    "CSE 201", "CSE 262", "CSE 383", "CSE 465", "CSE 448", "CSE 484", "CSE 485", "CSE 486", "CSE 488",
     "CSE 449",];

     public cseElec = [
      "CSE 385", "CSE 386", "CSE 389", "CSE 432", "CSE 443", "CSE 451",
      "CSE 466", "CSE 467", "CSE 470", "CSE 471", "CSE 473", "CSE 474",
      "CSE 484", "CSE 485", "CSE 486", "CSE 488", "CSE 489",
      "CSE 211", "CSE 212", "CSE 270", "CSE 273", "CSE 311", "CSE 321",
      "CSE 322", "CSE 372", "CSE 411", "ECE 287", "ECE 387", "ECE 461",
      "IMS 440", "BIO-115", "BIO-116", "MTH-222", "MTH-245", "MTH-249/251",
      "MTH-252", "MTH-331", "MTH-347", "MTH-411", "MTH-421", "MTH-432",
      "MTH-437", "MTH-438", "MTH-439", "MTH-441", "MTH-447"
    ];

  courses: string[] = [];
  student: string[] = [];
  title = 'capstone-dragdrop';

  selectedCatalogYear: string = '';
  selectedMajor: string = '';
  selectedName: string = '';
  
student_major: string = '';
student_name: string ='';
student_catalog_year: string = '';
student_classes: string[] = [];
new_student_classes: Student[] = [];
showInfo = false;

loadInfo() {
  this.showInfo = true;
}

minimized = true;

minimizeList() {
  this.minimized = !this.minimized;
}

  extra: string[] = [];
  Fall1: string[] = [];
  Winter1: string[] = [];
  Spring1: string[] = [];
  Summer1: string[] = [];
  Fall2: string[] = [];
  Winter2: string[] = [];
  Spring2: string[] = [];
  Summer2: string[] = [];
  Fall3: string[] = [];
  Winter3: string[] = [];
  Spring3: string[] = [];
  Summer3: string[] = [];
  Fall4: string[] = [];
  Winter4: string[] = [];
  Spring4: string[] = [];
  Summer4: string[] = [];

  //@Output() onSubmit = new EventEmitter<Courses>();

  constructor(
    private coursesService: CoursesService
  ) { }


 
  ngOnInit(): void {
    this.coursesService.getCourses()
      .subscribe(courses => {
        this.courses = courses.map(course => course.course_num);
  });

  this.coursesService.getStudent()
      .subscribe(Student => {
        this.new_student_classes = Student.map(new_student_classes => new_student_classes);
  });

}


onSubmit(event: MouseEvent): void {
  this.student_major = this.selectedMajor;
  this.student_name = this.selectedName;
  this.student_catalog_year = this.selectedCatalogYear;
  this.student_classes = this.student_classes
  this.coursesService.addStudent(this.student_major, this.student_name, this.student_catalog_year, this.student_classes)
  .subscribe(() => {
  });
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

      this.student_classes.push(event.container.data[event.currentIndex]);
      console.log('student classes!!@#!@');
      console.log(this.student_classes);
      console.log('new student classes!!@#!@');
      console.log(this.new_student_classes);
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