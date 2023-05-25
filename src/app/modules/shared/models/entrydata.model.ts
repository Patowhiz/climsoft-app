export interface EntryData {
    stationId: number;
    elementId: number;
    dataSourceId: number;
    //dateTime: string

    //level of observation
    level: string;

    year: number;
    month: number;
    day: number;
    hour: number;
    value: number;
    flag: string;

    //image file name
    paperImage: string;

    //status if quality check.
    //0 is no QC. >0 if QC has been done.
    qcStatus: number;

    //json array string.
    //sample structure.
    // [   {
    //     "user": "clerk_1", 
    //     "value": 200, 
    //     "flag": "D",
    //     "paper_image": "image1", 
    //     "comment": "initial entry"
    //     },
    //     {
    //     "user": "clerk_2", 
    //     "value": 320,
    //     "flag": "D",
    //     "paper_image": "image1", 
    //     "comment": "second entry"
    //     } 
    // ]  

    changesLog: string;




}