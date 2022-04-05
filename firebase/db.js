import { db } from "./";
import { ref, onValue, set } from "firebase/database";

// ------------------- table 1

const getUsersData = () => {
  let data = "";
  const starCountRef = ref(db, "users");

  return new Promise((resolve) => {
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();
      resolve(data);
    });
  });
};

// add token to user
const addTokenToUser = (user, token) => {
  set(ref(db, "users/" + user._id), {
    ...user,
    token,
  });
};

// ------------------- table 2

const getUsers2Data = () => {
  let data = "";
  const starCountRef = ref(db, "users2");

  return new Promise((resolve) => {
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();
      resolve(data);
    });
  });
};

// add token to user2
const addTokenToUser2 = (user, token) => {
  set(ref(db, "users2/" + user._id), {
    ...user,
    token,
  });
};

// add token to user2
const addConfirmToUser2 = (user, confirm) => {
  set(ref(db, "users2/" + user._id), {
    ...user,
    confirm,
  });
};

export {
  getUsersData,
  addTokenToUser,
  getUsers2Data,
  addTokenToUser2,
  addConfirmToUser2,
};
