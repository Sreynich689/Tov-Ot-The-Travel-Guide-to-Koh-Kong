# Tov Ot

Tov Ot is a static travel and tour website project focused on promoting destinations and trip planning for Koh Kong, Cambodia. The project is built as a front-end web experience with multiple pages for browsing, sign-in, sign-up, contact, and booking-related interactions.

## Project Purpose

This project is intended to:
- showcase travel destinations and activities,
- present a modern and responsive landing page experience,
- provide simple user-facing pages for sign-in, sign-up, contact, and booking,
- serve as a lightweight static website prototype for future improvements or AI-assisted code changes.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- Google Fonts

## Project Structure

- assets/ — shared images, fonts, CSS, and library resources
- components/ — reusable UI parts such as navbar, footer, and buttons
- pages/ — page-specific HTML, CSS, and JavaScript files
  - home-page/
  - contact/
  - Signin-page/
  - Signup-page/

## Main Pages

- Home page: promotional landing experience for the travel brand
- Contact page: contact and booking-related interface
- Signin page: user login experience
- Signup page: user registration experience

## How to Run

Because this is a static website, no build step is required.

1. Open the project folder in a browser.
2. Open any page directly from the pages/ directory, for example:
   - pages/home-page/index.html
   - pages/contact/index.html

You can also use a simple local server if preferred, but it is not required for basic viewing.

## Development Notes

- This repository is mostly front-end focused.
- Page-specific styles are usually stored alongside the HTML page in the same folder.
- Shared assets and reusable UI elements should be placed in assets/ and components/ respectively.
- If you are updating navigation or visual design, check both the page files and the shared components first.

## AI / Knowledge Base Notes

This README is intended to help AI tools and future contributors understand the project quickly.

Useful context for AI-assisted work:
- The project is a static website, not a full-stack application.
- Most changes will involve HTML, CSS, and JavaScript in the pages/ folder.
- Styling is partly based on Bootstrap and custom CSS.
- Images and other static media are stored in assets/.

## Suggested Future Improvements

- Add real form validation and submission handling
- Improve responsiveness across all screen sizes
- Connect contact and booking forms to a backend or form service
- Refactor repeated UI into shared components more consistently
