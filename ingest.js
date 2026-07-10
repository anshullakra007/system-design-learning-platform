import fs from 'fs';
import https from 'https';

const URL = 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/README.md';

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
  // Extract the main content part
  const startIndex = markdown.indexOf('## System design topics: start here');
  const endIndex = markdown.indexOf('## Under development');
  
  if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end markers.");
    return;
  }
  
  const contentToParse = markdown.substring(startIndex, endIndex);
  
  // Split by "### "
  const rawSections = contentToParse.split('\n### ');
  // The first item is everything before the first "### "
  rawSections.shift();
  
  const chapters = rawSections.map(sectionText => {
    const lines = sectionText.split('\n');
    const title = lines.shift().trim();
    
    // Process content: extract paragraphs and images
    const content = [];
    let deepDive = null;
    let exercises = [];
    
    let currentParagraph = [];
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;
      
      // Clean up links and images for a simpler UI
      // Let's just keep the text and convert image markdown to a placeholder or keep it
      // Actually, we can just store the raw line if it's text.
      if (line.startsWith('Source(s)')) {
        continue; // skip sources section for simplicity
      }
      
      // If it's an image ![alt](url), let's render it nicely in our UI later.
      content.push(line);
    }
    
    // Auto-generate a dummy exercise
    exercises.push({
      question: `Explain the core concepts of ${title}.`,
      answer: `Refer to the section above to understand the trade-offs and concepts associated with ${title}.`
    });

    return {
      title,
      content,
      deepDive,
      exercises
    };
  });
  
  // Group chapters into Modules (3 chapters per module)
  const modules = [];
  let currentModule = null;
  
  for (let i = 0; i < chapters.length; i++) {
    if (i % 4 === 0) {
      if (currentModule) modules.push(currentModule);
      currentModule = {
        id: (i / 4) + 1,
        title: `Module ${(i / 4) + 1}: System Design Deep Dive`,
        description: "Curated content from the System Design Primer.",
        chapters: [],
        exam: {
          title: `Module ${(i / 4) + 1} Exam`,
          questions: [
            {
              q: "What is the primary trade-off discussed in this module?",
              options: ["Latency vs Throughput", "SQL vs NoSQL", "Complexity vs Maintainability", "All of the above"],
              correctIndex: 3,
              explanation: "System design is entirely about trade-offs in every category."
            }
          ]
        }
      };
    }
    currentModule.chapters.push(chapters[i]);
  }
  if (currentModule) modules.push(currentModule);
  
  // Generate the JS file content
  const jsContent = `export const modules = ${JSON.stringify(modules, null, 2)};\n`;
  
  fs.writeFileSync('src/data/modules.js', jsContent);
  console.log("Successfully ingested the System Design Primer into src/data/modules.js!");
}
