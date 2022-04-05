import { getUsers2Data, addTokenToUser2 } from "../../firebase/db";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, code } = JSON.parse(req.body);

    await getUsers2Data().then((data) => {
      const [user] = data.filter((item) => item.email === email);

      if (user.confirm.toString() === code.toString()) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            iat: new Date().getTime() / 1000 + 30,
          },
          process.env.JWT_SECRET
        );
        addTokenToUser2(user, token);
        res.json({
          status: 200,
          message: "success",
          email: user.email,
          token,
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
