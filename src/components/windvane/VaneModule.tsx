import React, {ReactNode} from "react";
import useMakeVaneModule from "../../hooks/useMakeVaneModule";
import VaneAtom from "./VaneAtom";

interface WindVaneProps {
    count: number;
    vaneAtom?: ReactNode;
    bg?: ReactNode;
    rotate?: number;
}

const VaneModule = React.memo(({ count, vaneAtom= '🌟', bg='🌌', rotate = 0 }: WindVaneProps) => {

    const { vaneModule } = useMakeVaneModule({
            count: count,
            vaneAtom: <VaneAtom rotate={rotate}>{vaneAtom}</VaneAtom> ,
            bg:<VaneAtom rotate={rotate}>{bg}</VaneAtom>
    })

    return <div className={'flex flex-col'}  style={{ transform: `rotate(${rotate}deg)`}}>
        {
            vaneModule.map((item, index) => {
                return <div className={'flex flex-row'} key={`${item}-${index}`}>
                    { item }
                </div>
            })
        }
    </div>
})

export default VaneModule