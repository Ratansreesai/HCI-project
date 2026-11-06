# HCI-project (RideRescue)

Roadside and repair help for petrol and electric bikes and cars, built as a front-end prototype for a **Human Computer Interaction (HCI)** course project.
 
> Any vehicle, petrol or electric, back on the road at a price you see first.
 
**Live demo:** `https://<your-username>.github.io/<repo-name>/`
 
## About
 
When a vehicle breaks down, the rider is stressed, outdoors and usually on a phone. RideRescue lets them request help in a few taps, see the price before confirming, track the mechanic and pay by UPI. Mechanics get a simple dashboard to accept jobs and track earnings.
 
The project focuses on **interaction design and usability**. There is no real backend: mechanics, tracking and payment are simulated in the browser.
 
## Features
 
**Customer site (`index.html`)**
- Service cards (puncture, jumpstart, towing, battery or charging, other) with starting prices
- Tabs to filter by Bike, Car or Electric, plus service search
- Step-by-step booking panel: vehicle, problem, location, price
- Upfront price card, with a car or EV extra shown separately
- Simulated live status timeline with an ETA and a mechanic card (EV-certified badge where relevant)
- Cancel with a confirmation dialog
- Simulated UPI payment and receipt
- Languages: English, Telugu and Hindi
**Login (`login.html`)**
- Rider or Mechanic role selection
- Mobile number and password validation with clear error messages
- Show-password option
**Mechanic dashboard (`mechanic.html`)**
- Online and offline switch
- Stats: earned today, jobs done, rating
- Incoming requests table with Accept and Decline
- Active job tracker (Start trip, Mark arrived, Complete job)
- Weekly earnings chart showing the 18% platform commission
## Run locally
 
No install or server is needed.
 
1. Download or clone this repository.
2. Open `index.html` in any modern browser.
**Demo login:** any 10-digit mobile number starting with 6, 7, 8 or 9, and a password of 4 or more characters. Choose **Mechanic** to open the dashboard.
 
Requests booked on the customer page appear in the mechanic's incoming requests when both pages are open in the **same browser**.
 
## Project structure
 
```
riderescue/
├── index.html      Customer site: services and booking panel
├── login.html      Login page
├── mechanic.html   Mechanic dashboard
├── style.css       Shared styles
├── app.js          Booking flow, translations, tracking simulation
├── mechanic.js     Dashboard logic
├── nav.js          Shared header and login state
└── README.md
```
 
## Tech stack
 
- HTML, CSS and vanilla JavaScript
- No frameworks, build tools or external libraries
- Data: hard-coded sample data plus the browser's `localStorage`
## HCI principles applied
 
| Principle | How it is applied |
|---|---|
| Visibility of system status | Progress bar, status timeline, ETA and loading states |
| Match with the real world | Plain words, familiar icons, rupee prices, UPI wording |
| User control and freedom | Back button and a cancel confirmation |
| Consistency and standards | One button style and a consistent layout on every step |
| Error prevention | Continue stays disabled until required fields are filled |
| Recognition over recall | Icon choices and a price summary before confirming |
| Flexibility and efficiency | Remembers the last vehicle and the chosen language |
| Help users recover from errors | Messages that say what went wrong and how to fix it |
| Accessibility | Large tap targets, high contrast, keyboard focus states, ARIA labels, reduced-motion support |
 
## Deploy on GitHub Pages
 
1. Push the files to a GitHub repository, with `index.html` at the top level.
2. Go to **Settings > Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.
## Limitations
 
- Mechanics, tracking and payments are simulated, and the login is a demo with no real accounts.
- Data is stored only in each visitor's browser, so it is not shared between devices and is lost if browser data is cleared.
- Login, dashboard and some labels are in English only. The booking flow supports English, Telugu and Hindi.
## Future work
 
- Real backend (for example Firebase or Supabase) for accounts and shared requests
- Live GPS and map-based mechanic tracking
- Real UPI payment integration
- Ratings and feedback after each job
- Tiered roadside assistance passes
- Full Telugu and Hindi translation of all pages
## Author
 
Ratan, HCI course project, 2026.
 
