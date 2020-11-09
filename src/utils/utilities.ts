// Сравнить даты без времени
export const compareDateUtils = (dateFirst: Date, dateSecond: Date): boolean => {
    if (!dateFirst || !dateSecond) return false;
    return dateFirst.getDate() !== dateSecond.getDate()
        || dateFirst.getMonth() !== dateSecond.getMonth()
        || dateFirst.getFullYear() !== dateSecond.getFullYear()
}