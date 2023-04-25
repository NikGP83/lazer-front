import { ReceiptLedger } from './../../types/types';
import { store } from '../..';
import { portalAPI } from '../../services/portal-services';
import { PayrollInjection } from './create-payroll-loader';


const adapt = (data: unknown): ReceiptLedger[] => data as ReceiptLedger[];
export const getPayrollData: PayrollInjection['getPayrollData'] = async (

) => {
  const subscription = await store.dispatch(
    portalAPI.endpoints.fetchPayrollData.initiate()
  );
  const {data} = subscription;
  return adapt(data);

};
