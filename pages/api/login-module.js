import { getUsers2Data, addConfirmToUser2 } from "../../firebase/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const user = JSON.parse(req.body);

    await getUsers2Data().then((data) => {
      console.log(data);
      const [isUser] = data.filter((item) => item.email === user.email);
      if (isUser) {
        if (isUser.password.toString() === user.password.toString()) {
          const confirmCode = generateNumber();
          addConfirmToUser2(isUser, confirmCode);
          res.json({
            status: 200,
            message: "success",
            email: isUser.email,
            confirmCode,
          });
        } else {
          res.json({
            status: 401,
            message: "Email və ya şifrə yanlışdır",
          });
        }
      } else
        res.json({
          status: "401",
          message: "Email və ya şifrə yanlışdır",
        });
    });
  }
};

export default handler;

const generateNumber = () => {
  const number = Math.floor(Math.random() * 10000);
  if (number < 1000) {
    return `0${number}`;
  }
  return number;
};
