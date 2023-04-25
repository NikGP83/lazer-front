import { Form, json, redirect } from 'react-router-dom';
import { store } from '../..';
import { textLabels } from '../../const/const';
import { portalAPI } from '../../services/portal-services';

export const createFileUploadInput = () => {
  function FileUploadInput() {
    return (
      <Form method='post' action='/upload-file' encType='multipart/form-data'>
        <label htmlFor='upload-file'>
          <span>{textLabels.yourFile}</span>
        </label>
        <input
          id='upload-file'
          placeholder={textLabels.dropYourFile}
          name='user-file'
          type='file'
          multiple
        />
        <input type='text' name='message' />
        <button>Отправить файл</button>
      </Form>
    );
  }
  return FileUploadInput;
};

const analyzeResponseResult = (res) => {
  if(json(res).status === 401){
    return redirect('login');
  }
  if(json(res).status === 403){
    return redirect('login');
  }
  if(json(res).status === 404){
    return {error: 'ошибка'};
  }
  return redirect('/');
}; 

export const fileUploadInputAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    data: data.get('user-file'),
  };
  const result = await store.dispatch(portalAPI.endpoints.postFileReport.initiate(submission));
  analyzeResponseResult(result);
};
