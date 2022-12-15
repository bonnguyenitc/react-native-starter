#!/usr/bin/env node

// Husky install
run('npx husky install');

// Patch any packages that need patching
run('npx patch-package');

// Kill the metro bundler if it's running.
if (['darwin', 'linux'].includes(process.platform)) {
  run('pkill -f "cli.js start" || set exit 0');
}

// Make sure our Android native modules are androidX-happy
run('npx jetify');

// On iOS, make sure CocoaPods are installed
if (process.platform === 'darwin') {
  run('if [ -d "ios" ]; then cd ios && pod install && cd -; fi');
}

// Run baby run
function run(command) {
  console.log(`./bin/postInstall script running: ${command}`);

  try {
    require('child_process').execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`./bin/postInstall failed on command:\n  ${command}`);
    process.exit(error.status);
  }
}
