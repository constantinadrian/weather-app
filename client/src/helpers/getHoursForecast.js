import dayjs from 'dayjs';

const getHoursForecast = (currentDay, nextDay, localtime) => {

    const binarySearch = (currentDay, currentHour) => {
        let left = 0;
        let right = currentDay.length - 1;

        while (left <= right) {
            const middle = (left + right) >>> 1;
            const hour = dayjs(currentDay[middle].time, 'YYYY-MM-DD hh:mm').format('HH');

            if (hour === currentHour) {
                return middle;
            }
            
            if (hour > currentHour) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    const breakPoint = binarySearch(currentDay, dayjs(localtime, 'YYYY-MM-DD HH:mm').format('HH'));

    return currentDay.slice(breakPoint).concat(nextDay.slice(0, breakPoint));
}

export default getHoursForecast;
