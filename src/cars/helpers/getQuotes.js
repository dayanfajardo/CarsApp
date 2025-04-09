import authApi from "../../auth/api/authApi";

export const getQuotes = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await authApi.get("/quotes", {
      headers: {
        "x-token": token
      }
    });

    return data.quotes || [];
  } catch (error) {
    console.error("Error obteniendo cotizaciones", error);
    return [];
  }
};
