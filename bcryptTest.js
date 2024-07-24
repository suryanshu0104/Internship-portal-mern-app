import bcrypt from 'bcrypt';

const testPassword = async () => {
  const plainPassword = 'password123';
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log('Hashed password:', hashedPassword);

  // Compare the plain password with the hashed password
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  console.log('Password comparison result:', isMatch);
};

testPassword();
