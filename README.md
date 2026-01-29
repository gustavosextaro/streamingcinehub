# CineHub

CineHub is a modern, responsive web app for cataloging, curating, and organizing movies, inspired by the UI/UX of popular streaming services.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow these steps to get the development environment running.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository

```bash
git clone <repository-url>
cd cinehub
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up Environment Variables

You need to configure your Firebase credentials.

1.  Copy the `.env.example` file to a new file named `.env.local`:

    ```bash
    cp .env.example .env.local
    ```

2.  **Set up Firebase:**
    -   Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    -   In your project, go to `Project Settings > General`.
    -   Under "Your apps", create a new Web app.
    -   Copy the `firebaseConfig` object values.
    -   Paste these values into the corresponding `NEXT_PUBLIC_` variables in your `.env.local` file.
    -   **Authentication**: In the Firebase console, go to `Build > Authentication` and enable the "Email/Password", "Google", and "Anonymous" sign-in methods.
    -   **Firestore**: Go to `Build > Firestore Database` and create a database. Start in production mode. You will need to set up security rules.

### 4. Managing Movie Data

This project uses a local data file to manage its movie catalog, located at `src/lib/mock-data.ts`. You can add or edit the movies in this file to populate the application.

### 5. Firestore Security Rules

For the application to work correctly, you need to set up security rules in Firestore to protect user data. Go to `Build > Firestore Database > Rules` and paste the following:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
-   **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore)
-   **AI**: [Google AI & Genkit](https://ai.google.dev/docs/genkit)
