#!/usr/bin/env node

/**
 * Test script to verify revalidation endpoint works correctly
 * Usage: node scripts/test-revalidation.js [production-url]
 */

import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'

// Load environment variables from .env.local
function loadEnvFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const envContent = fs.readFileSync(filePath, 'utf8');
      const lines = envContent.split('\n');
      
      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
          const [key, ...valueParts] = trimmedLine.split('=');
          if (key && valueParts.length > 0) {
            const value = valueParts.join('=').trim();
            // Only set if not already set in process.env
            if (!process.env[key]) {
              process.env[key] = value;
            }
          }
        }
      });
    }
  } catch (error) {
    console.warn(`Warning: Could not load ${filePath}:`, error.message);
  }
}

// Load .env.local file
loadEnvFile(path.join(process.cwd(), '.env.local'));

const SERVER_URL = process.argv[2] || process.env.SERVER_URL || 'http://localhost:3000';
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;

if (!PAYLOAD_SECRET) {
  console.error('❌ PAYLOAD_SECRET environment variable is required');
  process.exit(1);
}

function makeRequest(url, options, data) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;

    const req = lib.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body,
        });
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(data);
    }

    req.end();
  });
}

async function testRevalidation() {
  console.log('🧪 Testing Revalidation Endpoint');
  console.log(`📍 Server URL: ${SERVER_URL}`);
  console.log('');

  const testCases = [
    { global: 'hero', description: 'Hero section' },
    { global: 'about', description: 'About section' },
    { global: 'banner', description: 'Banner section' },
    { global: 'testimonials', description: 'Testimonials section' },
    { global: 'works', description: 'Featured works section' },
  ];

  for (const testCase of testCases) {
    try {
      console.log(`🔄 Testing ${testCase.description}...`);

      const response = await makeRequest(
        `${SERVER_URL}/api/revalidate`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${PAYLOAD_SECRET}`,
          },
        },
        JSON.stringify({
          global: testCase.global,
        }),
      );

      if (response.statusCode === 200) {
        const result = JSON.parse(response.body);
        console.log(`✅ ${testCase.description}: ${result.message}`);
      } else {
        console.log(`❌ ${testCase.description}: HTTP ${response.statusCode}`);
        console.log(`   Response: ${response.body}`);
      }
    } catch (error) {
      console.log(`❌ ${testCase.description}: ${error.message}`);
    }
  }

  // Test manual revalidation (GET request)
  console.log('\n🔄 Testing manual revalidation...');
  try {
    const response = await makeRequest(`${SERVER_URL}/api/revalidate`, { method: 'GET' });

    if (response.statusCode === 200) {
      const result = JSON.parse(response.body);
      console.log(`✅ Manual revalidation: ${result.message}`);
    } else {
      console.log(`❌ Manual revalidation: HTTP ${response.statusCode}`);
    }
  } catch (error) {
    console.log(`❌ Manual revalidation: ${error.message}`);
  }

  console.log('\n🎉 Revalidation testing completed!');
}

testRevalidation().catch(console.error);
