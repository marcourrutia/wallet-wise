export const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) {
    return "Email cannot be empty.";
  }
  if (!emailRegex.test(email)) {
    return "Invalid email format. \nMake sure it follows: example@example.com";
  }
  return "";
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!password) {
    return "Password cannot be empty.";
  }
  if (!passwordRegex.test(password)) {
    return `Password must be at least 8 characters long, include at least: \n
      - One uppercase letter (A-Z) \n
      - One lowercase letter (a-z) \n
      - One number (0-9) \n
      - One special character (#?!@$%^&*-)`;
  }
  return "";
};
