-- ░ ░░░░ ░░ ░░░ ░░░ ░░░ ░░░░ ░░░ ░░░ ░░ ░░░ ░░ ░░ ░░
-- ▒ ▒▒▒▒ ▒▒ ▒▒ ▒▒ ▒▒▒▒ ▒▒ ▒▒▒▒ ▒▒ ▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒ ▒▒ ▒▒▒▒▒▒▒▒ ▒▒▒▒ ▒
-- ▓ ▓▓▓▓ ▓▓ ▓ ▓ ▓▓ ▓▓▓▓▓▓▓▓ ▓▓ ▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓ ▓ ▓▓ ▓▓▓▓ ▓▓▓▓ ▓
-- █ ████ ██ ██ ██ ████ ██ ████ ██ █████ █████ ██ ██ ████████ ████ █
-- ██ ███ ███ ███ ███ ████ ██ ████ ██ ██ ███ ██ ██ ██
--

# 🚀 Sprint 1: Smoke Test Landing Page with Real Event Data

## ✅ User Story 1: Understand the Mission

**As a** fan or venue
**I want to** understand the mission and value of the app
**So that** I can decide if it aligns with my needs or interests

### Acceptance Criteria

**Scenario:** User visits the landing page
**Given** the user is on the homepage
**When** they scroll to the hero section
**Then** they should see a bold headline communicating the mission
**And** a short paragraph or bullet list explaining how blockchain/NFTs will be used to stop scalping and reward fans

---

## ✅ User Story 2a: View Live Events from API

**As a** user
**I want to** see upcoming events pulled from a real ticketing API
**So that** I can understand what kind of events this platform supports

### Acceptance Criteria

**Scenario:** Display event listings on the homepage
**Given** the app has successfully fetched data from the event API
**When** the page loads
**Then** up to 10 event cards should be displayed
**And** each card should include event name, date, venue, and image
**And** the layout should be mobile responsive

---

## ✅ User Story 2b: Handle Empty or Failed API State

**As a** user
**I want to** see a friendly message if no events are available
**So that** I’m not confused when the list is empty or fails to load

### Acceptance Criteria

**Scenario:** API returns no events or errors out
**Given** the fetch to the event API fails or returns an empty list
**When** the user visits the event section
**Then** a message like “No events available right now” is shown
**And** no broken or empty cards are displayed

---

## ✅ User Story 3: Email Collection (LocalStorage)

**As a** user
**I want to** submit my email for early access
**So that** I can stay informed about the app launch

### Acceptance Criteria

**Scenario:** User submits email for early access
**Given** the user has typed a valid email address
**When** they click the "Notify Me" button
**Then** the email is stored in localStorage
**And** a confirmation message is shown (“Thanks! You’re on the list.”)

---

## ✅ User Story 4: View NFT Ticket Preview

**As a** user
**I want to** see a visual preview of a ticket NFT
**So that** I can understand the collectible aspect of the product

### Acceptance Criteria

**Scenario:** Display a static NFT ticket preview
**Given** the user is on the homepage
**When** they scroll past the event list
**Then** they see an image of a stylized NFT ticket
**And** the image is labeled with “Preview – Coming Soon”

---

## ✅ User Story 5a: Responsive Design for Mobile

**As a** mobile user
**I want to** navigate and read the page without zooming
**So that** I can interact with the content easily on my phone

### Acceptance Criteria

**Scenario:** User opens site on a mobile device
**Given** they are using a screen under 768px wide
**When** the page loads
**Then** the layout should stack vertically
**And** all fonts and buttons should be readable and touch-friendly

---

## ✅ User Story 5b: Responsive Design for Desktop

**As a** desktop user
**I want to** view the site with clean spacing and readable content
**So that** I can browse it comfortably from a larger screen

### Acceptance Criteria

**Scenario:** User opens site on a large screen
**Given** they are using a screen larger than 768px
**When** the page loads
**Then** content is spaced appropriately
**And** event cards display in grid format with padding

Dependencies:
npm install react-router-dom@latest

File structure:

Styles:
src/
│
├── styles/
│ ├── base/
│ │ ├── \_reset.css # CSS Reset (e.g., Eric Meyer or modern-normalize)
│ │ ├── \_typography.css # Global font styles, headings, paragraphs
│ │ └── \_globals.css # General layout rules, box-sizing, links, lists
│ │
│ ├── tokens/
│ │ ├── \_colors.css # Central color palette (brand, neutrals, etc.)
│ │ ├── \_spacing.css # Margin, padding, spacing utilities
│ │ └── \_typescale.css # Font sizes, line heights, font weights
│ │
│ ├── components/
│ │ ├── button.css # Styles for <Button />
│ │ ├── input.css # Styles for <Input />
│ │ └── card.css # Styles for EventCard, NFTCard, etc.
│ │
│ ├── layout/
│ │ ├── grid.css # Grid/Flexbox utilities
│ │ └── containers.css # Page/container width and padding helpers
│ │
│ └── index.css # Import all the above in order
