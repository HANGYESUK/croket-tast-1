import VaneModule from "./VaneModule";

interface WindVaneProps {
    count: number;
}
const WindVane = ({ count }: WindVaneProps) => {

    return      <div className={'flex flex-col'}>
        <div className={'flex flex-row'}>
            <VaneModule count={count} />
            <VaneModule count={count} rotate={90}/>
        </div>
        <div className={'flex flex-row'}>
            <VaneModule count={count}  rotate={270}/>
            <VaneModule count={count}  rotate={180}/>
        </div>
    </div>
}

export default WindVane