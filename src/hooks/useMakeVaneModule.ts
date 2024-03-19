import {ReactNode, useMemo} from "react";

type MakeVaneParameterType = {
    count: number;
    vaneAtom?: ReactNode;
    bg?: ReactNode;
}
const useMakeVaneModule = ({count, vaneAtom = '🌟', bg = '🌌'}: MakeVaneParameterType ) => {

    const addVaneAtom = (num:number, xLineArr: ReactNode[]) => {
        for(let i=0; i<num; i++) {
            xLineArr.push(vaneAtom)
        }
    }

    const addBg = (num:number, xLineArr: ReactNode[]) => {
        for(let i=0; i<num; i++) {
            xLineArr.push(bg)
        }

    }

    const vaneModule = useMemo(() => {
        const module: ReactNode[] = []

        // y값 만큼 반복
        for(let i=count; i>0; i--) {
            const xLineArr: ReactNode[] = []
            const emptyNum: number = count;

            if(i < emptyNum) {
                addBg(emptyNum - i, xLineArr)
            }

            addVaneAtom(i, xLineArr)

            module.push(xLineArr)
        }
        
        return module


    }, [count, vaneAtom, bg])


    return {
        vaneModule : [...vaneModule]
    }
}

export default useMakeVaneModule;