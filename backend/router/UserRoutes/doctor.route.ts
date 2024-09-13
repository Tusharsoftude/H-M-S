// src/routes/doctorRoutes.ts
import { Router } from 'express';
import { registerDoctor,signInDoctor} from '../../controller/doctor.controller';

const router = Router();

// Register a new doctor
router.post('/register', registerDoctor);
router.post('/signin',signInDoctor)
export default router;
