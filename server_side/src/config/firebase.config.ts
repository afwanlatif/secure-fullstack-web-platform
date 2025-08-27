import admin, { ServiceAccount } from 'firebase-admin';
import { serviceAccount } from './service.account';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export default admin;
