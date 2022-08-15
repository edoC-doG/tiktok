// 1.memo() --> Higher Order Component (HOC)
// 2.useCallBack()
//React.memo được gọi là Higher order component (HOC). Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.
//Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết. 

import {memo} from 'react'

    function Memo({onIncrease}) {
        console.log('render')
    return (
        <div>
            <h1>Long</h1>
            <button onClick={onIncrease}>Click Memo</button>
        </div>
    )
}

export default memo(Memo);