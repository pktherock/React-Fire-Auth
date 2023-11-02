import { auth } from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

class AuthService {
  getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged({
        next: (auth) => {
          console.log(auth);
          resolve(auth);
        },
        error: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });
  };

  createAccount = async (userName, email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      auth.currentUser.displayName = userName;
      await updateProfile(auth.currentUser, { displayName: userName });
      await sendEmailVerification(auth.currentUser);
      return user;
    } catch (error) {
      console.log("Firebase service :: createAccount :: error", error);
      throw error;
    }
  };

  login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
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

  sendResetPasswordLink = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log("Firebase service :: sendResetPasswordLink :: error", error);
      throw error;
    }
  };
}

const authService = new AuthService();

export default authService;
