import { db } from "./";
import { ref, onValue, set } from "firebase/database";

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
    first_token: token,
  });
};

// add second token to user
const addSecondTokenToUser = (user, token) => {
  set(ref(db, "users/" + user._id), {
    ...user,
    second_token: token,
  });
};

// add confirm to user
const addConfirmToUser = (user, confirm) => {
  set(ref(db, "users/" + user._id), {
    ...user,
    confirm,
  });
};

export { getUsersData, addTokenToUser, addConfirmToUser, addSecondTokenToUser };
