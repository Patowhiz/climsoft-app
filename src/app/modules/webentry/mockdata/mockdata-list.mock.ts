import { Station } from '../models/station.model';
import { Element } from '../models/element.model';
import { EntryData } from '../models/entrydata.model';

export const STATIONSLIST: Station[] = [
  { id: "1", name: 'Kisumu' },
  { id: "2", name: 'Kericho' },
  { id: "3", name: 'Eldoret' },
  { id: "4", name: 'Nairobi' }
]

export const ELEMENTSLIST: Element[] = [
  { id: 1, name: 'Minimum Temperature' },
  { id: 2, name: 'Maximum Temperature' },
  { id: 3, name: 'Rainfall' },
  { id: 4, name: 'Humidity' }
]

  export const HOURSLIST: number[] = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23];

export const DAYSLIST = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31];


export const MONTHSLIST = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" }];

export const YEARSLIST = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];


export const ENTRYDATASAMPLE: EntryData[] = [
  {
    stationId: 1,
    elementId: 1,
    entryFormId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: 250,
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: 1,
    elementId: 2,
    entryFormId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: 300,
    flag: "",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: 1,
    elementId: 3,
    entryFormId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: 400,
    flag: "D",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  },
  {
    stationId: 1,
    elementId: 4,
    entryFormId: 1,
    level: "surface",
    year: 2021,
    month: 1,
    day: 1,
    hour: 6,
    //dateTime: "2021-01-01 06:00:00",
    value: 100,
    flag: "S",
    paperImage: "file_name",
    qcStatus: 0,
    changesLog: "changes_in_json"
  }
]


