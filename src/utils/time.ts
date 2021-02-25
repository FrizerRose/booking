export function getDateStringFromDate(date: Date): string {
  const dd = String(date.getDate());
  let mm = String(date.getMonth() + 1); // January is 0!
  const yyyy = date.getFullYear();

  if (mm.length < 2) {
    mm = `0${mm}`;
  }

  return `${yyyy}-${mm}-${dd}`;
}

export function dateIsToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate()
    && date.getMonth() === today.getMonth()
    && date.getFullYear() === today.getFullYear();
}

export function getDayName(date: Date): string {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[date.getDay()];
}

export function timeStringToNumber(timeString: string): number {
  if (timeString.includes(':15')) {
    return parseInt(timeString, 10) + 0.25;
  } if (timeString.includes(':30')) {
    return parseInt(timeString, 10) + 0.5;
  } if (timeString.includes(':45')) {
    return parseInt(timeString, 10) + 0.75;
  }
  return parseInt(timeString, 10);
}
