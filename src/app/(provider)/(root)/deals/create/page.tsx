
function DealsCreatePage() {


return (
    <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 w-full max-w-md">
                <h2 className="text-left text-xl font-bold mb-10">판매글 작성하기</h2>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-left font-medium">글 제목</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 w-2/3" />
                    </div>

                    <div className="flex justify-between items-start">
                        <label className="text-left font-medium">글 내용</label>
                        <textarea className="border border-gray-300 rounded-md p-2 w-2/3"></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="text-left font-medium">직거래 위치</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 w-2/3" />
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="text-left font-medium">판매 가격</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 w-2/3" />
                    </div>
                </div>

                <button className="mt-6 bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    판매글 작성하기
                </button>
            </div>
        </div>



)
}

export default DealsCreatePage