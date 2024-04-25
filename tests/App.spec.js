import { test, expect } from '../fixtures.js';

test.use({
    viewport: {
        width: 500, height: 500
    }
});

test('default page should work', async ({ page }) => {
    await page.goto("http://localhost:5173/");
});
