import axios from "axios";

// Configurando a URL padrão do nosso backend em uma instância do Axios

const api = axios.create({
  baseURL: "http://localhost:3000/db/db.json/",
});

export default api;