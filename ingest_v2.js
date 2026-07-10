import fs from 'fs';
import https from 'https';

const URL = 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/README.md';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/';

https.get(URL, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    parseAndGenerate(data);
  });
}).on('error', (err) => {
  console.error('Error fetching README:', err);
});

function parseAndGenerate(markdown) {
  const lines = markdown.split('\n');
  
  let isContent = false;
  const modules = [];
  
  let currentModule = null;
  let currentChapter = null;
  
  let idCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Start parsing after Performance vs scalability
    if (line === '## Performance vs scalability') {
      isContent = true;
    }
    
    // Stop parsing at Appendix
    if (line === '## Appendix') {
      isContent = false;
      break;
    }
    
    if (!isContent) continue;
    
    // Rewrite image URLs
    line = line.replace(/\!\[(.*?)\]\((images\/.*?)\)/g, `![$1](${IMG_BASE_URL}$2)`);

    if (line.startsWith('## ')) {
      if (currentModule) {
        // Add a generic exam
        currentModule.exam = {
          title: `${currentModule.title} - Exam`,
          questions: [
            {
              q: `What is the most critical trade-off in ${currentModule.title}?`,
              options: ["Performance vs Latency", "Consistency vs Availability", "There is no single correct answer; it depends on the use case.", "SQL vs NoSQL"],
              correctIndex: 2,
              explanation: "System design is entirely about understanding trade-offs for specific use cases."
            }
          ]
        };
        modules.push(currentModule);
      }
      
      const title = line.substring(3).trim();
      currentModule = {
        id: idCounter++,
        title: title,
        description: `Exhaustive guide on ${title}`,
        chapters: []
      };
      
      // Default overview chapter
      currentChapter = {
        title: "Overview",
        content: [],
        deepDive: null,
        exercises: [{
          question: `Explain the core concepts of ${title}.`,
          answer: `Review the ${title} module to solidify your understanding of these concepts.`
        }]
      };
      currentModule.chapters.push(currentChapter);
      
    } else if (line.startsWith('### ')) {
      const title = line.substring(4).trim();
      currentChapter = {
        title: title,
        content: [],
        deepDive: null,
        exercises: [{
          question: `Describe the mechanism behind ${title}.`,
          answer: `The answer lies within the trade-offs of ${title} as discussed.`
        }]
      };
      currentModule.chapters.push(currentChapter);
      
    } else if (line.startsWith('#### ')) {
      const title = line.substring(5).trim();
      if (!currentChapter.deepDive) {
        currentChapter.deepDive = {
          title: title,
          content: []
        };
      } else {
        // If there's already a deep dive, just append to the chapter content as a header
        currentChapter.content.push(`**Deep Dive:** ${title}`);
      }
    } else {
      if (currentChapter.deepDive && line.startsWith('#### ') === false && currentChapter.deepDive.content.length < 15) {
        currentChapter.deepDive.content.push(line);
      } else {
        currentChapter.content.push(line);
      }
    }
  }
  
  if (currentModule) {
    modules.push(currentModule);
  }

  // Filter out any empty overview chapters
  modules.forEach(mod => {
    mod.chapters = mod.chapters.filter(ch => ch.content.join('').trim() !== '' || ch.title !== 'Overview');
  });

  const jsContent = `export const modules = ${JSON.stringify(modules, null, 2)};\n`;
  fs.writeFileSync('src/data/modules.js', jsContent);
  console.log("Successfully ingested the System Design Primer V2 into src/data/modules.js!");
}
