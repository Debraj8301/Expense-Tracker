import React from 'react'
const isIncome = Math.round(Math.random());
const InfoCard = () => {
    return (
        <div style={{textAlign: 'center', padding: '0 10%' }}>
            Try Saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            of {isIncome ? '100 ' : '500 '}
            rupess in category {isIncome ? 'Salary ' : 'Shopping '}
            on {isIncome ? 'Monday' : 'Tommorrow'}
        </div>
    )
}

export default InfoCard;
