import axiosInstance from "@/lib/axios";

export type responseData = {
  success: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any;
  message: string;
  status: number;
};

export default async function postHandler(
  URL: string,
  formData: object,
  type = "application/json"
): Promise<responseData> {
  const headers = {
    "Content-Type": type,
  };
  const response: responseData = {
    success: false,
    data: null,
    message: "",
    status: 500,
  };
  try {
    const res = await axiosInstance.post(URL, formData, { headers });
    response.success = res.data.success;
    response.data = res.data.data;
    response.message = res.data.message;
    response.status = res.status;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (err: any) {
    if (err.response) {
      response.success = false;
      response.data = err.response.data;
      response.message = err.response.data.message || err.message;
      response.status = err.response.status;
    } else if (err.request) {
      response.success = false;
      response.data = null;
      response.message = "No response received from server";
      response.status = 503;
    } else {
      response.success = false;
      response.data = null;
      response.message = err.message;
      response.status = 500;
    }
  }
  return response;
}