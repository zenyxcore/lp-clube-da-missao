import test from "node:test";
import assert from "node:assert/strict";
import {
  campaignParams,
  checkoutWithCampaign,
  offerExpired,
} from "../src/lib/campaign";
import { safeUrl } from "../src/lib/config";
test("preserves whitelisted campaign data, overrides remembered values and keeps checkout parameters", () => {
  const url = new URL(
    checkoutWithCampaign(
      "https://checkout.example.com/pay?product=mission",
      "?utm_source=meta&email=private@example.com&utm_campaign=launch",
      "utm_source=old&utm_medium=cpc",
    ),
  );
  assert.equal(url.searchParams.get("product"), "mission");
  assert.equal(url.searchParams.get("utm_source"), "meta");
  assert.equal(url.searchParams.get("utm_medium"), "cpc");
  assert.equal(url.searchParams.get("email"), null);
});
test("unconfigured, malformed and expired offers", () => {
  assert.equal(offerExpired("", 100), false);
  assert.equal(offerExpired("invalid", 100), false);
  assert.equal(
    offerExpired("2026-10-15T00:00:00Z", Date.parse("2026-10-15T00:00:01Z")),
    true,
  );
});
test("only secure commercial URLs and bounded campaign fields", () => {
  assert.equal(safeUrl("javascript:alert(1)"), "");
  assert.equal(safeUrl("http://example.com"), "");
  assert.equal(safeUrl(undefined), "");
  assert.equal(
    campaignParams("?utm_source=" + "x".repeat(1000)).get("utm_source")?.length,
    500,
  );
});
