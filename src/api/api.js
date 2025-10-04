import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const createContact = async (name, email, phone, query, category) => {
  return axios.post(url + "create/query", {
    name,
    email,
    phone,
    query,
    category,
  });
};

export const getContact = async (page, size, category, date) => {
  return axios.get(url + "get/query", {
    params: {
      page,
      size,
      category,
      date,
    },
  });
};

export const createServiceAPI = async (myform) => {
  return axios.post(url + "create/service", myform, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateServiceAPI = async (myform) => {
  return axios.post(url + "update/service", myform, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getServicesAPI = async (page, size, query) => {
  return axios.get(url + "get/service", {
    params: {
      page,
      limit: size,
      query,
    },
  });
};

export const deleteServicesAPI = async (id) => {
  return axios.get(url + "delete/service", {
    params: {
      id,
    },
  });
};
