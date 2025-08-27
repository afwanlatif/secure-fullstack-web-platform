import dotenv from 'dotenv';
dotenv.config();


const { PORT, DATABASE_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, TYPE,
    PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_EMAIL, CLIENT_ID, AUTH_URI, TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL, CLIENT_X509_CERT_URL, UNIVERSE_DOMAIN } = process.env;

export default {
    port: PORT,
    database: DATABASE_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: DB_DIALECT,
    type: TYPE,
    projectId: PROJECT_ID,
    privateKeyId: PRIVATE_KEY_ID,
    privateKey: PRIVATE_KEY,
    clientEmail: CLIENT_EMAIL,
    clientId: CLIENT_ID,
    authUri: AUTH_URI,
    tokenUri: TOKEN_URI,
    authProviderX509CertUrl: AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: CLIENT_X509_CERT_URL,
    universeDomain: UNIVERSE_DOMAIN

};
