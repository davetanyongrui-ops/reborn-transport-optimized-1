# Reborn Transport Website - Multilingual Version

A comprehensive, responsive website for Reborn Transport with full support for three languages: English, Indonesian (Bahasa Indonesia), and Mandarin Chinese.

## Website Structure

The website is organized in a multilingual structure with separate directories for each language:

```
.
├── index.html                    # Redirects to English version
├── en/                           # English version
│   ├── index.html               # Homepage
│   ├── services.html            # Services page
│   ├── fleet.html               # Fleet/Armada page
│   ├── about.html               # About Us page
│   ├── contact.html             # Contact page
│   └── gallery.html             # Gallery page
├── id/                           # Indonesian version
│   ├── index.html               # Homepage
│   ├── services.html            # Services page
│   ├── fleet.html               # Fleet/Armada page
│   ├── about.html               # About Us page
│   ├── contact.html             # Contact page
│   └── gallery.html             # Gallery page
├── zh/                           # Mandarin Chinese version
│   ├── index.html               # Homepage
│   ├── services.html            # Services page
│   ├── fleet.html               # Fleet/Armada page
│   ├── about.html               # About Us page
│   ├── contact.html             # Contact page
│   └── gallery.html             # Gallery page
├── css/
│   └── style.css                # Custom CSS styles
├── js/
│   └── main.js                  # Custom JavaScript
├── README.md                    # Technical documentation
├── README_MULTILINGUAL.md       # This file
├── robots.txt                   # SEO robots instructions
└── sitemap.xml                  # XML sitemap
```

## Languages Supported

1. **English (en)** - Default language
2. **Indonesian (id)** - Bahasa Indonesia
3. **Mandarin Chinese (zh)** - 中文

## Features

- **Fully Responsive Design** - Works on mobile, tablet, and desktop
- **Language Switching** - Easy navigation between language versions
- **WhatsApp Integration** - Direct booking via WhatsApp
- **SEO Optimization** - Proper meta tags, structured data, sitemap, and robots.txt
- **Fast Loading** - Optimized for performance with minimal dependencies
- **Modern UI/UX** - Clean design with Tailwind CSS framework
- **Interactive Elements** - Animations, hover effects, and smooth scrolling
- **Comprehensive Forms** - Booking and quote request forms

## Key Pages

### Homepage (`index.html`)
- Hero section with strong imagery of vehicles and drivers
- Overview of key services
- Call-to-action buttons for booking

### Services (`services.html`)
- Detailed breakdown of all transport services:
  - Car Rental with Driver (Hourly/Daily/Monthly)
  - Airport & Ferry Terminal Transfers
  - Corporate/Business Travel Services
  - Tours & Sightseeing Packages
  - Weddings & Events
  - Bus/Van Charter (larger groups)
- "How it works" process explanation

### Fleet (`fleet.html`)
- Visual gallery of vehicles:
  - Compact cars (Avanza/Xenia)
  - MPVs (Innova/Xpander)
  - Vans/Hiace
  - Buses (20-50 seats)
- Capacity and ideal use case for each vehicle
- Pricing information
- Vehicle maintenance/quality guarantees

### About Us (`about.html`)
- Company history and story
- Key USPs and values
- Service coverage areas
- Testimonials from customers
- Professional team information

### Contact (`contact.html`)
- Contact information and office details
- Office hours
- Booking methods (WhatsApp, phone, email)
- Quote request form
- FAQ section with common questions

### Gallery (`gallery.html`)
- Photo gallery of vehicles
- Images of professional drivers
- Customer experience photos
- Social media integration

## Technical Implementation

### Technologies Used
- HTML5
- CSS3 (with Tailwind CSS framework)
- JavaScript
- AOS (Animate On Scroll) library
- Font Awesome icons
- LightGallery for image galleries

### Language Switching
Users can switch between languages using the language selector in the header of each page. The website automatically maintains the current page when switching languages.

### SEO Best Practices
- Proper meta descriptions in each language
- Semantic HTML structure
- XML sitemap with all language versions
- robots.txt for search engine crawling instructions

## Deployment

This is a static website that can be deployed to any web hosting service that supports HTML, CSS, and JavaScript. Simply upload all files to your web server.

For GitHub Pages deployment:
1. Create a new repository on GitHub
2. Push all files to the repository
3. Enable GitHub Pages in the repository settings
4. The website will be available at `https://[username].github.io/[repository-name]/`

## Customization

To customize the website for your business:

1. Update contact information in all HTML files:
   - Phone numbers
   - WhatsApp numbers
   - Email addresses
   - Physical address
   - Social media links

2. Replace stock images with your actual vehicle and team photos

3. Update pricing information in the fleet section

4. Modify service descriptions to match your actual offerings

5. Update testimonials with real customer reviews

## Maintenance

Regular maintenance tasks include:

1. Updating vehicle information and pricing
2. Adding new testimonials
3. Refreshing gallery images
4. Updating service offerings
5. Checking and updating all links
6. Ensuring all language versions are synchronized

## Support

For any issues or questions about the website, please contact the developer who created this website.