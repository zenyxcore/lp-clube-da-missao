export const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "fbclid",
  "gclid",
] as const;
export function campaignParams(search: string) {
  const source = new URLSearchParams(search),
    result = new URLSearchParams();
  for (const key of CAMPAIGN_KEYS) {
    const value = source.get(key);
    if (value) result.set(key, value.slice(0, 500));
  }
  return result;
}
export function checkoutWithCampaign(
  checkout: string,
  current: string,
  remembered = "",
) {
  const url = new URL(checkout);
  for (const [key, value] of campaignParams(remembered))
    url.searchParams.set(key, value);
  for (const [key, value] of campaignParams(current))
    url.searchParams.set(key, value);
  return url.toString();
}
export function offerExpired(end: string, now = Date.now()) {
  return Boolean(
    end && Number.isFinite(Date.parse(end)) && Date.parse(end) <= now,
  );
}
