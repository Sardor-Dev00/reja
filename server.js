const http = require("http");
const mongodb = require("mongodb");
const connectionString = "mongodb+srv://sam:oMbhCS40xBXV8GFX@cluster0.3orve.mongodb.net/Reja?=true&w=majority&appName=Cluster0"

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function() {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);
