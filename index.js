
// ########################
// This is just a tool script for splitting, gathering services
// ########################

const fs = require('fs').promises;
const path = require('path');

// Define paths
const inputFile = path.join(__dirname, 'services', 'all', 'services.json');
const outputDir = path.join(__dirname, 'services');

// Function to create separate JSON files for each service
async function splitServices() {
  try {
    // Read the input JSON file
    const data = await fs.readFile(inputFile, 'utf8');
    const services = JSON.parse(data);

    // Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Iterate through each service and create a separate JSON file
    for (const service of services) {
      const serviceName = service.service;
      const outputFile = path.join(outputDir, `${serviceName}.json`);
      
      // Write the service data to its own JSON file
      await fs.writeFile(outputFile, JSON.stringify(service, null, 2));
      console.log(`Created file: ${outputFile}`);
    }

    console.log('All service files have been created successfully.');
  } catch (error) {
    console.error('Error processing services:', error.message);
  }
}

// Execute the function
splitServices();