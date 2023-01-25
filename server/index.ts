import server from "./app";

const app = server();

const port = app.get("PORT");

app.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});

