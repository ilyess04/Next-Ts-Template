import axios, { AxiosResponse } from "axios";
class DashboardAPI {
  _apis = axios.create({
    baseURL: `${process.env.API_URL}` + "/dashboard",
  });
  async getDashboardData(): Promise<AxiosResponse> {
    return await this._apis.get("/getdashboard");
  }
}
export { DashboardAPI };
