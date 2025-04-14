import { test, expect } from '@playwright/test';

test.describe('Web Application Tests', () => {
  test('should navigate to the specified URL', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto('https://apps.abacus.ai/chatllm/?appId=43c471cb6&convoId=38b971c40');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Verify the page title or any other element
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should perform a search', async ({ page }) => {
    await page.goto('https://apps.abacus.ai/chatllm/?appId=43c471cb6&convoId=38b971c40');
    
    // Wait for the search input to be visible
    const searchInput = await page.getByRole('textbox').first();
    await searchInput.waitFor({ state: 'visible' });
    
    // Type and submit search
    await searchInput.fill('test search');
    await searchInput.press('Enter');
    
    // Wait for results
    await page.waitForLoadState('networkidle');
  });
});