import { auth } from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class AuthService {
  getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged({
        next: (auth) => resolve(auth),
        error: (error) => reject(error),
      });
    });
  };

  createAccount = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      console.log("Firebase service :: createAccount :: error", error);
      throw error;
    }
  };

  login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Firebase service :: login :: error", error);
      throw error;
    }
  };

  logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Firebase service :: logout :: error", error);
      throw error;
    }
  };
}

const authService = new AuthService();

export default authService;
