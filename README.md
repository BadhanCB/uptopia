# [Uptopia - Online Real Estate Listing Platform](https://uptopia.vercel.app/)

Uptopia is a modern and efficient online real estate listing platform designed to simplify the process of buying, selling, and renting properties. Built with a robust tech stack including **Next.js**, **TypeScript**, **MongoDB**, **Sharp**, **Bcrypt**, and **Jose**, Uptopia offers a seamless user experience for both property seekers and real estate agents.

## **Key Features:**

-   **User-Friendly Interface:** Intuitive design for easy navigation and property search.
-   **Advanced Search Filters:** Users can filter properties by location, price, type, and more.
-   **User Authentication & Security:** Secure user registration and login are ensured using Bcrypt for password hashing and Jose for JWT token management, safeguarding user data.
-   **Detailed Property Pages:** Each listing provides comprehensive details, high-quality photos, and relevant contact information.
-   **User Accounts (Optional):** Optionally, users can create accounts to save favorite listings and potentially contact property owners (depending on your implementation).
-   **Responsive Design:** The platform is fully responsive, providing an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.
-   **High-Quality Image Handling:** With Sharp integration, images are optimized and resized efficiently, enhancing site performance while maintaining image quality.
-   **Comprehensive Property Listings:** Users can browse and search through detailed property listings, complete with high-resolution images, descriptions, pricing, and location data.
-   **Interactive User Interface:** Built with Next.js and TypeScript, the site delivers fast, interactive, and user-friendly navigation, ensuring a smooth user journey.
-   **Backend with MongoDB:** The database is structured with MongoDB, providing a scalable and flexible solution for storing property data, user information, and transactional records.

## **Technologies Used:**

### Frontend:

-   **Next.js:** Utilizes Next.js, a React framework, for server-side rendering (SSR) and static site generation (SSG), ensuring fast page load times and SEO benefits.
-   **Typescript:** Employs Typescript for static type checking, leading to improved code maintainability and reduced runtime errors.

### Backend:

-   **MongoDB:** Leverages MongoDB, a NoSQL database, for flexible and scalable data storage of property listings, user accounts, and other relevant information.
-   **Sharp:** Integrates Sharp, a high-performance image processing library, for efficient image resizing and manipulation, optimizing property photos for display.

### Authentication & Security:

-   **Bcrypt:** Implements Bcrypt for secure password hashing, safeguarding user credentials.
-   **Jose:** Employs Jose, a popular library for JSON Web Tokens (JWTs), enabling secure and efficient user authentication and authorization.

### Live Demo: [uptopia.vercel.app](https://uptopia.vercel.app/)

<br/>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [${process.env.NEXT_PUBLIC_BASE_URL}](${process.env.NEXT_PUBLIC_BASE_URL}) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
