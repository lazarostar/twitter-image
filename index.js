const TwitterApi = require("twitter-api-v2");
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
const imageData = fs.readFileSync(process.env.IMAGE_PATH);

client.v1.media.upload({ media_data, imageData }).then((media) => {
  console.log(media.media_id_string);
});
