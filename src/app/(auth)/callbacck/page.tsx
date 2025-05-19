import { onAuthenticateUser } from '@/actions/auth';
import { redirect } from 'next/navigation';

// TODO: Implement the auth callback page
// This page is used to handle the callback from the authentication provider
// and process the authentication response.

export const dyn = 'force-dynamic';

const AuthCallbackPage = async () => {
    const auth = await onAuthenticateUser();
    if(auth?.status === 200 || auth?.status === 201) {
        redirect('/home')
    }

    return (<div>This is the auth callback page</div>);
}
export default AuthCallbackPage;