export default class DateChanger {
    constructor(date) {
        this.date = date
    }

    weekDayChecker(day) {
        switch(day) {
            case '0':
                return 'вс'
                break;
            case '1':
                return 'пн'
                break;
            case '2':
                return 'вт'
                break;
            case '3':
                return 'ср'
                break;
            case '4':
                return 'чт'
                break;
            case '5':
                return 'пт'
                break;
            case '6':
                return 'сб'
                break;
        }

    }

    monthChecker(month) {
        switch(month) {
            case '01':
                return { 
                    firstType:'января',
                    secondType:'январь'
                }
                break;
            case '02':
                return { 
                    firstType:'февраля',
                    secondType:'февраль'
                }
                break;
            case '03':
                return { 
                    firstType:'марта',
                    secondType:'март'
                }
                break;
            case '04':
                return { 
                    firstType:'апреля',
                    secondType:'апрель'
                }
                break;
            case '05':
                return { 
                    firstType:'мая',
                    secondType:'май'
                }
                break;
            case '06':
                return { 
                    firstType:'июня',
                    secondType:'июнь'
                }
                break;
            case '07':
                return { 
                    firstType:'июля',
                    secondType:'июль'
                }
                break;
            case '08':
                return { 
                    firstType:'августа',
                    secondType:'август'
                }
                break;
            case '09':
                return { 
                    firstType:'сентября',
                    secondType:'сентябрь'
                }
                break;
            case '10':
                return { 
                    firstType:'октября',
                    secondType:'октябрь'
                }
                break;
            case '11':
                return { 
                    firstType:'ноября',
                    secondType:'ноябрь'
                }
                break;
            case '12':
                return { 
                    firstType:'декабря',
                    secondType:'декабрь'
                }
                break;
        }

    }

    dayChecker(dayArr) {
        if (dayArr[0] == '0') {
            return dayArr[1].toString();
        } else {
            return dayArr.join('').toString();
        };
    }

    dateFormation() {
        const splittedDate = this.date.split('')
        const month = splittedDate.slice(5,7).join('').toString();
        const monthFormated = this.monthChecker(month);
        const yearFormated = splittedDate.slice(0,4).join('').toString();
        const dayArr = splittedDate.slice(8,10);
        const dayFormated = this.dayChecker(dayArr);

        return {
            dayFormated:dayFormated,
            monthFormated:monthFormated,
            yearFormated:yearFormated,
        }
    }
}