module.exports = {
  apps: [
    {
      name: 'node-backend',
      script: './index.js',
      env: {
        PORT: 5000,
        JWT_SECRET: '${{ secrets.JWT_SECRET }}',
        MONGO_URI: '${{ secrets.MONGO_URI }}',
        PG_USER: '${{ secrets.PG_USER }}',
        PG_HOST: '${{ secrets.PG_HOST }}',
        PG_DB: '${{ secrets.PG_DB }}',
        PG_PASS: '${{ secrets.PG_PASS }}',
        PG_PORT: 5432,
      },
    },
  ],
}
