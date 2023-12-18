const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');

// This is a mock function that you might want to test
function parseXml(xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

describe('XML Parser', () => {
  test('parses XML correctly', async () => {
    const xml = fs.readFileSync(path.join(__dirname, 'xml-api/1.xml'), 'utf-8');
    const result = await parseXml(xml);

    // Add your assertions here based on what you expect the result to be
    expect(result).toBeDefined();
  });
});
