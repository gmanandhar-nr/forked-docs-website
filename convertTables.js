const fs = require('fs');
const path = require('path');
const logFilePath = 'process.log';

function logToFile(message) {
  fs.appendFileSync(logFilePath, message + '\n', { encoding: 'utf8' });
}

function convertTableContent(content) {
  const tableMatch = /<table>\s*<thead>(.*?)<\/thead>\s*<tbody>(.*?)<\/tbody>\s*<\/table>/s.exec(content);
  
  if (tableMatch) {
    const theadContent = tableMatch[1].trim();
    const tbodyContent = tableMatch[2].trim();

    // Extract headers
    const headerRowMatch = /<tr>(.*?)<\/tr>/s.exec(theadContent);
    const headers = headerRowMatch ? headerRowMatch[1].trim().match(/<th.*?>(.*?)<\/th>/gs).map(th => th.replace(/<.*?>/g, '').trim()) : [];

    // Extract body rows
    const rowsMatch = tbodyContent.match(/<tr>(.*?)<\/tr>/gs);
    const bodyRows = rowsMatch ? rowsMatch.map(row => {
      return row.match(/<td.*?>(.*?)<\/td>/gs).map(td => td.replace(/<.*?>/g, '').trim());
    }) : [];

    // Construct markdown table
    let markdownTable = '# Table\n\n';
    markdownTable += `| ${headers.join(' | ')} |\n`;
    markdownTable += `| ${headers.map(() => '-').join(' | ')} |\n`;
    bodyRows.forEach(row => {
      markdownTable += `| ${row.join(' | ')} |\n`;
    });

    return content.replace(tableMatch[0], markdownTable);
  }

  return content;
}

function convertFile(filePath) {
  try {
    logToFile(`Converting file: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const convertedContent = convertTableContent(content);
    fs.writeFileSync(filePath, convertedContent, 'utf-8');
    logToFile(`Converted: ${filePath}`);
  } catch (error) {
    logToFile(`Failed to convert file ${filePath}: ${error.message}`);
  }
}

function walkDirectory(directoryPath) {
  logToFile(`Scanning directory: ${directoryPath}`);
  try {
    const dirEntries = fs.readdirSync(directoryPath, { withFileTypes: true });
    
    dirEntries.forEach(file => {
      const fullPath = path.join(directoryPath, file.name);
      if (file.isDirectory()) {
        walkDirectory(fullPath);
      } else if (file.isFile() && file.name.endsWith('.md')) {
        convertFile(fullPath);
      }
    });
  } catch (error) {
    logToFile(`Error reading directory ${directoryPath}: ${error.message}`);
  }
}

// Specify the root directory of your repository
const repoRootPath = './first_3000_files';
walkDirectory(repoRootPath);