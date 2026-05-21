const fs = require('fs');

const html = fs.readFileSync('temp_page.html', 'utf8');

const linkRegex = /<link[^>]*rel=(?:'|")?stylesheet(?:'|")?[^>]*href=["']([^"']+)["'][^>]*>/gi;
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;

let cssContent = '';
let match;
while ((match = styleRegex.exec(html)) !== null) {
    cssContent += match[1] + '\n';
}

const urls = [];
while ((match = linkRegex.exec(html)) !== null) {
    urls.push(match[1]);
}

// Write the inline CSS to a file
fs.writeFileSync('inline_styles.css', cssContent);

console.log("Found CSS URLs:");
urls.forEach(u => console.log(u));
