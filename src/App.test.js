import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// const faker = require('faker');
const puppeteer = require('puppeteer');
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

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


describe('Contact Form', () => {
  test('Can submit contact form', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/login');
    // await page.waitForSelector('.Login');
    // await page.click("input[name=email]");
    // await page.type("input[name=email]", "b1234@gmail.com");
    // await page.click("input[name=password]");
    // await page.type("input[name=password]", "b12345678");

    await page.click('[data-testid="loginBtn"]')
    await page.waitForSelector('.loggedInView')
    browser.close();
  }, 9000000);
});
