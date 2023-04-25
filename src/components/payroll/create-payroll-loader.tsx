import { ReceiptLedger } from '../../types/types';

// interface PayrollLoaderFetchArgs {
//   id: string;
// }

export interface PayrollInjection {
  getPayrollData: (
    // p: PayrollLoaderFetchArgs
  ) => Promise<ReceiptLedger[] | undefined>;
}

const validateLoaderParam = (p: unknown) => p as {params: {id: string}};


export const createPayrollLoader = (i: PayrollInjection) => {
  const {getPayrollData} = i;

  return async (p: unknown = undefined) => {
    const {params} = validateLoaderParam(p);
    return await getPayrollData();
  };
};


