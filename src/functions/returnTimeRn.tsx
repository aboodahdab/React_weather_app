export default function returnTimeRn(date: any) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // "Africa/Cairo"
  const options = { timeZone };

  const weekDay = date.toLocaleDateString("en-US", {
    ...options,
    weekday: "long",
  });
  const month = date.toLocaleDateString("en-US", {
    ...options,
    month: "short",
    day: "numeric",
  });

  const shownDate = `${weekDay} · ${month} `;
  return shownDate;
}
