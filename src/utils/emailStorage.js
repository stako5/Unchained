// src/utils/emailStorage.js

export const storeEmail = (email) => {
  try {
    const existing = JSON.parse(localStorage.getItem("waitlistEmails")) || [];
    const updated = [...new Set([...existing, email])]; // avoids duplicates
    localStorage.setItem("waitlistEmails", JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving email to localStorage:", error);
  }
};
