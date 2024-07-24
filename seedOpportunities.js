// seedOpportunities.js
import mongoose from 'mongoose';
import Opportunity from './models/Opportunity.js'; // Adjust path as needed
import config from './config/config.js';

const opportunities = [
  {
    profileName: 'Software Intern',
    companyName: 'Tech Innovations',
    stipend: '$1500/month',
    location: 'San Francisco, CA',
    duration: '6 months',
    startDate: new Date('2024-08-01')
  },
  {
    profileName: 'Marketing Intern',
    companyName: 'Market Masters',
    stipend: '$1200/month',
    location: 'New York, NY',
    duration: '3 months',
    startDate: new Date('2024-09-01')
  }
  // Add more opportunities as needed
];

const seedOpportunities = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Opportunity.deleteMany({});
    await Opportunity.insertMany(opportunities);

    console.log('Opportunities seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding opportunities:', error);
  }
};

seedOpportunities();
