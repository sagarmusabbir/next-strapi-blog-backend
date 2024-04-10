module.exports = ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS", "d5d7cdbc107510045117eb4bb1c0b6ce"),
  },
});
