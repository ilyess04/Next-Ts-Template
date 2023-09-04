import axios, { AxiosResponse } from "axios";
class DashboardAPI {
  async getDashboardData(): Promise<AxiosResponse> {
    const _apis = axios.create({
      baseURL: `${process.env.API_URL}` + "/dashboard",
    });
    return await axios.get("/getdashboard");
  }
}
export { DashboardAPI };
