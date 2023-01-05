import { toast } from 'react-toastify';

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export const errorHandler = async (response: Response) => {
  if (!response.ok) {
    const json: { statusCode: number; message: string } = await response.json();
    return toast.error(`Response failed! Error: ${json.message}`);
  }
  return response.json();
};
