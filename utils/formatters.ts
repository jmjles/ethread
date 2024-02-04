import { DateTime, DurationObjectUnits, DurationUnit } from "luxon";

export const formatDate = (date: string) => {
  const units: Array<keyof DurationObjectUnits> = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years",
  ];
  const dateObj = DateTime.fromJSDate(new Date(Number(date)))
    .diffNow(units)
    .toObject();
  let biggestUnit: DurationUnit | null = null;
  units.reverse().forEach((u) => {
    if (!biggestUnit && dateObj[u]) {
      biggestUnit = u;
    }
  });
  const ago = {
    seconds: "just now",
    minutes: "minutes ago",
    hours: "hours ago",
    days: "days ago",
    months: "months ago",
    years: "years ago",
    minute: "minute ago",
    hour: "hour ago",
    day: "day ago",
    month: "month ago",
    year: "year ago",
  };
  const singles = {
    minutes: "minute",
    hours: "hour",
    days: "day",
    months: "month",
    years: "year",
  };
  if (biggestUnit) {
    const val = Math.abs(dateObj[biggestUnit]);
    if (biggestUnit === "seconds") return `• ${val} ${ago[biggestUnit]}`;
    if (val === 1) return `• ${val} ${ago[singles[biggestUnit]]}`;
    return `• ${val} ${ago[biggestUnit]}`;
  }return ''
};
