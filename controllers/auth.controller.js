import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // !Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  
  // !create new user and save to BD
};
export const login = (req, res) => {
  // db operations
};
export const logout = (req, res) => {
  // db operations
};
