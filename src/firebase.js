import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 필요한 서비스를 추가로 불러옵니다.
import { getFirestore } from "firebase/firestore"; // 필요한 서비스를 추가로 불러옵니다.

const firebaseConfig = {
  apiKey: "AIzaSyBp4O6auKKcbuAj8zYWeqip44hLN1OmRoc",
  authDomain: "movuerevue.firebaseapp.com",
  projectId: "movuerevue",
  storageBucket: "movuerevue.appspot.com",
  messagingSenderId: "964753900762",
  appId: "1:964753900762:web:e70955868e0106e45cd1e3",
  measurementId: "G-6TLMGG6LRS",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 필요한 경우 Auth와 Firestore를 변수로 초기화합니다.
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
