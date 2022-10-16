import React, { useState } from 'react';
import { useGoogleLogin, CodeResponse } from '@react-oauth/google';
import axios from 'axios';
import ButtonLogin from '../common/ButtonForLogin/ButtonLogin';

//серверная прослойка скрипта
const code = `
const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (tokenResponce) => {
        console.log(tokenResponce);
        const userInfo = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: 'Bearer <tokenResponse.access_token>' } }
        );

        console.log(userInfo);
    },
    onError: errorResponce => console.log(errorResponce)
});
`;

const AuthCom: React.FC<any> = () => {
    const [codeResponse, setCodeResponse] = useState<CodeResponse | null>();

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async codeResponse => {
            setCodeResponse(codeResponse);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <div>
            <ButtonLogin login={() => googleLogin()} />
        </div>
    );
}

export default AuthCom;