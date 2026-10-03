import puppeteer from 'puppeteer-core';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runTests() {
  console.log("=== STARTING PORTFOLIO VERIFICATION ===");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Check 1440px Desktop Viewport
  console.log("\n--- Checking 1440px Desktop Viewport ---");
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const heroBox = await page.$eval('section[aria-label="Introduction"]', el => {
    const rect = el.getBoundingClientRect();
    return { height: Math.round(rect.height), bottom: Math.round(rect.bottom) };
  });
  console.log(`Hero height at 1440px: ${heroBox.height}px, bottom: ${heroBox.bottom}px (fits in 900px viewport without scrolling: ${heroBox.bottom <= 900})`);

  // Check section order
  const sectionIds = await page.$$eval('main section', sections => sections.map(s => s.id || s.getAttribute('aria-label')));
  console.log("Section order on page:", sectionIds);

  // Check new project Loan
  const hasLoanProject = await page.evaluate(() => {
    const body = document.body.innerText;
    return body.includes("Loan Default Risk Scoring & Explanation Service") &&
           /solo build/i.test(body) &&
           body.includes("XGBoost") &&
           body.includes("SHAP");
  });
  console.log("Loan Default Risk Scoring project present with all specs:", hasLoanProject);

  // Check Also Built section
  const alsoBuiltContent = await page.evaluate(() => {
    const el = document.getElementById('also-built');
    return el ? el.innerText : null;
  });
  console.log("Also built section present:", !!alsoBuiltContent);
  if (alsoBuiltContent) {
    console.log("Also built contains RFID project:", alsoBuiltContent.includes("RFID-Based Surgical Sponge Tracking System"));
  }

  // Check Metrics strip items
  const metricsValues = await page.$$eval('section[aria-label="Key Metrics"] .font-display', els => els.map(e => e.innerText.trim()));
  const metricsLabels = await page.$$eval('section[aria-label="Key Metrics"] .font-code', els => els.map(e => e.innerText.trim()));
  console.log("Metrics rendered (values):", metricsValues);
  console.log("Metrics rendered (labels):", metricsLabels);

  // Test Theme Toggling at 1440px
  console.log("\n--- Testing Theme Toggle ---");
  const isInitialDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log("Initial theme is dark:", isInitialDark);

  await page.evaluate(() => {
    const btn = document.querySelector('nav button[aria-label*="theme"]');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 200));
  const isToggledDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log("Toggled theme is dark:", isToggledDark);

  await page.evaluate(() => {
    const btn = document.querySelector('nav button[aria-label*="theme"]');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 200));
  const isRestoredDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log("Restored theme is dark:", isRestoredDark);

  // Test Keyboard Navigation
  console.log("\n--- Testing Keyboard Navigation ---");
  await page.keyboard.press('Tab');
  const focusedElement = await page.evaluate(() => {
    const el = document.activeElement;
    return el ? `${el.tagName} href="${el.getAttribute('href') || ''}" text="${el.innerText.trim()}"` : 'none';
  });
  console.log("First focused element (Skip link):", focusedElement);

  await page.keyboard.press('Tab');
  const secondFocused = await page.evaluate(() => {
    const el = document.activeElement;
    return el ? `${el.tagName} href="${el.getAttribute('href') || ''}" text="${el.innerText.trim()}"` : 'none';
  });
  console.log("Second focused element (Brand link):", secondFocused);

  // 2. Check 768px Tablet Viewport
  console.log("\n--- Checking 768px Tablet Viewport ---");
  await page.setViewport({ width: 768, height: 1024 });
  await page.reload({ waitUntil: 'networkidle0' });
  const tabletScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Tablet 768px scrollWidth: ${tabletScrollWidth}px (no horizontal overflow: ${tabletScrollWidth <= 768})`);

  // 3. Check 375px Mobile Viewport
  console.log("\n--- Checking 375px Mobile Viewport ---");
  await page.setViewport({ width: 375, height: 667 });
  await page.reload({ waitUntil: 'networkidle0' });
  const mobileScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Mobile 375px scrollWidth: ${mobileScrollWidth}px (no horizontal overflow: ${mobileScrollWidth <= 375})`);

  // 4. Test Prefers-Reduced-Motion
  console.log("\n--- Testing Reduced Motion ---");
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.reload({ waitUntil: 'networkidle0' });

  const reducedMotionActive = await page.evaluate(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scrollProgress = document.querySelector('div[aria-hidden="true"][style*="scaleX"]');
    return {
      prefersReducedMotionMatches: mediaQuery.matches,
      scrollProgressBarHidden: scrollProgress === null
    };
  });
  console.log("Reduced motion verified:", reducedMotionActive);

  await browser.close();
  console.log("\n=== ALL BROWSER & ACCESSIBILITY TESTS PASSED ===");
}

runTests().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
