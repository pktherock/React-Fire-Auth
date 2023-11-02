import { auth } from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  verifyBeforeUpdateEmail,
  updatePassword,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
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

  #reAuthenticate = async (currentPassword) => {
    const credentials = EmailAuthProvider.credential(
      auth.currentUser?.email,
      currentPassword
    );
    return await reauthenticateWithCredential(auth.currentUser, credentials);
  };

  updateUserEmail = async (password, newEmail) => {
    console.log(password, newEmail);
    try {
      await this.#reAuthenticate(password);
      await verifyBeforeUpdateEmail(auth.currentUser, newEmail);
      return auth.currentUser;
    } catch (error) {
      console.log("Firebase service :: updateEmail :: error", error);
      throw error;
    }
  };

  updateUserPassword = async (password, newPassword) => {
    try {
      await this.#reAuthenticate(password);
      await updatePassword(auth.currentUser, newPassword);
      return auth.currentUser;
    } catch (error) {
      console.log("Firebase service :: updateUserPassword :: error", error);
      throw error;
    }
  };

  deleteUserFromDB = async (currentPassword) => {
    try {
      await this.#reAuthenticate(currentPassword);
      await deleteUser(auth.currentUser);
      return { success: true };
    } catch (error) {
      console.log("Firebase service :: deleteUserFromDB :: error", error);
      throw error;
    }
  };
}

const authService = new AuthService();

export default authService;
