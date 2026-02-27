export function getAppTimeZone() {
  const defaultTimeZone = "Asia/New_Delhi"; // Default to IST if not set
  // In a real application, this might come from user settings or a config file.
  return process.env.APP_TIME_ZONE || defaultTimeZone;
}
