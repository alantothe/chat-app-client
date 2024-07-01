"use client";
import axios, { AxiosInstance } from "axios";

const apiUrl = process.env.CHAT_API_SERVER;

const api: AxiosInstance = axios.create({
  baseURL: apiUrl,
});

export default api;
