import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

global.mongooseConn = global.mongooseConn || { conn: null, promise: null };

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI in .env.local");
  }

  if (global.mongooseConn.conn) return global.mongooseConn.conn;

  if (!global.mongooseConn.promise) {
    global.mongooseConn.promise = mongoose
      .connect(uri, { dbName: "portfolio" })
      .then((m) => m);
  }

  global.mongooseConn.conn = await global.mongooseConn.promise;
  return global.mongooseConn.conn;
}
