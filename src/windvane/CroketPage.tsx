import {ReactNode, useCallback, useMemo, useState} from "react";
import WindVane from "./WindVane";

const CroketPage = () => {
    const [ count, setCount ] = useState(0)


    const makeVane = useCallback((n: number) => {

        const firstArea: Array<Array<ReactNode>> = [[]]

        const addStar = (num:number, xLineArr: ReactNode[]) => {
            for(let i=0; i<num; i++) {
                xLineArr.push(<div style={{width: '20px', height: '20px'}}>🌟</div>)
            }
        }

        const addEmpty = (num:number, xLineArr: ReactNode[]) => {
            for(let i=0; i<num; i++) {
                xLineArr.push(<div style={{width: '20px', height: '20px'}}>🌌</div>)
            }

        }

        // y값 만큼 반복
        for(let i=n; i>0; i--) {
            const xLineArr: ReactNode[] = []
            const emptyNum: number = n;

            if(i < emptyNum) {
                addEmpty(emptyNum - i, xLineArr)
            }

            addStar(i, xLineArr)

            firstArea[0].push(xLineArr)
        }

        return [...firstArea]
    }, [count])


    const windvane = useMemo(() => {
        return makeVane(count)
    }, [count])

    return <div>
        <div>
            <button className={'bg-violet-600 text-white rounded-md px-2 py-1'} onClick={() => {
                if(count > 19) return window.confirm('이제 그만~')
                setCount(prevState => prevState + 1)
            }}>
                {count}++
            </button>
            <div className={'flex flex-col'}>
                <div className={'firstArea flex flex-row'}>
                    <div>
                        <WindVane windArr={windvane}/>
                    </div>
                    <div>
                        <WindVane windArr={windvane} rotate={90}/>
                    </div>
                </div>
                <div className={'secondArea flex flex-row'}>
                    <div>
                        <WindVane windArr={windvane} rotate={270}/>
                    </div>
                    <div>
                        <WindVane windArr={windvane} rotate={-180}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CroketPage