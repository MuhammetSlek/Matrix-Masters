const app = express(); 
app = express();

app.get("/", (req, res) => {
res.send("<h1>Hello</h1>")

})

const routes = require("./routes");
app. use(routes) ;

app.set("view engine", "ejs");