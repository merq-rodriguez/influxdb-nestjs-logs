export interface ILogger{
  host: string;
  connection: string;
  endpoint: string;
  method: string;
  user_agent: string;
  response_timeout: string;
  cookies?: string;
  user?: string;
  error?: string;
  accessToken?: string;
  refreshToken?: string;
}