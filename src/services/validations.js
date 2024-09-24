export const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) {
    return "Email cannot be empty.";
  }
  if (!emailRegex.test(email)) {
    return "Invalid email format. Make sure it follows: example@example.com";
  }
  return "";
};

export const validatePassword = (password) => {
  const errors = [];

  if (!password) {
    return "- Password cannot be empty.";
  }

  if (password.length < 8) {
    errors.push("- Password must be at least 8 characters long.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("- Password must include at least one uppercase letter (A-Z).");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("- Password must include at least one lowercase letter (a-z).");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("- Password must include at least one number (0-9).");
  }

  if (!/[#?!@$%^&*-]/.test(password)) {
    errors.push(
      "- Password must include at least one special character (#?!@$%^&*-)."
    );
  }

  if (errors.length > 0) {
    return errors.join("\n");
  }

  return "";
};
