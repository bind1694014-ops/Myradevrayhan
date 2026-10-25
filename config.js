// Firebase কনফিগ এখানে বসান (Firebase Console → Project settings → Your apps → Web app → firebaseConfig)
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: ""
};

// মালিক ফেসপ্রিন্ট: Settings → 👑 মালিক ফেস সেটআপ থেকে লাইনটা কপি করে এখানে বসান (খালি থাকলে ফিচার বন্ধ)
window.OWNER_FACE = [];

// কোড রানার (C++, C#, Java, Go, Rust, PHP, Kotlin চালানোর জন্য). Python ও JavaScript ব্রাউজারেই চলে, এগুলোর জন্য কিছু লাগে না।
// ডিফল্ট: পাবলিক Judge0 CE। যদি "key লাগবে" বা "Runner-এ পৌঁছানো যায়নি" দেখায়, নিচের যেকোনো একটা সেট করো:
//  (ক) RapidAPI Judge0 CE:  url:'https://judge0-ce.p.rapidapi.com', headers:{'X-RapidAPI-Key':'আপনার_key','X-RapidAPI-Host':'judge0-ce.p.rapidapi.com'}
//  (খ) নিজের Piston server: piston:'https://your-piston-server'
window.RUNNER = {
  url: "https://ce.judge0.com",
  headers: {},
  piston: ""
};
