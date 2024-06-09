import axios from "axios";
const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("Error while addUser api", err.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (err) {
    console.log("Error while getUsers api", err.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (err) {
    console.log("Error while setConversation api", err.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log("Error while getConversation api", err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/message/add`, data);
    return response.data;
  } catch (err) {
    console.log("Error while calling newMessage api", err.message);
  }
};

export const getMessages = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log("Error while calling getMessages api", err.message);
  }
};

export const UploadFile = async (data) => {
  console.log(data);
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (err) {
    console.log("Error while uploading file", err.message);
  }
};
