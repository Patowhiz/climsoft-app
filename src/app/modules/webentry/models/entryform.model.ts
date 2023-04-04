export  interface EntryForm{

    //unique id of the form
    id: number;

    name: string;

    description: string;

    //defines the entry selectors used by the form to get data
    //allowed values; station, element, year, month, day, hour 
    //Values length; Minimum 4, maximum 5. Must not be an entry field value.
    entrySelectors: string[];

    //defines the entry fields used by the form to display data
    entryFields: string[];

    //control to be used for entry fields in data entry and data display
    entryControl: string;

    //station ids allowed to be recorded by the form
    //if empty, all stations
    stations: string[];

    //elements ids allowed to be recorded by the form
    //if empty, all elements
    elements: number[];
    
    //hours allowed to be recorded by the form
    //if empty all hours
    hours: number[]; 

    //the scale used for entering the data
    scale: number;

    //whether user should type in observation total, mean or not
    //allowed values; total, mean
    formValidations: string;

    //sample paper
    samplePaperImage: string;     

}