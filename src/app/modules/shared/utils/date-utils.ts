export class DateUtils {

    //takes a 0 based index (month id) and returns the number of days in that month
    static getDaysInMonth(year: number, month: number): number {
        const date = new Date(year, month, 0);
        return date.getDate();
    }

    //takes a 0 based index (month id) and returns the number of days in that month
    static getDaysInMonthList(year: number, month: number): { [key: string]: any }[] {
        const all: { [key: string]: any }[] = [];
        const lastDay: number = this.getDaysInMonth(year, month);
        for (let i = 1; i <= lastDay; i++) {
            all.push({ id: i, name: `Day ${i.toString().padStart(2, '0')}` });
        }
        return all;
    }

    static getHoursList(hourIds?: number[]): { [key: string]: any }[] {
        const all: { [key: string]: any }[] = [];
        for (let i = 0; i <= 23; i++) {
            if (hourIds) {
                if (hourIds.includes(i)) {
                    all.push({ id: i, name: `Hour ${i.toString().padStart(2, '0')}` });
                }
            } else {
                all.push({ id: i, name: `Hour ${i.toString().padStart(2, '0')}` });
            }

        }
        return all;
    }

}
