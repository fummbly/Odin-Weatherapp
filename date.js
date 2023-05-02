export default class Date {
    constructor(year, month, day, time) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.time = time;
    }

    print() {
        return `${this.month}-${this.day}-${this.year}`
    }
}