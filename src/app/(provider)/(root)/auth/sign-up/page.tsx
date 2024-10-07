'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import supabase from '../../../../../../supabase/client';

function SignUpPage() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleClickSignUpButton = async() => {

    if(!email) return alert("이메일 주소가 없습니다 이메일 주소를 입력해주세요");
    if(!password) return alert("비밀번호가 없습니다 비밀번호를 입력해주세요");
    if(password.length < 6) return alert("비밀번호가 6글자 이상이 아닙니다 6글자 이상 작성해주세요");
    if(!passwordConfirm) return alert("비밀번호 확인이 없습니다 비밀번호 확인을 입력해주세요 ");
    if(!email.includes("@") && !email.includes(".")) return alert("이메일 양식이 맞지 않습니다");
    if(password !== passwordConfirm)return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    const response = await supabase.auth.signUp({
        email,
        password
    });

    if(!response){
        alert("회원가입에 실패했습니다");
    }else{
        alert("회원가입이 완료되었습니다, 감사합니다.");
    }
    router.push("/");
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="font-bold text-3xl mb-4">회원가입</h2>

                <label htmlFor="email" className='mb-2 text-left text-sm font-medium text-gray-700'>이메일</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' type="email" className='border border-black h-10 w-96 '  />

                <label htmlFor="password" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' type="password" className='border border-black h-10 w-96 '  />

                <label htmlFor="passwordconfirm" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호확인</label>
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} id='passwordconfirm' type="password" className='border border-black h-10 w-96 '  />

                <button onClick={handleClickSignUpButton} className='h-14 w-96 bg-black text-white mt-8'>회원가입하기</button>
            </div>
        </main>
    )
}

export default SignUpPage