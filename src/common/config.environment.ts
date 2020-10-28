export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  db: {
    DB_TYPE: process.env.DB_TYPE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT, 10) || 3306,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    BD_SYNCHRONIZE: Boolean(process.env.BD_SYNCHRONIZE),
    DB_LOGGING: Boolean(process.env.DB_LOGGING)
  },
  influx: {
    name: process.env.INFLUX_NAME, 
    host: process.env.INFLUX_HOST,
    port: parseInt(process.env.INFLUX_PORT, 10) || 8086,
    username: process.env.INFLUX_USER,
    password: process.env.INFLUX_PASSWORD,
  }
});