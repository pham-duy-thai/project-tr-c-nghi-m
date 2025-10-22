import React from 'react'

const Results = () => {
  return (
    <div>
      <h2>Kết Quả</h2>
      <p className = "result">Bạn đã trả lời đúng 2/10 câu</p>
      <div className = "resultButtonContainer" >
        <button className = "result_button" >Xem Lại</button>
          <button className = "result_button" >Làm Lại</button>
      </div>
    </div>
  )
}

export default Results