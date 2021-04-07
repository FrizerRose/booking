import Company from '@/types/company';
import Staff from '@/types/staff';

export function getDateStringFromDate(date: Date): string {
  let dd = String(date.getDate());
  let mm = String(date.getMonth() + 1); // January is 0!
  const yyyy = date.getFullYear();

  if (mm.length < 2) {
    mm = `0${mm}`;
  }
  if (dd.length < 2) {
    dd = `0${dd}`;
  }

  return `${yyyy}-${mm}-${dd}`;
}

export function getHumanReadableDateTime(dateString: string, timeString: string) {
  const date = new Date(dateString);
  const dd = String(date.getDate());
  const mm = String(date.getMonth() + 1); // January is 0!
  const yyyy = date.getFullYear();

  let formattedTimeString = timeString;
  if (timeString.length <= 8) {
    formattedTimeString = timeString.slice(0, 5);
  }

  return `${dd}. ${mm}. ${yyyy} u ${formattedTimeString}`;
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

export function dateDiffInHours(a: Date, b: Date) {
  const msPerHour = 1000 * 60 * 60;

  return (a.getTime() - b.getTime()) / msPerHour;
}

export function hasBreakOnDay(worker: Staff, date: Date): boolean {
  if (worker.breaks) {
    return worker.breaks.some((breakObject) => {
      const dayStart = new Date(breakObject.start);
      const dayEnd = new Date(breakObject.end);
      dayStart.setHours(0, 0, 0, 0);
      dayEnd.setHours(0, 0, 0, 0);
      date.setHours(0, 0, 0, 0);

      return date >= dayStart && date <= dayEnd;
    });
  }
  return false;
}

export function hasDayOff(company: Company, date: Date): boolean {
  if (company.daysOff) {
    return company.daysOff.some((daysOffObject) => {
      const dayStart = new Date(daysOffObject.start);
      const dayEnd = new Date(daysOffObject.end);
      dayStart.setHours(0, 0, 0, 0);
      dayEnd.setHours(0, 0, 0, 0);
      date.setHours(0, 0, 0, 0);

      return date >= dayStart && date <= dayEnd;
    });
  }
  return false;
}
