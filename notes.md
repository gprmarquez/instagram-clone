// please note that the following is based on the architecture walkthrough from the freeCodeCamp tutorial for this clone. -> denotes folder

// client side rendered app: react
// -> database is Firebase
// -> react-loading-skeleton
// tailwind

// architecture (folder structure)
  // src
    // -> components
    // -> contants
    // -> context
    // -> helpers
    // -> hooks
    // -> pages
    // -> lib (firebase is also going to live here)
    // -> services (firebase functions here)
    // -> styles (tailwind (app/tailwind))

production rules needed when app is finished on Firebase

// production rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth.uid != null;
    }
  }
}