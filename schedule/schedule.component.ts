import { Component, OnInit, SimpleChanges, Inject } from "@angular/core";
import { Appt } from "./appt.model";
import { Day } from "./day.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  name: string;
  nameFormGroup = this.fb.group({
    name: [""]
  });
  calendar: boolean = true;
  selectedAppt: any;
  selectedDate: any;
  selectedDayinit: Day = {
    date: new Date(2019, 0, 1),
    appts1: [
      { time: "9:00", name: "" },
      { time: "9:15", name: "" },
      { time: "9:30", name: "" },
      { time: "9:45", name: "" },
      { time: "10:00", name: "" },
      { time: "10:15", name: "" },
      { time: "10:30", name: "" },
      { time: "10:45", name: "" }
    ],
    appts2: [
      { time: "11:00", name: "" },
      { time: "11:15", name: "" },
      { time: "11:30", name: "" },
      { time: "11:45", name: "" },
      { time: "12:00", name: "" },
      { time: "12:15", name: "" },
      { time: "12:30", name: "" },
      { time: "12:45", name: "" }
    ],
    appts3: [
      { time: "2:00", name: "" },
      { time: "2:15", name: "" },
      { time: "2:30", name: "" },
      { time: "2:45", name: "" },
      { time: "3:00", name: "" },
      { time: "3:15", name: "" },
      { time: "3:30", name: "" },
      { time: "3:45", name: "" }
    ],
    appts4: [
      { time: "4:00", name: "" },
      { time: "4:15", name: "" },
      { time: "4:30", name: "" },
      { time: "4:45", name: "" },
      { time: "5:00", name: "" },
      { time: "5:15", name: "" },
      { time: "5:30", name: "" },
      { time: "5:45", name: "" }
    ]
  };

  selectedDay: Day = this.selectedDayinit;
  days: Day[];

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit() {
    for (let i = 1; i < 500; i++) {
      let newday: Day = {
        date: new Date(2019, 0, 1),
        appts1: [
          { time: "9:00", name: "" },
          { time: "9:15", name: "" },
          { time: "9:30", name: "" },
          { time: "9:45", name: "" },
          { time: "10:00", name: "" },
          { time: "10:15", name: "" },
          { time: "10:30", name: "" },
          { time: "10:45", name: "" }
        ],
        appts2: [
          { time: "11:00", name: "" },
          { time: "11:15", name: "" },
          { time: "11:30", name: "" },
          { time: "11:45", name: "" },
          { time: "12:00", name: "" },
          { time: "12:15", name: "" },
          { time: "12:30", name: "" },
          { time: "12:45", name: "" }
        ],
        appts3: [
          { time: "2:00", name: "" },
          { time: "2:15", name: "" },
          { time: "2:30", name: "" },
          { time: "2:45", name: "" },
          { time: "3:00", name: "" },
          { time: "3:15", name: "" },
          { time: "3:30", name: "" },
          { time: "3:45", name: "" }
        ],
        appts4: [
          { time: "4:00", name: "" },
          { time: "4:15", name: "" },
          { time: "4:30", name: "" },
          { time: "4:45", name: "" },
          { time: "5:00", name: "" },
          { time: "5:15", name: "" },
          { time: "5:30", name: "" },
          { time: "5:45", name: "" }
        ]
      };
      newday.date.setDate(newday.date.getDate() + i);
      this.days.push(newday);
    }
  }

  ngDoCheck() {
    for (let day of this.days) {
      if (+this.selectedDate == +day.date) {
        this.selectedDay = day;
      }
    }
  }

  edit(appt: Appt): void {
    this.selectedAppt = appt;
    this.name = this.selectedAppt.name;
    this.calendar = !this.calendar;
    this.nameFormGroup.controls["name"].setValue(this.name);
  }

  onSubmit(): void {
    for (let day of this.days) {
      if (+this.selectedDate == +day.date) {
        for (let appt of day.appts1) {
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
          }
        }
        for (let appt of day.appts2) {
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
          }
        }
        for (let appt of day.appts3) {
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
          }
        }
        for (let appt of day.appts4) {
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
          }
        }
      }
    }
    this.calendar = !this.calendar;
  }

  delete(): void {
    this.calendar = !this.calendar;
  }
}
