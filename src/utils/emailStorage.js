// src/utils/emailStorage.js

export const storeEmail = (email, type = "fan") => {
  try {
    const existing = JSON.parse(localStorage.getItem("waitlistEmails")) || {
      fan: [],
      artist: [],
      venue: [],
    };

    const updatedList = new Set(existing[type]);
    updatedList.add(email);

    const updated = {
      ...existing,
      [type]: Array.from(updatedList),
    };

    localStorage.setItem("waitlistEmails", JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving email by type:", error);
  }
};
