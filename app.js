const express = require("express");
const axios = require("axios");
const app = express();

app.get("/get-cnpj/:cnpj", async (req, res) => {
  if (req.params?.cnpj) {
    try {
      const result = await axios.get(
        `https://www.receitaws.com.br/v1/cnpj/${req.params?.cnpj}`
      );
      return res.status(200).json({
        data: { ...result.data },
      });
    } catch (error) {
      return res.status(429);
    }
  } else {
    res.status(404).json({
      message: "Bad request.",
    });
  }
});

app.listen(3000, () => console.log("Connected"));
