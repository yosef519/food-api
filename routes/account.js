// בס"ד

import express from "express";
import axios from "axios";
const router = express.Router();

//GET
router.get("/seyWelcome", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((results) => {
      const users = results.data;
      let new_arr = [];

      users.forEach((y) => {
        const person = {
          person_name: y.name,
          person_email: y.email,
          person_company: y.company.name,
          person_city: y.address.city,
        };
        new_arr.push(person);
      });

      //   FOREACH
      //   console.log("Number of users: " + users.length);
      //   users.forEach((x) => {
      //     console.log(x.name + " - " + x.company.name);
      //   });

      //   FILTER -> return array
      const arr = users.filter((x) => parseInt(x.id) > 5);

      //   FIND -> return object
      const obj = users.find((x) => x.email != "");

      return res.status(200).json({ data: new_arr });
    })

    .catch((error) => {
      return res.status(500).json({ massage: error.massage });
    });
});

//POST
router.post("/seyMyName", (req, res) => {
  const { userName, password } = req.body;
  return res
    .status(200)
    .json({ massage: `Hello ${userName} Your password is ${password}` });
});

export default router;
