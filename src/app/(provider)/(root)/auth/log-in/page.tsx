'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import supabase from "../../../../../../supabase/client";

function LogInPage() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClickLogInButton = async () => {

        if(!email) return alert("이메일이 입력되지 않았습니다");
        if(!email.includes("@") && email.includes(".")) return alert("이메일 양식이 맞지 않습니다");
        if(!password) return alert("비밀번호가 없습니다 비밀번호를 입력해주세요");
        if(password.length < 6) return alert("비밀번호가 6글자 이상이 아닙니다 6글자 이상 작성해주세요");

        const response = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(!response){
            alert("로그인에 실패했습니다");
        }else{
            alert("로그인에 성공했습니다");
        }

        router.push("/");

    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">

                <label htmlFor="email" className='mb-2 text-left text-sm font-medium text-gray-700'>이메일</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} id='email' type="email" className='border border-black h-10 w-96 '  />

                <label htmlFor="password" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} id='password' type="password" className='border border-black h-10 w-96 '  />

                <button onClick={handleClickLogInButton} className='h-14 w-96 bg-black text-white mt-8'>로그인</button>
        </div>

        </main>
    )
}

export default LogInPage