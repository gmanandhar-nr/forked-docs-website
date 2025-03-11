const fs = require('fs');
const path = require('path');

function convertTabsContent(content) {
  const tabsMatch = /<Tabs>\s*<TabsBar>(.*?)<\/TabsBar>\s*<TabsPages>(.*?)<\/TabsPages>\s*<\/Tabs>/s.exec(content);

  if (tabsMatch) {
    const tabsBar = tabsMatch[1].trim();
    const tabsPages = tabsMatch[2].trim();

    const tabsTitles = tabsBar.match(/<TabsBarItem id="(\d+)">(.*?)<\/TabsBarItem>/gs);
    const tabsContents = tabsPages.match(/<TabsPageItem id="(\d+)">(.*?)<\/TabsPageItem>/gs);

    let gitbookTabs = '{% tabs %}\n\n';
    tabsTitles.forEach(title => {
      const [, tabId, tabTitle] = /<TabsBarItem id="(\d+)">(.*?)<\/TabsBarItem>/s.exec(title);

      tabsContents.forEach(content => {
        const [, contentId, contentText] = /<TabsPageItem id="(\d+)">(.*?)<\/TabsPageItem>/s.exec(content);
        if (tabId === contentId) {
          gitbookTabs += `{% tab title="${tabTitle.trim()}" %} ${contentText.trim()} {% endtab %}\n\n`;
        }
      });
    });
    gitbookTabs += '{% endtabs %}';

    return content.replace(tabsMatch[0], gitbookTabs);
  }
  
  return content;
}

function convertFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const convertedContent = convertTabsContent(content);

  fs.writeFileSync(filePath, convertedContent, 'utf-8');
//   console.log(`Converted: ${filePath}`);
}

function walkDirectory(directoryPath) {
    try {
        const dirEntries = fs.readdirSync(directoryPath, { withFileTypes: true });
        (directoryPath === "src/install/media-ios") && console.log("dirEntries", dirEntries);
        dirEntries.forEach(file => {
        (directoryPath === "src/install/media-ios") && console.log("file", file);
        const fullPath = path.join(directoryPath, file.name);
        if (file.isDirectory()) {
          walkDirectory(fullPath); // Recursive call for directories
        } else if (file.isFile() && file.name.endsWith('.md')) {
          convertFile(fullPath); // Convert files ending with .md
        }
      });
    } catch (error) {
      console.error(`Error reading directory ${directoryPath}: ${error.message}`);
    }
  }
// Main function
function main() {
    const startPath = './src';  
    walkDirectory(startPath);
  }
  
main();