import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// const faker = require('faker');
const puppeteer = require('puppeteer');

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Title Display test', () => {
  test('Title loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.app-title');

    const html = await page.$eval('.app-title', e => e.innerHTML);
    expect(html).toBe('SBAY');

    browser.close();
  }, 16000);
});



describe('Home Text display', () => {
  test('Home Text display', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.home');

    const html = await page.$eval('.home', e => e.innerHTML);
    expect(html).toBe('Home');

    browser.close();
  }, 16000);
});
