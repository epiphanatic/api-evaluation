/// given that xml2js is a 3rd party package I think it's a good candidate for a unit test

const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');

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

  test('fails gracefully on invalid XML', async () => {
    const invalidXml = 'This is not valid XML';

    await expect(parseXml(invalidXml)).rejects.toThrow();
  });
});
