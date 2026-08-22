import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Sentinel AI Backend running at http://localhost:${PORT}`);
});

export { app };
export default app;
