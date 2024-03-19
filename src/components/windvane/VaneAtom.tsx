import React, {ReactElement, ReactNode} from "react";

interface VaneAtomProps  {
    rotate?: number;
    children: ReactNode
}

const VaneAtom = React.memo(({ rotate ,children }: VaneAtomProps): ReactElement => {
    return <div style={{ width: '20px', height: '20px', margin: '2px', rotate: `-${rotate}deg` }}>
        {children}
    </div>
});
export default VaneAtom