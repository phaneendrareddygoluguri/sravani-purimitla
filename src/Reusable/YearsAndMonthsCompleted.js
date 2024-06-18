const yearsAndMonthsCompleted = () => {
    const startDate = new Date('2020-10-08');
    const currentDate = new Date()
    const monthsDifference = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth();
    const currentDay = currentDate.getDate();
    const startDay = startDate.getDate();
    const dayAdjustment = currentDay < startDay ? -1 : 0;
    const yearsCompleted = Math.floor((monthsDifference + dayAdjustment) / 12);
    const remainingMonths = (monthsDifference + dayAdjustment) % 12;
    const result = `${yearsCompleted}.${remainingMonths} Years`;
    return result;
  }
  export default yearsAndMonthsCompleted

  