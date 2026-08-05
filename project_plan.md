# Elevate Digital Website Development Plan

You are a senior frontend developer and UI/UX engineer.

Your task is to build a premium agency website called:

**Elevate Digital**

This website represents a Social Media Marketing Agency.

The goal:

* Build trust with real client work
* Showcase social media growth results
* Present team professionally
* Create a premium agency experience

# Technology Stack

Use:

* React + Vite
* Tailwind CSS
* React Router
* Framer Motion for animations
* Lucide React icons

Code must be:

* Clean
* Modular
* Scalable
* Production quality

# Website Routes

Create these routes:

/

Home Page

/work

Portfolio page

/about

Team page

/about/:slug

Individual profile pages

/testimonials

All testimonials

/contact

Contact page

# Folder Structure

Follow this structure:

src/

components/

layout/

* Navbar
* Footer

hero/

* Hero

work/

* WorkCard
* MobileMockup
* ProjectGallery

about/

* ProfileCard

testimonials/

* TestimonialCard

ui/

* Button
* SectionTitle

pages/

* Home.jsx
* Work.jsx
* About.jsx
* Profile.jsx
* Testimonials.jsx
* Contact.jsx

data/

* projects.js
* profiles.js
* testimonials.js

assets/

images/
icons/

# Reusable Components

Create these reusable components:

Navbar

Contains:

* Logo
* Navigation links
* Mobile menu

Footer

Contains:

* Brand name
* Social links
* Copyright

Hero

Layout:

Left:

* Heading
* Description
* CTA button

Right:
Premium AI/Digital marketing visual

WorkCard

Reusable project component.

Each project contains:

* Brand name
* Brand description
* Three mobile mockups
* Services list

MobileMockup

Reusable phone frame component.

Every project image must appear inside a phone mockup.

ProfileCard

Used for team members.

Contains:

* Image
* Name
* Role
* Short introduction
* Read More button

TestimonialCard

Contains:

* Client image/logo
* Client name
* Review
* Project name

# Home Page Structure

Home page:

Navbar

Hero Section

Featured Work Section

Show ONLY 4 featured projects.

Each project:

Brand Name

Short Bio

Mobile Mockup Gallery:

Image 1
Image 2
Image 3

Services

Button:

View All Work

Redirect:

/work

About Preview Section

Two profile layouts.

Desktop:

Information left

Image right

Mobile:

Stack vertically

Profiles:

Shayan Baig

AI Developer

Partner

Social Media Marketer

Testimonials Preview

Show only 6 testimonials.

Desktop:

3 cards per row

Mobile:

1 card per row

Button:

View All Testimonials

Redirect:

/testimonials

Contact CTA

Button redirects:

/contact

Footer

# Work Page

Show all projects.

Use the same WorkCard component.

Do not duplicate code.

Projects should come from:

projects.js

# About Page

Show team members.

Use:

ProfileCard component

# Profile Page

Dynamic route:

/about/:slug

Display:

Profile Image

Name

Role

About

Skills

Experience

Certificates

LinkedIn Button

# Data Structure

Projects must be stored separately.

Example:

{
id:1,

brand:"Brand Name",

featured:true,

bio:"Brand description",

images:[
image1,
image2,
image3
],

services:[
"Content Design",
"Social Media Management"
]

}

Profiles:

{
name:"",
role:"",
image:"",
bio:"",
skills:[],
experience:"",
linkedin:""
}

Testimonials:

{
client:"",
image:"",
review:"",
project:""
}

# Design Requirements

Style:

Premium agency website.

Reference feeling:

* Modern creative agency
* Luxury technology brand
* Clean portfolio

Requirements:

* Dark premium theme
* Clean typography
* Large headings
* Smooth animations
* Responsive design
* Mobile first

Animations:

Use Framer Motion for:

* Hero entrance
* Scroll reveal
* Card animations
* Page transitions

# Development Rules

Before coding:

1. Create complete folder structure.
2. Install required dependencies.
3. Create reusable components first.
4. Create data files.
5. Build pages using components.
6. Test responsiveness.

Do not create one large file.

Keep every component separated.

Do not hardcode repeated content.

Use reusable data-driven architecture.

After completing:

Provide:

* Final folder structure
* Installed packages
* How to run project
* Build instructions

Build the complete website in VS Code.
