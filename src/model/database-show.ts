import express,{ Request, Response, NextFunction} from "express";
import { configDotenv } from "dotenv";
import { Database } from "sqlite3";

configDotenv();
