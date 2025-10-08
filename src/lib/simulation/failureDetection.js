// Supply chain issue detection logic (not React)
// Checks inventory levels and quality metrics, generates alerts if needed

const LOW_STOCK_THRESHOLD = 5;
const QUALITY_SCORE_THRESHOLD = 85;

export function checkForAlert(supplyChainData, alerts, status) {
  // Only one alert per issue type, and only if not already in alert status
  const stockAlertActive = alerts.some(
    (a) => a.err_code === "S01" && !a.resolved
  );
  const qualityAlertActive = alerts.some(
    (a) => a.err_code === "S02" && !a.resolved
  );
  const now = new Date();
  // Low stock alert
  if (
    supplyChainData.stock_level && 
    supplyChainData.stock_level.value < LOW_STOCK_THRESHOLD &&
    !stockAlertActive &&
    status !== "alert"
  ) {
    return {
      _id: "alert-" + now.getTime(),
      err_code: "S01",
      err_name: "Low inventory stock",
      facility_id: "SC1",
      ts: now.toLocaleString(),
      details: {
        stock_level: supplyChainData.stock_level.value,
        quality_score: supplyChainData.quality_score?.value || 100,
        product_category: supplyChainData.product_category || "skincare",
      },
    };
  }
  // Quality score alert
  if (
    supplyChainData.quality_score &&
    supplyChainData.quality_score.value < QUALITY_SCORE_THRESHOLD &&
    !qualityAlertActive &&
    status !== "alert"
  ) {
    return {
      _id: "alert-" + now.getTime(),
      err_code: "S02",
      err_name: "Quality compliance issue",
      facility_id: "SC1",
      ts: now.toLocaleString(),
      details: {
        stock_level: supplyChainData.stock_level?.value || 0,
        quality_score: supplyChainData.quality_score.value,
        product_category: supplyChainData.product_category || "skincare",
      },
    };
  }
  return null;
}
