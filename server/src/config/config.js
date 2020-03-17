module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'TabTrackerDB',
    user: process.env.USER || 'mor',
    password: process.env.PASS || '123123',
    dialect: process.env.DIALECT || 'mssql'
  }
}
