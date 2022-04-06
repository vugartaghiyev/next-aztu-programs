import { getUsersData, addSecondTokenToUser } from "../../firebase/db";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, code } = JSON.parse(req.body);

    await getUsersData().then((data) => {
      const [user] = data.filter((item) => item.email === email);

      if (user.confirm.toString() === code.toString()) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            iat: new Date().getTime() / 1000 + 60 * 60,
          },
          process.env.JWT_SECRET
        );
        addSecondTokenToUser(user, token);
        res.json({
          status: 200,
          message: "success",
          email: user.email,
          second_token: token,
        });
      } else {
        res.json({
          status: "401",
          message: "Kod yanlışdır",
        });
      }
    });
  }
};

export default handler;
