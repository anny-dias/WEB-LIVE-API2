import {} from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory'
import { EstatDiv } from '../css/estilo';

function Estatistica(){

    const data =[
        {Produto:1, Valor: 1000},
        {Produto:2, Valor: 900},
        {Produto:3, Valor: 800},
        {Produto:4, Valor: 700},
    ];

    return(
        <EstatDiv>
            <div className='estatistica'>
                <VictoryChart
                theme={VictoryTheme.material}
                    //padding
                    domainPadding={30}
                >
                <VictoryAxis
                    tickValues={[1,2,3,4]}
                    tickFormat={["Produto 1","Produto 2","Produto 3","Produto 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x)=>(`R$ ${x/100}`)}
                />
                    <VictoryBar
                        data={data}
                        x='Produto'
                        y='Valor'
                    />
                </VictoryChart>
            </div>
        </EstatDiv>
    )
}
export default Estatistica