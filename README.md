# Tov Ot

Tov Ot is a static travel and booking website for exploring destinations, planning trips, reviewing places, and booking stays in Koh Kong, Cambodia. The site is built with HTML, CSS, JavaScript, Bootstrap, and Bootstrap Icons.

## Features

- Home page with travel branding and destination highlights
- Discover page for destinations and activities
- Plan Trip page for booking, budget, and payment sections
- Review pages for testimonials, place details, and writing reviews
- Stay search with check-in, check-out, number of people, and room selection
- Check-in and check-out page with calendar-style date confirmation
- Contact details and booking form page
- Sign in, sign up, password reset, and verification pages
- Payment flow pages for bank selection, ABA payment, credit card payment, and success confirmation

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- Google Fonts and Fontshare fonts

## Project Structure

```text
Tov Ot/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── discover.css
│   │   ├── review.css
│   │   ├── contact.css
│   │   ├── payment.css
│   │   ├── auth.css
│   │   └── about.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── contact.js
│   │   ├── discover.js
│   │   ├── payment.js
│   │   └── review.js
│   └── images/
└── pages/
    ├── about.html
    ├── check-in-checkout.html
    ├── contact.html
    ├── discover.html
    ├── plantrip.html
    ├── review.html
    ├── reviewplace.html
    ├── write-review.html
    ├── sign-in.html
    ├── sign-up.html
    ├── forget-password.html
    ├── reset-password.html
    ├── verification.html
    ├── choose-bank.html
    ├── aba-payment.html
    ├── credit-card.html
    └── payment-successful.html
```

## Main Pages

- `index.html` - main landing page
- `pages/discover.html` - destination and activity discovery
- `pages/plantrip.html` - trip planning and booking information
- `pages/review.html` - review overview and testimonials
- `pages/reviewplace.html` - detailed property review page with search options
- `pages/check-in-checkout.html` - check-in and check-out date confirmation page
- `pages/contact.html` - booking contact form
- `pages/about.html` - information about Tov Ot
- `pages/sign-in.html` and `pages/sign-up.html` - authentication screens
- `pages/choose-bank.html`, `pages/aba-payment.html`, `pages/credit-card.html`, and `pages/payment-successful.html` - payment flow

## How to Run

This project is a static website, so it does not require installation or a build step.

1. Open the project folder.
2. Open `index.html` in a browser.
3. Navigate through the site using the navbar and page links.

For development, you can also run the project with a local live server extension such as VS Code Live Server.

## Styling

- Shared design rules are in `assets/css/global.css`.
- Page-specific styles are separated by page area, such as `home.css`, `review.css`, `contact.css`, and `payment.css`.
- Bootstrap is used for responsive layout utilities, components, and spacing.
- Bootstrap Icons are used for navigation, search, booking, contact, and payment icons.

## JavaScript

JavaScript files are stored in `assets/js/`.

- `auth.js` handles authentication page interactions.
- `contact.js` handles booking/contact form behavior.
- `discover.js` handles discovery page interactions.
- `payment.js` handles payment flow behavior.
- `review.js` handles review page interactions.

## Notes

- The website is currently front-end only.
- Form submissions and payment actions are UI flows only unless connected to a backend later.
- Images should be stored inside `assets/images/`.
- Repeated sections such as the navbar and footer are currently written directly in each HTML file.

## Future Improvements

- Add backend support for real bookings, reviews, and payments.
- Add stronger form validation.
- Make check-in and check-out dates dynamic.
- Reuse the navbar and footer with templates or components.
- Improve accessibility labels and keyboard support across forms.
- Continue refining mobile responsiveness.
