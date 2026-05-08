#!/usr/bin/env node
import { exec } from 'child_process';
import { promisify } from 'util';
import { build } from 'esbuild';

const execAsync = promisify(exec);

async function buildProduction() {
  try {
    console.log('🏗️ Building frontend with Vite...');
    await execAsync('npm run build:frontend');
    
    console.log('🏗️ Building server with custom esbuild config...');
    await build({
      entryPoints: ['server/index.ts'],
      bundle: true,
      format: 'esm',
      platform: 'node',
      target: 'node18',
      packages: 'external',
      outdir: 'dist',
      define: {
        'import.meta.dirname': '"dist"'
      }
    });
    
    console.log('✅ Build production completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildProduction();