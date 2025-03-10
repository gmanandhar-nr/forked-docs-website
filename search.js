const fs = require('fs');
const path = require('path');

// Function to recursively find all files and write their paths
function findFilePaths(dir, fileList) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // If directory, recurse
        findFilePaths(filePath, fileList);
      } else {
        // If file, add its path to the list
        fileList.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
}

// Main function
function main() {
  const startPath = './src/content/eol'; // Replace with the starting directory path
  const outputFilePath = './file-paths.txt'; // Define output file path

  const filePaths = [];
  findFilePaths(startPath, filePaths);

  // Write the list of file paths to the output file
  try {
    fs.writeFileSync(outputFilePath, filePaths.join('\n'), 'utf-8');
    console.log(`List of file paths has been written to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error writing to file ${outputFilePath}:`, error);
  }
}

main();