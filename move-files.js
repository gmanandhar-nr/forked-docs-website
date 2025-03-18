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

// Function to recursively delete empty directories
function deleteEmptyDirs(dirPath) {
    let files = fs.readdirSync(dirPath);
    
    if (files.length > 0) {
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            if (fs.statSync(fullPath).isDirectory()) {
                // Recursively delete empty directories
                deleteEmptyDirs(fullPath);
            }
        });
        
        // Check again after processing subdirectories
        files = fs.readdirSync(dirPath);
    }

    // If directory is empty, delete it
    if (files.length === 0) {
        fs.rmdirSync(dirPath);
        console.log(`Deleted empty directory: ${dirPath}`);
    }
}

// Main function
function moveFirstNFiles(sourcePath, n = 3000) {
    try {
        // Resolve the relative path to absolute path
        const absolutePath = path.resolve(sourcePath);
        
        // Get all files recursively
        const allFiles = getAllFiles(absolutePath, []);
        
        if (allFiles.length === 0) {
            console.log('Source directory is empty.');
            deleteEmptyDirs(absolutePath);
            return;
        }

        // Create destination directory
        const destDir = path.join(process.cwd(), 'second_3000_files');
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir);
        }

        // Move first N files
        const filesToMove = allFiles.slice(0, n);
        filesToMove.forEach(filePath => {
            const relativePath = path.relative(absolutePath, filePath);
            const destPath = path.join(destDir, relativePath);
            
            // Create directory structure if it doesn't exist
            const destDirPath = path.dirname(destPath);
            if (!fs.existsSync(destDirPath)) {
                fs.mkdirSync(destDirPath, { recursive: true });
            }
            
            // Move the file
            fs.renameSync(filePath, destPath);
        });

        console.log(`Successfully moved ${filesToMove.length} files to ${destDir}`);

        // After moving files, check for and delete empty directories
        deleteEmptyDirs(absolutePath);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Check if source path is provided as command line argument
if (process.argv.length < 3) {
    console.log('Usage: node move-files.js <source-path>');
    process.exit(1);
}

// Execute the move function with the provided path
moveFirstNFiles(process.argv[2]);
