export function getDateStringFromDate(date: Date) {
  const dd = String(date.getDate());
  let mm = String(date.getMonth() + 1); // January is 0!
  const yyyy = date.getFullYear();

  if (mm.length < 2) {
    mm = `0${mm}`;
  }

  return `${yyyy}-${mm}-${dd}`;
}

export function dateIsToday(date: Date) {
  const today = new Date();
  return date.getDate() === today.getDate()
    && date.getMonth() === today.getMonth()
    && date.getFullYear() === today.getFullYear();
}
