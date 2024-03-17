import {ReactNode} from "react";

interface WindVaneProps {
    windArr: Array<Array<ReactNode>>
    rotate?: number;
}

const WindVane = ({ windArr, rotate = 0 }: WindVaneProps) => {
    return <div className={'flex flex-col'}  style={{ rotate: `${rotate}deg`}}>
        {
            windArr[0].map(item => {
                return <div className={'flex'} >
                    <div className={'flex flex-row'}>{item}</div>
                </div>
            })
        }
    </div>
}

export default WindVane