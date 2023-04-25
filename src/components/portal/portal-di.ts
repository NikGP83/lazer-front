import { useMyPortalServices } from '../../hooks/use-my-portal-services';
import { usePortalActions } from '../../hooks/use-portal-actions';
import { FileUploadInput } from '../file-upload-input/file-upload-input-di';
import { MonthlyReport } from '../monthly-report/monthly-report-di';
import { createPortal } from './portal';


export const Portal = createPortal(usePortalActions, MonthlyReport, useMyPortalServices, FileUploadInput);

