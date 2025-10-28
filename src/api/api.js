import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

export const createContact = async (
  name,
  email,
  phone,
  query,
  category,
  date,
  time,
  time2
) => {
  return axios.post(url + "create/query", {
    name,
    email,
    phone,
    query,
    category,
    date: date || null,
    time: time || null,
    time2: time2 || null,
  });
};

export const getContact = async (page, size, category, date, token) => {
  return axios.get(url + "get/query", {
    params: {
      page,
      size,
      category,
      date,
    },
    headers: { token },
  });
};

export const createServiceAPI = async (myform, token) => {
  return axios.post(url + "create/service", myform, {
    headers: { "Content-Type": "multipart/form-data", token },
  });
};

export const updateServiceAPI = async (myform, token) => {
  return axios.post(url + "update/service", myform, {
    headers: { "Content-Type": "multipart/form-data", token },
  });
};

export const getServicesAPI = async (page, size, query, token) => {
  return axios.get(url + "get/service", {
    params: {
      page,
      limit: size,
      query,
    },
    headers: { token },
  });
};

export const deleteServicesAPI = async (id, token) => {
  return axios.get(url + "delete/service", {
    params: {
      id,
    },
    headers: { token },
  });
};

export const getNewsletter = async (page, size, query, token) => {
  return axios.get(url + "get/newsletter", {
    params: {
      page,
      size,
      query,
    },
    headers: { token },
  });
};

export const CreateNewsletter = async (email) => {
  return axios.get(url + "create/newsletter", {
    params: {
      email,
    },
  });
};

export const getNews = async (page, size, query, token) => {
  return axios.get(url + "get/news", {
    params: {
      page,
      size,
      query,
    },
    headers: { token },
  });
};

export const createNews = async (title, description, status, link, token) => {
  return axios.get(url + "create/news", {
    params: {
      title,
      description,
      status,
      link,
    },
    headers: { token },
  });
};

export const updateNews = async (
  title,
  description,
  status,
  id,
  link,
  token
) => {
  return axios.get(url + "update/news", {
    params: {
      title,
      description,
      status,
      id,
      link,
    },
    headers: { token },
  });
};

export const deleteNewsAPI = async (id, token) => {
  return axios.get(url + "delete/news", {
    params: {
      id,
    },
    headers: { token },
  });
};

export const getAnalyticsApi = async (token) => {
  return axios.get(url + "get/analytics", {
    params: {},
    headers: { token },
  });
};

export const loginAPI = async (email, password) => {
  return axios.post(url + "login", {
    email,
    password,
  });
};

export const loadAPI = async (token) => {
  return axios.get(url + "get/analytics", {
    headers: {
      token,
    },
  });
};

export const sendMailAPI = async (name, email, query, message, token) => {
  return axios.get(url + "send/mail", {
    params: { name, email, query, message },
    headers: {
      token,
    },
  });
};

export const fetchNewsAPI = async () => {
  return axios.get(url + "fetch/news", {});
};

export const fetchServicesAPI = async () => {
  return axios.get(url + "fetch/service", {});
};

export const fetchServiceDetailAPI = async (id) => {
  return axios.get(url + "service/detail", { params: { id } });
};
