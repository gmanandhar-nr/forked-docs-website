const fs = require('fs');
const path = require('path');

// Function to change file extensions recursively
function changeExtension(dir) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // If it's a directory, recurse into it
        changeExtension(filePath);
      } else if (file.endsWith('.mdx')) {
        // If it's an .mdx file, change the extension to .md
        const newFilePath = path.join(dir, file.replace(/\.mdx$/, '.md'));
        fs.renameSync(filePath, newFilePath);
        console.log(`Changed extension: ${filePath} -> ${newFilePath}`);
      }
    });
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error);
  }
}

// Main function
function main() {
  const startPath = './';  // Replace with your starting directory path
  changeExtension(startPath);
}

main();