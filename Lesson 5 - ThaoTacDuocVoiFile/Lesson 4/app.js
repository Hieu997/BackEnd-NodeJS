const fs = require("fs");
const axios = require("axios").default;

axios
  .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((response) => {
    if (response.status === 200) {
      var buf = Buffer.from(JSON.stringify(response.data));
      fs.writeFileSync("data.json", buf, function (err) {
        console.log(err);
      });
    }
  });
