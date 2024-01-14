
import Input from "./Input"


export default function Resault({initial, annual, expected, duration}){

    const capital = () => {
        const total = initial + annual;
        console.log(total);
        return total;
        
    }

    const calculateInvestmentResults = () => {

        const annualData = [];
        let investmentValue = initial;
        let total = 0;
        let capital = initial;
      
        for (let i = 0; i < duration; i++) {
          const interestEarnedInYear = investmentValue * (expected / 100);
          investmentValue += interestEarnedInYear + annual;
          total +=interestEarnedInYear;
          capital += annual
          annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annual: annual, // investment added in this year
            totalY: total, // Total
            capital: capital,
          });
        }
        console.log(annualData);
        return annualData;
    }
    const obiektDanych = calculateInvestmentResults();

    const tablica = obiektDanych.map((element, indeks) => (
        <tr>
            <td>{element.year}</td> 
            <td>{parseFloat(element.valueEndOfYear.toFixed(2))}</td> 
            <td>{parseFloat(element.interest.toFixed(2))}</td>
            <td>{parseFloat(element.totalY.toFixed(2))}</td> 
            <td>{parseFloat(element.capital.toFixed(2))}</td> 
        </tr>

    ))
    return(
        
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th> 
                        <th>Investment Value</th> 
                        <th>Interest Year</th>
                        <th>Total Interest</th> 
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>{tablica}</tbody>
            </table>
        </div>
    )
}