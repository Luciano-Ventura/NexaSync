import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const urls = [
  { url: 'https://lp-lumiere-clinic.vercel.app/', name: 'proj_lumiere.png' },
  { url: 'https://fadetime.vercel.app/', name: 'proj_fadetime.png' },
  { url: 'https://zelare.vercel.app/', name: 'proj_zelare.png' },
  { url: 'https://wallmemory.vercel.app/', name: 'proj_eventwall.png' }
];

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: "new" });
  
  for (const item of urls) {
    console.log(`Taking screenshot of ${item.url}...`);
    const page = await browser.newPage();
    // Set a good viewport for desktop display
    await page.setViewport({ width: 1440, height: 900 });
    
    try {
      // Go to the URL and wait until network is mostly idle
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait an extra 2 seconds for any animations/fonts to finish loading
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const screenshotPath = path.join(imagesDir, item.name);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Saved screenshot to ${screenshotPath}`);
    } catch (err) {
      console.error(`Error taking screenshot for ${item.url}:`, err);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  console.log('Finished capturing all screenshots!');
}

takeScreenshots();
