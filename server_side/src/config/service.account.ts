import envConfig from './env.config'


export const serviceAccount = {
  type: envConfig.type!,
  project_id: envConfig.projectId!,
  private_key_id: envConfig.privateKeyId!,
  private_key: envConfig.privateKey!,
  client_email: envConfig.clientEmail!,
  client_id: envConfig.clientId!,
  auth_uri: envConfig.authUri!,
  token_uri: envConfig.tokenUri!,
  auth_provider_x509_cert_url: envConfig.authProviderX509CertUrl!,
  client_x509_cert_url: envConfig.clientX509CertUrl!,
  universe_domain: envConfig.universeDomain!
}
