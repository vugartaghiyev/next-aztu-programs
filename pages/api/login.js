import { getUsersData, addTokenToUser } from "../../firebase/db";

import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const user = JSON.parse(req.body);

    await getUsersData().then((data) => {
      const [isUser] = data.filter((item) => item.email === user.email);
      if (isUser) {
        if (isUser.password.toString() === user.password.toString()) {
          const token = jwt.sign(
            {
              _id: isUser._id,
              email: isUser.email,
              // add iat as an object element
              iat: new Date().getTime() / 1000 + 60 * 60,
            },
            process.env.JWT_SECRET
          );
          addTokenToUser(isUser, token);
          res.json({
            status: 200,
            message: "success",
            email: isUser.email,
            token,
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
