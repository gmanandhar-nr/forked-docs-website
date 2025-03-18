const fs = require('fs');
const path = require('path');

// Function to recursively get all files from a directory
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// Main function
function copyFirstNFiles(sourcePath, n = 3000) {
    try {
        // Resolve the relative path to absolute path
        const absolutePath = path.resolve(sourcePath);
        
        // Get all files recursively
        const allFiles = getAllFiles(absolutePath, []);
        
        // Create destination directory
        const destDir = path.join(process.cwd(), 'first_3000_files');
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir);
        }

        // Copy first N files
        const filesToCopy = allFiles.slice(0, n);
        filesToCopy.forEach(filePath => {
            const relativePath = path.relative(absolutePath, filePath);
            const destPath = path.join(destDir, relativePath);
            
            // Create directory structure if it doesn't exist
            const destDirPath = path.dirname(destPath);
            if (!fs.existsSync(destDirPath)) {
                fs.mkdirSync(destDirPath, { recursive: true });
            }
            
            // Copy the file
            fs.copyFileSync(filePath, destPath);
        });

        console.log(`Successfully copied ${filesToCopy.length} files to ${destDir}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Check if source path is provided as command line argument
if (process.argv.length < 3) {
    console.log('Usage: node copy-files.js <source-path>');
    process.exit(1);
}

// Execute the copy function with the provided path
copyFirstNFiles(process.argv[2]);