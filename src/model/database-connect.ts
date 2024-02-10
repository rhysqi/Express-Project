import { Database } from "sqlite3"
import { configDotenv } from "dotenv";

configDotenv();
let DB = process.env.DB_NAME;

const Connect_DB = new Database(`${DB}`, (err) => {
    if (err) {
        alert("Error open database" + err.message);
    }
    else{
        alert("Database connect");
    }
});