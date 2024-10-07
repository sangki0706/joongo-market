'use client';

import { useAuthStore } from '@/zustand/auth.store';
import { PropsWithChildren, useEffect } from 'react';
import supabase from '../../../../supabase/client';

function AuthProvider({children}: PropsWithChildren) {

    const logIn = useAuthStore((state) => state.isLogIn);
    const logOut = useAuthStore((state) => state.isLogOut);

    useEffect(() => {
        (async() => {
            await supabase.auth.onAuthStateChange((_event, session) => {
                if(session?.user){
                    logIn();
                }else{
                    logOut();
                }
            })
        })();
    },[logOut, logIn]);

  return children;
}

export default AuthProvider