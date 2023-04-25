import { ReactElement } from 'react';
import { Container } from '@mui/system';
import { textLabels } from '../../const/const';
import { PortalActions, ReceivedData } from '../../hooks/use-portal-actions';
import { Payroll } from '../payroll/payroll-di';

export type MonthlyReportProps = Pick<
  ReceivedData,
  'data' | 'sendMonthlyReport'
>;
export const createPortal = (
  usePortalActions: () => PortalActions,
  monthlyReport: (props: MonthlyReportProps) => ReactElement,
  useMyPortalServices: () => PortalActions,
  fileUploadInput: () => ReactElement,
) => {
  function Portal() {
    const MonthlyReport = monthlyReport;
    const FileUploadInput = fileUploadInput;
    const actions = usePortalActions();
    // const isButtonDisabled = (mode: PortalActions['mode']) =>
    //   mode === 'firstTime';
    const actionData = useMyPortalServices();

    return (
      <Container>
        <>
          <FileUploadInput />
          {/* <Button variant='contained' disabled={isButtonDisabled(actions.mode)}>
            {textLabels.send}
          </Button> */}
          {actions.mode === 'error' ? (
            <span>{actions.errorMessage}</span>
          ) : null}
          {actions.mode === 'sending-data' ? (
            <span>{textLabels.sending}</span>
          ) : null}
          {actionData.mode === 'received-data' ? (
            <MonthlyReport
              data={actionData.data}
              sendMonthlyReport={actionData.sendMonthlyReport}
            />
          ) : null}
          {actions.mode === 'received-payroll-data' ? <Payroll /> : null}
        </>
      </Container>
    );
  }
  return Portal;
};
