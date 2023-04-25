import { MonthlyReportData } from './../types/types';
import {
  firstTime,
  error,
  receivedData,
  loadingTime,
} from './helpers/portal-services-hook-helper';
import { portalAPI } from '../services/portal-services';
import { PortalActions } from './use-portal-actions';

interface ValidateFetchStatus {
  data?: MonthlyReportData;
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
}

const validateFetchStatus = (values: ValidateFetchStatus) => {
  const { data, isError, isFetching, isLoading } = values;
  if(Array.isArray(data)){
    throw new Error();
  }
  if (isFetching) {
    return firstTime();
  }
  if (isError) {
    return error();
  }
  if (data) {
    return receivedData(data);
  }
  if (isLoading) {
    return loadingTime();
  }
  throw new Error();
};

export const useMyPortalServices: () => PortalActions = () => {
  const values =
    portalAPI.useFetchMonthlyDataQuery('monthlyReport');
  const statusResult = validateFetchStatus(values);
  return statusResult;
};
