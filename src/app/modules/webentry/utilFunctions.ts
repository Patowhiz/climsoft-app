export class UtilFunctions {


    static addToStringArray(arr: string[], itemsToAdd: any[]): void {
        itemsToAdd.forEach((item) => {
            arr.push(item + "");
        });

    }



    static getItemPropertyValueFromArray(items: any[], itemPropertyFieldName: string, itemPropertyIdValue: any): any {
        let foundValue: any;
        items.forEach(element => {

            if (element[itemPropertyFieldName] == itemPropertyIdValue) {
                foundValue = element.name;
                return;
            }

        });

        return foundValue;


    }

}