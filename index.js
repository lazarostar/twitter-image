const { TwitterApi } = require("twitter-api-v2");
const fs = require("fs");

require("dotenv").config({ path: ".env" });

// Set up the Twitter API client
const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Read the image file
// const imageData = fs.readFileSync(process.env.IMAGE_PATH).toString("base64");

// console.log(imageData.slice(0, 20) + "...");

// client.v1
//   .uploadMedia(Buffer.from(process.env.IMAGE_PATH), { mimeType: "image/png" })
//   .then((response) => {
//     console.log(response);
//   });

client.v2
  .get("tweets/search/recent", {
    query: "nodeJS",
    max_results: 100,
  })
  .then((result) => {
    console.log(result.data); // TweetV2[]
  });
