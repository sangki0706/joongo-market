'use client';

import { useAuthStore } from '@/zustand/auth.store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import supabase from '../../../../../supabase/client';

function Header() {
    const router = useRouter();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const logOut = useAuthStore((state) => state.isLogOut)
    const handleClickLogOut = async() => {
        await supabase.auth.signOut();
        logOut();
        alert("로그아웃되었습니다");

    }
    const handleClickDealsCreateButton = () => {
        if(isLoggedIn === false){
            return router.push("/auth/log-in");
        }else{
            return router.push("/deals/create");
        }
    }
    const handleClickMyDealsButton = () => {
        if(!isLoggedIn){
            return router.push("/auth/log-in");
        }else{
            return router.push("/my/deals");
        }
    }
    return (
        <header className='flex justify-between items-center p-4 border-b border-black'>

            <div className='flex space-x-4'>
                <Link href={"/"} className='font-bold text-xl'>중고마켓</Link>
                <button onClick={handleClickDealsCreateButton}>판매하기</button>
                <button onClick={handleClickMyDealsButton} >내 판매글</button>
            </div>

            {isLoggedIn ? (
                <div>
                    <button onClick={handleClickLogOut}>로그아웃</button>
                </div>
            ) : (
            <div className='flex space-x-4'>
                <Link href={"/auth/log-in"}>로그인</Link>
                <Link href={"/auth/sign-up"}>회원가입</Link>
            </div>
            )}
        </header>
    )
}

export default Header