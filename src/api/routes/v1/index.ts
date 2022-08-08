import { Router } from 'express';
import { parseXmlJson } from '../../controllers';

const router = Router();

router.route('/xml').post(parseXmlJson);

export default router;
