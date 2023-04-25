import { createApp } from '././App';
import { useUserAuth } from '../../hooks/use-user-auth-di';
import {Button} from '@mui/material';

const authorizationUrl = 'https://google.com';

export const App = createApp(useUserAuth, Button, authorizationUrl);
