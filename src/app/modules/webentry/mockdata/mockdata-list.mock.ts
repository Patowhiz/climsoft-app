import { Element } from "../../shared/models/element.model";
import { EntryData } from "../../shared/models/entrydata.model";
import { Station } from "../../shared/models/station.model";




export const ELEMENTSLIST: Element[] = [
  { id: 1, name: 'Minimum Temperature' },
  { id: 2, name: 'Maximum Temperature' },
  { id: 3, name: 'Rainfall' },
  { id: 4, name: 'Humidity' }
];

  export const HOURSLIST: any[] = [
    { id: 0, name: "Hour 00"},
    { id: 1, name: "Hour 01"},
    { id: 2, name: "Hour 02"},
    { id: 3, name: "Hour 03"},
    { id: 4, name: "Hour 04"},
    { id: 5, name: "Hour 05"},
    { id: 6, name: "Hour 06"},
    { id: 7, name: "Hour 07"},
    { id: 8, name: "Hour 08"},
    { id: 9, name: "Hour 09"},
    { id: 10, name: "Hour 10"},
    { id: 11, name: "Hour 11"},
    { id: 12, name: "Hour 12"},
    { id: 13, name: "Hour 13"},
    { id: 14, name: "Hour 14"},
    { id: 15, name: "Hour 15"},
    { id: 16, name: "Hour 16"},
    { id: 17, name: "Hour 17"},
    { id: 18, name: "Hour 18"},
    { id: 19, name: "Hour 19"},
    { id: 20, name: "Hour 20"},
    { id: 21, name: "Hour 21"},
    { id: 22, name: "Hour 22"},
    { id: 23, name: "Hour 23"},
    ];

export const DAYSLIST: any[] = [
 { id: 1, name: "Day 01"},
 { id: 2, name: "Day 02"},
 { id: 3, name: "Day 03"},
 { id: 4, name: "Day 04"},
 { id: 5, name: "Day 05"},
 { id: 6, name: "Day 06"},
 { id: 7, name: "Day 07"},
 { id: 8, name: "Day 08"},
 { id: 9, name: "Day 09"},
 { id: 10, name: "Day 10"},
 { id: 11, name: "Day 11"},
 { id: 12, name: "Day 12"},
 { id: 13, name: "Day 13"},
 { id: 14, name: "Day 14"},
 { id: 15, name: "Day 15"},
 { id: 16, name: "Day 16"},
 { id: 17, name: "Day 17"},
 { id: 18, name: "Day 18"},
 { id: 19, name: "Day 19"},
 { id: 20, name: "Day 20"},
 { id: 21, name: "Day 21"},
 { id: 22, name: "Day 22"},
 { id: 23, name: "Day 23"},
 { id: 24, name: "Day 24"},
 { id: 25, name: "Day 25"},
 { id: 26, name: "Day 26"},
 { id: 27, name: "Day 27"},
 { id: 28, name: "Day 28"},
 { id: 29, name: "Day 29"},
 { id: 30, name: "Day 30"},
 { id: 31, name: "Day 31"},
];



export const ENTRYDATASAMPLE: EntryData[] = [
  {
    stationId: '1',
    elementId: 1,
    dataSourceId: 1,
    level: "surface",
    year: 2023,
    month: 6,
    day: 9,
    hour: 0,
    //dateTime: "2021-01-01 06:00:00",
    value: "250",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '1',
    elementId: 2,
    dataSourceId: 1,
    level: "surface",
    year: 2023,
    month: 6,
    day: 9,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "300",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '1',
    elementId: 3,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "400",
    flag: "D",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '1',
    elementId: 4,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "100",
    flag: "S",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '2',
    elementId: 1,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "256",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '2',
    elementId: 2,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "320",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '3',
    elementId: 3,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "620",
    flag: "D",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '3',
    elementId: 1,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "151",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '3',
    elementId: 2,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "120",
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '3',
    elementId: 3,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: '100',
    flag: "D",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: '3',
    elementId: 4,
    dataSourceId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: "700",
    flag: "S",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  }

]


