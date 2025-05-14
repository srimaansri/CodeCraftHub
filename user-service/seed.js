const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/userModel');
const bcrypt = require('bcryptjs');

dotenv.config();

const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'password456',
  }
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await User.deleteMany(); // optional: clear existing users
    const hashedUsers = await Promise.all(users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    }));
    await User.insertMany(hashedUsers);
    console.log('Database seeded with users!');
    process.exit();
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();
