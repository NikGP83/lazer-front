import { textLabels } from '../../const/const';
import { EmployeeReceipt } from '../../types/types';


function PayrollItem(data: EmployeeReceipt) {
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <>
      <div className='projectTitle'>
        Проект:<span className='location'></span>
      </div>
      <table className='payrollTable'>
        <tbody>
          <tr>
            <td className='payrollColumnCell'>
              <span className='payrollColumnTitle'>
                {textLabels.payrollNameColumn}
              </span>
            </td>
            <td className='payrollColumnCell'>
              <span className='payrollColumnTitle'>
                {textLabels.employeePositionColumn}
              </span>
            </td>
            {data.advance && (
              <td className='payrollColumnCell'>
                <span className='payrollColumnTitle'>
                  {textLabels.advanceColumn}
                </span>
              </td>
            )}
            <td className='payrollColumnCell'>
              <span className='payrollColumnTitle'>
                {textLabels.totalSalaryColumn}
              </span>
            </td>
          </tr>

          <tr>
            <td className='payrollCell'>{data.name}</td>
            <td className='payrollCell'>{data.position}</td>
            {data.advance && <td className='payrollCell'>{data.advance}</td>}

            <td className='payrollCell'>{data.salary}</td>
          </tr>
        </tbody>
      </table>
      <div className='payrollInfo'>
        <span className='payrollExtraditionDate'>Дата выдачи</span>
        <div className='quotLine'>
          <span className='leftQuote'>&quot;</span>&quot;
        </div>
        <div className='dateLine'></div>
        <div className='signature'>Подпись</div>
        <div className='signatureLine'></div>
      </div>
    </>
  );
}

export default PayrollItem;
