import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function contactUs(data: any): Promise<any | null> {
  try {
    const response = await axiosInstance.post("/contact", data);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      "Error sending contact form:",
      error.response?.data || error.message
    );
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function bookDemo(data: any): Promise<any | null> {
  try {
    const response = await axiosInstance.post("/book-demo", data);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      "Error sending contact form:",
      error.response?.data || error.message
    );
    return null;
  }
}
